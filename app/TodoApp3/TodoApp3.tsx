import { TodoItem } from "app/TodoApp3/types";

class TodoList {
    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }
    private todos: TodoItem[];

    push(todoItem: TodoItem) {
        this.todos.push(todoItem)

    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getTodos() {
        return this.todos;
    }
}

export class TodoApp3 {
    private latestId = 0;
    constructor() {
        this.todoList = new TodoList([])
    }

    private todoList: TodoList

    addTodo(content: string) {
        let id = this.latestId;
        this.todoList.push({
            id: id,
            checked: false,
            content,
        })
        this.latestId++
    }

    getTodoList(): TodoItem[] {
        return this.todoList.getTodos();
    }

    removeTodo(todoId: number) {
        this.todoList.removeTodo(todoId)
    }
}
