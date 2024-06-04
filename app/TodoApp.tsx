export class TodoApp {
    todoList: ITodo[]

    constructor(todoList: ITodo[]) {
        this.todoList = todoList;
    }

    getTodos() {
        return this.todoList;
    }

    addTodo(input: string) {
        this.todoList.push({
            id: this.todoList.length,
            checked: false,
            content: input
        })
    }

    checkTodo(id: number) {
        const foundTodo = this.getTodoById(id);
        if (foundTodo) {
            foundTodo.checked = !foundTodo.checked
        }
    }

    getTodoById(id: number) {
        const foundTodo = this.todoList.find(todo => todo.id === id);
        return foundTodo;
    }

    editTodo(id: number, content: string) {
        const todoById = this.getTodoById(id);
        if (todoById) {
            todoById.content = content
        }

    }

    removeTodo(id: number) {
        const foundIdx = this.todoList.findIndex(todo => todo.id === id);
        this.todoList = [
            ...this.todoList.slice(0, foundIdx),
            ...this.todoList.slice(foundIdx + 1),
        ]
    }
}

interface ITodo {
    id: number;
    checked: boolean
    content: string
}

export class Todo {
    private checked: boolean;
    private id: number;
    private content: string;

    constructor({ checked, id, content }: { checked: boolean; id: number; content: string }) {
        this.checked = checked
        this.id = id
        this.content = content
    }

}
