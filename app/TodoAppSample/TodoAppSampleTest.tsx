import { TodoItem } from "app/TodoAppSample/TodoItem";
import { TodoList } from "app/TodoAppSample/TodoList";

export class TodoAppSampleTest {
    private todoLatestId = 0; // 應該要隨 add 變多！
    constructor() {
        this.todoList = new TodoList([])
    }

    private todoList: TodoList;

    addTodo(todoContent: string) {
        this.todoList.push(new TodoItem(this.todoLatestId, todoContent, false))
        this.todoLatestId++
    }

    getTodos() {
        return this.todoList.todos;
    }

    removeTodo(todoId: number) {
        this.todoList.removeTodo(todoId)
    }

    toggleTodo(id: number) {
        const todoById = this.todoList.getById(id);
        todoById?.toggle()
    }

    editContent(id: number, content: string) {
        const todoById = this.todoList.getById(id);
        todoById?.setContent(content)
    }

    getTodoById(id: number) {
        return this.todoList.getById(id);
    }
}
