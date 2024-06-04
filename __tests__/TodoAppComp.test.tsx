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

    return (
        <div>
            <input data-testid={"todoInput"}
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id} data-testid={"todo"}>
                        {todo.content}
                    </li>
                ))}
            </ul>
            <button data-testid={"addButton"} onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
    return null;
}

describe('Todo App component tests', () => {
    it('should render elements', async () => {
        givenRender()

        expect(await screen.findByTestId('addButton')).toBeInTheDocument()
    })

    function givenRender() {
        render(
            <TodoListApp />
        )
    }

    it('should add todo', async () => {
        givenRender();

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
        })
    })


})
