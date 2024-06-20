import { TodoItem } from "app/TodoApp/TodoApp";

class TodoItemImpl implements TodoItem {
    constructor({ id, checked, content }: Pick<TodoItem, 'id' | 'checked' | 'content'>) {
        this.checked = checked;
        this.content = content;
        this.id = id;
    }

    checked: boolean;
    content: string;
    id: number;

    toggle(): void {
        this.checked = !this.checked
    }
}

export class TodoList {
    private id = 0;
    todos: TodoItemImpl[]

    constructor(todos: TodoItem[]) {
        this.todos = todos;
    }

    addTodo(content: string) {
        this.todos.push(new TodoItemImpl({
            id: this.id,
            checked: false,
            content,
        }))
        this.id++
    }

    remove(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    findById(id: number) {
        return this.todos.find(todo => todo.id === id);
    }
}
