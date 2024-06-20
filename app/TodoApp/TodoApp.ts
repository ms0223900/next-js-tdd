import { TodoList } from "app/TodoApp/TodoList";

export interface TodoItem {
    id: number;
    checked: boolean
    content: string
}

export class TodoApp {
    private todoList: TodoList
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
