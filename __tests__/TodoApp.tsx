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
            checked: false,
            content: input
        })
    }
}

interface Todo {
    checked: boolean
    content: string
}
