import { TodoItem } from "app/TodoApp3/types";

export class TodoList {
    private latestId = 0;
    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }

    private todos: TodoItem[];
    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getTodos() {
        return this.todos;
    }

    findById(id: number) {
        return this.todos.find(t => t.id === id);
    }

    addTodo(content: string) {
        this.todos.push(new TodoItem({
            id: this.latestId,
            checked: false,
            content,
        }))
        this.latestId++
    }
}
