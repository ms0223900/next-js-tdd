import { TodoItem } from "app/TodoApp3/types";

export class TodoList {
    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }

    private todos: TodoItem[];

    push(todoItem: TodoItem) {
        this.todos.push(todoItem)

    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getTodos() {
        return this.todos;
    }

    findById(id: number) {
        return this.todos.find(t => t.id === id);
    }
}
