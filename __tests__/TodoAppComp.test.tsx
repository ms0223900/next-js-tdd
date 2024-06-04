import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { Todo, TodoApp } from "../app/TodoApp";

function TodoListApp() {
    const todoAppRef = useRef<TodoApp>(new TodoApp([]));
    const [content, setContent] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([]);

    function updateTodoToState() {
        setTodoList(todoAppRef.current.getTodos())
    }

    function handleAddTodo() {
        todoAppRef.current.addTodo(content)
        updateTodoToState();
    }

    function handleRemoveTodo(id: number) {
        todoAppRef.current.removeTodo(id)
        updateTodoToState();
    }

    function handleToggleTodo(id: number) {
        todoAppRef.current.checkTodo(id)
        updateTodoToState()
    }

    return (
        <div>
            <input data-testid={"todoInput"}
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
            <ul>
                {todoList.map(todo => (
                    <div>
                        <input data-testid={"todoCheckbox"} checked={todo.checked}
                               onChange={(e) => handleToggleTodo(todo.id)} />
                        <li key={todo.id} data-testid={"todo"}>
                            {todo.content}
                        </li>
                        <button data-testid={"deleteTodoBtn"}
                                onClick={() => handleRemoveTodo(todo.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </ul>
            <button data-testid={"addButton"} onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
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

    it('should toggle check todo', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        const todoCheckboxes = await screen.findAllByTestId('todoCheckbox');
        fireEvent.change(todoCheckboxes[0], {
            target: {
                checked: true,
            }
        })

        await waitFor(async () => {
            expect((todoCheckboxes[0] as HTMLInputElement).checked).toBeTruthy()
            expect(await screen.findAllByTestId('todo')).toHaveLength(1)
        })
    })


})
