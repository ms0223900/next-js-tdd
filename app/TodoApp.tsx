interface IdGenerator {
    getId: () => number
}


class IdGeneratorImpl implements IdGenerator {
    private id = 0;

    getId() {
        const id = this.id;
        this.id++
        return id;
    }
}

export class TodoApp {
    todoList: Todo[]
    private latestId: number = 0;
    private idGenerator: IdGenerator;

    constructor(todoList: Todo[], idGenerator: IdGenerator = new IdGeneratorImpl()) {
        this.todoList = todoList;
        this.idGenerator = idGenerator
    }

    getTodos() {
        return [ ...this.todoList ];
    }

    addTodo(input: string) {
        this.todoList.push(new Todo({
            id: this.idGenerator.getId(),
            checked: false,
            content: input
        }))
    }

    checkTodo(id: number) {
        const foundTodo = this.getTodoById(id);
        foundTodo?.toggleChecked()
    }

    getTodoById(id: number) {
        const foundTodo = this.todoList.find(todo => todo.id === id);
        return foundTodo;
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

    set checked(value: boolean) {
        this._checked = value;
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
