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

type TodoAction = AddTodoAction

class AddTodoAction {
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

class TodoList {
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

export class Todo {
    private _checked: boolean;
    private _id: number;
    private _content: string;

    constructor({ checked, id, content }: { checked: boolean; id: number; content: string }) {
        this._checked = checked
        this._id = id
        this._content = content
    }

    get checked(): boolean {
        return this._checked;
    }

    get id(): number {
        return this._id;
    }

    get content(): string {
        return this._content;
    }

    set id(value: number) {
        this._id = value;
    }

    set content(value: string) {
        this._content = value;
    }

    toggleChecked() {
        this._checked = !this._checked
    }

    updateContent(content: string) {
        this._content = content
    }
}
