import { TodoItem } from "app/TodoAppSample/TodoItem";

export class TodoList {
    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }

    todos: TodoItem[]

    push(todoItem: TodoItem) {
        this.todos.push(todoItem)
    }

    removeTodo(todoId: number) {
        this.todos = this.todos.filter(todo => todo.id !== todoId)
    }

    getById(id: number) {
        return this.todos.find(todo => todo.id === id);
    }
}
