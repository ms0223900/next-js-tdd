import { TodoList } from "app/TodoApp/TodoList";

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

    toggleCompleted(id: number) {
        const findById = this.todoList.findById(id);
        findById?.toggle()
    }

    getTodoById(id: number) {
        return this.todoList.findById(id);
    }

    editTodo(id: number, content: string) {
        const findById = this.todoList.findById(id);
        findById?.editContent(content)
    }
}
