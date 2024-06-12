import { Todo } from "app/todoApp/Todo";

type TodoAction = AddTodoAction

export class AddTodoAction {
    type: string;
    payload: { checked: boolean; id: any; content: string };

    constructor(id: number, input: string) {
        this.type = 'ADD_TODO'
        this.payload = {
            id: id,
            checked: false,
            content: input,
        }
    }

}

export class TodoList {
    todoList: Todo[]

    constructor(todoList: Todo[]) {
        this.todoList = todoList;
    }

    getTodoById(id: number) {
        const foundTodo = this.todoList.find(todo => todo.id === id);
        return foundTodo;
    }

    getTodos() {
        return [...this.todoList];
    }

    checkTodo(id: number) {
        const foundTodo = this.getTodoById(id);
        foundTodo?.toggleChecked()

    }

    editTodo(id: number, content: string) {
        const todoById = this.getTodoById(id);
        todoById?.updateContent(content)
    }

    removeTodo(id: number) {
        const foundIdx = this.todoList.findIndex(todo => todo.id === id);
        this.todoList = [
            ...this.todoList.slice(0, foundIdx),
            ...this.todoList.slice(foundIdx + 1),
        ]
    }

    setTodos(_todos: Todo[]) {
        this.todoList = [..._todos]
    }

    dispatch(action: TodoAction) {
        if (action.type === 'ADD_TODO') {
            this.todoList.push(new Todo(action.payload))
            return
        }

    }
}
