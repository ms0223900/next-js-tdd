import { TodoItem } from "app/TodoApp3/types";

export class TodoApp3 {
    private latestId = 0;
    constructor() {
        this.todoList = [];
    }

    private todoList: TodoItem[];

    addTodo(content: string) {
        let id = this.latestId;
        this.todoList.push({
            id: id,
            checked: false,
            content,
        })
        this.latestId++
    }

    getTodoList() {
        return this.todoList;
    }

    removeTodo(todoId: number) {
        const newTodoList = this.todoList.filter(todo => todo.id !== todoId);
        this.todoList = newTodoList
    }
}
