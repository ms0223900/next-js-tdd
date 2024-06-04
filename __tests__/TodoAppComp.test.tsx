import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { Todo, TodoApp } from "../app/TodoApp";

function TodoListApp() {
    const todoAppRef = useRef<TodoApp>(new TodoApp([]));
    const [content, setContent] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([]);

    function handleAddTodo() {
        todoAppRef.current.addTodo(content)
        setTodoList(todoAppRef.current.getTodos())
    }

    function handleDeleteTodo(id: number) {
        todoAppRef.current.removeTodo(id)
        setTodoList(todoAppRef.current.getTodos())
    }

    return (
        <div>
            <input data-testid={"todoInput"}
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
            <ul>
                {todoList.map(todo => (
                    <div>
                        <li key={todo.id} data-testid={"todo"}>
                            {todo.content}
                        </li>
                        <button data-testid={"deleteTodoBtn"}
                                onClick={() => handleDeleteTodo(todo.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
            <button data-testid={"addButton"} onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
    return null;
}

describe('Todo App component tests', () => {
    async function givenRender() {
        await render(
            <TodoListApp />
        )
    }

    it('should render elements', async () => {
        await givenRender()

        expect(await screen.findByTestId('addButton')).toBeInTheDocument()
    })

    it('should add todo', async () => {
        await givenRender()

        const todoInput = await screen.findByTestId('todoInput');
        fireEvent.input(todoInput, {
            target: {
                value: 'hi'
            }
        })

        const addButton = await screen.findByTestId('addButton');
        fireEvent.click(addButton)

        await waitFor(() => {
            expect(screen.getByTestId('todo')).toBeInTheDocument()
            expect(screen.getByTestId('todo').innerHTML).toEqual('hi')
        })
    })

    async function givenInput(todoContent: string) {
        const todoInput = await screen.findByTestId('todoInput');
        fireEvent.change(todoInput, {
            target: {
                value: todoContent
            }
        })
    }

    async function whenClickAddButton() {
        const addButton = await screen.findByTestId('addButton');
        fireEvent.click(addButton)
    }

    it('should add several todos', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        await givenInput('hey');
        await whenClickAddButton();

        await givenInput('hooo');
        await whenClickAddButton();

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(3)
        })
    })

    it('should delete todo', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        await givenInput('hooo');
        await whenClickAddButton();

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(2)
        })

        const deleteTodoBtn = await screen.findAllByTestId('deleteTodoBtn');
        fireEvent.click(deleteTodoBtn[1])

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(1)
        })
    })


})
