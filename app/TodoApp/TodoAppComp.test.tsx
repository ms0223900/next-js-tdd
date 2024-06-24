import { fireEvent, render, screen } from "@testing-library/react";
import React, { useState } from "react";
import { useRef } from "react";
import { TodoApp } from "app/TodoApp/TodoApp";
import { TodoItem, TodoItemImpl } from "app/TodoApp/TodoItem";

function TodoAppComp() {
    const todoAppRef = useRef(new TodoApp());
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<TodoItem[]>([]);

    function handleAddTodo() {
        todoAppRef.current.addTodo(value)
        setTodos(todoAppRef.current.getTodos())
    }

    return <div>
        <input
            value={value}
            onChange={e => {
                setValue(e.target.value)
            }}
            data-testid="todoInput" />
        <button data-testid="addBtn" onClick={handleAddTodo}>Add</button>
        <div>
            {todos.map(todo => (
                <div key={todo.id}>{todo.content}</div>
            ))}
        </div>
    </div>;
}

describe('Todo App Component', function () {
    it('Should have add button.', async () => {
        await render(
            <TodoAppComp />
        )

        expect(screen.getByTestId('addBtn')).toBeInTheDocument()
    });

    it('Should add one todo, and get one todo.', async () => {
        await render(
            <TodoAppComp />
        )

        fireEvent.change(
            screen.getByTestId('todoInput'),
            { target: { value: 'hi' } }
        )
        fireEvent.click(screen.getByTestId('addBtn'))

        expect(screen.queryByText('hi')).toBeInTheDocument()
    });


});
