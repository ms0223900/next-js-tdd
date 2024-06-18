import { TodoItem } from "app/TodoApp3/types";
import { TodoList } from "app/TodoApp3/TodoList";

export class TodoApp3 {
    constructor() {
        this.todoList = new TodoList([])
    }

    private todoList: TodoList

    addTodo(content: string) {
        this.todoList.addTodo(content)
    }

    getTodoList(): TodoItem[] {
        return this.todoList.getTodos();
    }

    removeTodo(todoId: number) {
        this.todoList.removeTodo(todoId)
    }

    toggleTodo(id: number) {
        const todoById = this.todoList.findById(id);
        todoById?.toggleTodo()
    }

    findTodoById(id: number) {
        return this.todoList.findById(id);
    }

    editTodo(id: number, content: string) {
        const findById = this.todoList.findById(id);
        findById?.setContent(content)
    }
}
