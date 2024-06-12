import { Todo, TodoList } from "app/todoApp2/TodoList";

export class TodoAppSample {
    constructor() {
        this.todoList = new TodoList([]);
    }

    private todoList: TodoList;

    addTodo(content: string) {
        this.todoList.addTodo(new Todo(content))

    }

    getTodoList() {
        return this.todoList.get();
    }
}
