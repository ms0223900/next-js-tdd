class TodoList {
    constructor(todos: Todo[]) {
        this.todos = todos;
    }

    private todos: Todo[];

    get() {
        return this.todos;
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
}

class TodoAppSampleTest {
    constructor() {
        this.todoList = new TodoList([]);
    }

    private todoList: TodoList;

    addTodo(content: string) {
        this.todoList.addTodo(new Todo(content))

    }

    getTodoList() {
        return this.todoList.get();
    }
}

class Todo {
    content: string
    checked: boolean;

    constructor(content: string) {
        this.checked = false
        this.content = content
    }

}

describe('Todo App TDD Sample', function () {
    it('Should add todo', () => {
        let todoAppSample = new TodoAppSampleTest();
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodoList()).toEqual([
            new Todo('hi')
        ])
    });

    it('Should add two todos', () => {
        let todoAppSample = new TodoAppSampleTest();
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('hoooo')
        expect(todoAppSample.getTodoList()).toEqual([
            new Todo('hi'),
            new Todo('hoooo'),
        ])
    });


});
