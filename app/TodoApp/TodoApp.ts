interface TodoItem {
    checked: boolean
    content: string
}

export class TodoApp {
    private todos: TodoItem[];

    constructor() {
        this.todos = [];
    }

    addTodo(content: string) {
        this.todos.push({
            checked: false,
            content,
        })
    }

    getTodos() {
        return this.todos;
    }
}
