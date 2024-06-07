'use client'
import React, { useRef, useState } from "react";
import { IdGeneratorImpl, Todo, TodoApp } from "./TodoApp";
import { TodoRepoImpl } from "./TodoList.test";

export function TodoListApp() {
    const todoAppRef = useRef<TodoApp>(new TodoApp([], new IdGeneratorImpl(), new TodoRepoImpl()));
    const [content, setContent] = useState("");
    const [editingContent, setEditingContent] = useState("");
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [editingTodo, setEditingTodo] = useState<Todo['id']>();

    function updateToState() {
        setTodoList(todoAppRef.current.getTodos())
    }

    function handleAddTodo() {
        todoAppRef.current.addTodo(content)
        updateToState();
        setContent("")
    }

    function handleRemoveTodo(id: number) {
        todoAppRef.current.removeTodo(id)
        updateToState();
    }

    function handleToggleTodo(id: number) {
        todoAppRef.current.checkTodo(id)
        updateToState()
    }

    function handleToggleEditTodo(id: number) {
        setEditingTodo(id)
    }

    function handleEditTodo(value: string) {
        setEditingContent(value)
    }

    function handleConfirmEdit() {
        if (typeof editingTodo !== 'number') return
        todoAppRef.current.editTodo(editingTodo, editingContent)
        updateToState()

        setEditingTodo(undefined)
        setEditingContent('')
    }

    return (
        <div>
            <input data-testid={"todoInput"}
                   value={content}
                   onChange={(e) => setContent(e.target.value)} />
            <ul>
                {todoList.map(todo => (
                    <div key={todo.id} style={{
                        display: 'flex',
                        gap: '.5rem'
                    }}>
                        <input type={"checkbox"} data-testid={"todoCheckbox"} checked={todo.checked}
                               onChange={(e) => handleToggleTodo(todo.id)} />
                        {editingTodo === todo.id ? (
                                <div>
                                    <input data-testid={"todoContentInput"}
                                           onChange={e => handleEditTodo(e.target.value)} />
                                    <button data-testid={"confirmEditBtn"} onClick={handleConfirmEdit}>OK</button>
                                </div>
                            ) :
                            <li key={todo.id} data-testid={"todo"} onDoubleClick={() => handleToggleEditTodo(todo.id)}>
                                {todo.content}
                            </li>
                        }
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
