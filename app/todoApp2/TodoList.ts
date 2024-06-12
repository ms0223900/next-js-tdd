export class TodoList {
    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    private todos: Todo[];

    get() {
        return this.todos;
    }

    addTodo(content: string) {
        this.todos.push(new Todo(this.todos.length, content))
    }

    remove(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

export class Todo {
    content: string
    checked: boolean;
    id: number;

    constructor(id: number, content: string) {
        this.id = id
        this.checked = false
        this.content = content
    }

}
