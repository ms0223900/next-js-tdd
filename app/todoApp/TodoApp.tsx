import { Todo } from "app/todoApp/Todo";
import { AddTodoAction, TodoList } from "app/todoApp/TodoList";

interface IdGenerator {
    getId: () => number
}


export class IdGeneratorImpl implements IdGenerator {
    private id = 0;

    getId() {
        const id = this.id;
        this.id++
        return id;
    }
}

interface TodoRepo {
    getTodos: () => Promise<Todo[]>
}

export class TodoDto {
    id: number
    checked: boolean
    content: string

    constructor({
                    id, checked, content
                }: { id: number, checked: boolean, content: string }) {
        this.id = id;
        this.checked = checked;
        this.content = content;
    }
}

export class TodoRepoImpl implements TodoRepo {
    async getTodos(): Promise<Todo[]> {
        return Promise.resolve([]);
    }
}

export class TodoApp {
    todoList: TodoList
    private idGenerator: IdGenerator;
    private todoRepo: TodoRepo;

    constructor(todoList: Todo[], idGenerator: IdGenerator = new IdGeneratorImpl(), todoRepo = new TodoRepoImpl()) {
        this.todoList = new TodoList([])
        this.idGenerator = idGenerator
        this.todoRepo = todoRepo
    }

    getTodos() {
        return [...this.todoList.getTodos()];
    }

    addTodo(input: string) {
        this.todoList.dispatch(new AddTodoAction(this.idGenerator.getId(), input))
    }

    checkTodo(id: number) {
        this.todoList.checkTodo(id)
    }

    editTodo(id: number, content: string) {
        this.todoList.editTodo(id, content)
    }

    removeTodo(id: number) {
        this.todoList.removeTodo(id)
    }

    async asyncSyncTodos() {
        const todos = await this.todoRepo.getTodos();
        this.todoList.setTodos([...todos])
    }
}
