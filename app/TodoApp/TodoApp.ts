export interface TodoItem {
    id: number;
    checked: boolean
    content: string
}

class TodoList {
    todos: TodoItem[]
    private id = 0;

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

export class TodoApp {
    private todos: TodoList
    private id = 0;

    constructor() {
        this.todos = new TodoList([])
    }

    addTodo(content: string) {
        this.todos.addTodo(content)
    }

    getTodos() {
        return this.todos.todos;
    }

    removeTodo(id: number) {
        this.todos.remove(id)
    }
}
