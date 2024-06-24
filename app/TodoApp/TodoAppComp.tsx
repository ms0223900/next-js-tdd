import React, { useRef, useState } from "react";
import { TodoApp } from "app/TodoApp/TodoApp";
import { TodoItem } from "app/TodoApp/TodoItem";

export function TodoAppComp() {
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
