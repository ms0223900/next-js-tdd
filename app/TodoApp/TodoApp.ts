export interface TodoItem {
    id: number;
    checked: boolean
    content: string
}

export class TodoApp {
    private todos: TodoItem[];
    private id = 0;

    constructor() {
        this.todos = [];
    }

    addTodo(content: string) {
        this.todos.push({
            id: this.id,
            checked: false,
            content,
        })
        this.id++
    }

    getTodos() {
        return this.todos;
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo=>todo.id!==id)
    }
}
