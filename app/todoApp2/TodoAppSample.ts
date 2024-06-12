import { Todo, TodoList } from "app/todoApp2/TodoList";

export class TodoAppSample {
    constructor() {
        this.todoList = new TodoList([]);
    }

    private todoList: TodoList;

    addTodo(content: string) {
        this.todoList.addTodo(content)

    }

    getTodoList() {
        return this.todoList.get();
    }

    removeTodo(id: number) {
        this.todoList.remove(id)
    }

    getTodo(id: number) {
        return this.todoList.getTodoById(id);
    }
}
