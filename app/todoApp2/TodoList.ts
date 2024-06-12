export class TodoList {
    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    private todos: Todo[];

    get() {
        return this.todos;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
}

export class Todo {
    content: string
    checked: boolean;

    constructor(content: string) {
        this.checked = false
        this.content = content
    }

}
