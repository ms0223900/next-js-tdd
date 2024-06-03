export class TodoApp {
    todoList: Todo[]

    constructor(todoList: Todo[]) {
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

}

interface Todo {
    id: number;
    checked: boolean
    content: string
}
