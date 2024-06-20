import { TodoItem } from "app/TodoApp/TodoApp";

export class TodoList {
    private id = 0;
    todos: TodoItem[]

    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }

    addTodo(content: string) {
        this.todos.push({
            id: this.id,
            checked: false,
            content,
        })
        this.id++
    }

    remove(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
}
