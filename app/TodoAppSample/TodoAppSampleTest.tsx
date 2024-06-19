import { TodoItem } from "app/TodoAppSample/TodoItem";

export class TodoAppSampleTest {
    private todoLatestId = 0; // 應該要隨 add 變多！
    constructor() {
        this.todos = [];
    }

    private todos: TodoItem[];

    addTodo(todoContent: string) {
        this.todos.push(new TodoItem(this.todoLatestId, todoContent, false))
        this.todoLatestId++
    }

    getTodos() {
        return this.todos;
    }

    removeTodo(todoId: number) {
        this.todos=this.todos.filter(todo=>todo.id!==todoId)
    }

    toggleTodo(id: number) {
        const todoById = this.getTodoById(id);
        todoById?.toggle()
    }

     getTodoById(id: number) {
        const todoById = this.todos.find(todo => todo.id === id);
        return todoById;
    }

    editContent(id: number, content: string) {
        const todoById = this.getTodoById(id);
        todoById?.setContent(content)
    }
}
