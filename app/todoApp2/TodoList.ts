export class TodoList {
    private currentId = 0;

    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    private todos: Todo[];

    get() {
        return this.todos;
    }

    addTodo(content: string) {
        this.todos.push(new Todo(this.getNextId(), content))
    }


    remove(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getTodoById(id: number) {
        return this.todos.find(todo => todo.id === id);
    }

    private getNextId() {
        const currentId = this.currentId;
        this.currentId++
        return currentId;
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

    toggleChecked() {
        this.checked = !this.checked
    }
}
