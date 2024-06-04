import React, { useRef, useState } from "react";
import { Todo, TodoApp } from "./TodoApp";

export function TodoListApp() {
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
