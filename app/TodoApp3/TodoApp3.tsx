import { TodoItem } from "app/TodoApp3/types";
import { TodoList } from "app/TodoApp3/TodoList";

export class TodoApp3 {
    private latestId = 0;
    constructor() {
        this.todoList = new TodoList([])
    }

    private todoList: TodoList

    addTodo(content: string) {
        let id = this.latestId;
        this.todoList.push(new TodoItem({
            id: id,
            checked: false,
            content,
        }))
        this.latestId++
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
