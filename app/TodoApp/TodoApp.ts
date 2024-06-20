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
    private todoList: TodoList
    private id = 0;

    constructor() {
        this.todoList = new TodoList([])
    }

    addTodo(content: string) {
        this.todoList.addTodo(content)
    }

    getTodos() {
        return this.todoList.todos;
    }

    removeTodo(id: number) {
        this.todoList.remove(id)
    }
}
