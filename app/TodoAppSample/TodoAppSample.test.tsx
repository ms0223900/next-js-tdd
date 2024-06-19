class TodoItem {
    constructor(content: string, checked: boolean) {
        this.content = content;
        this.checked = checked;
    }
    content:string
    checked:boolean
}

class TodoAppSampleTest {
    constructor() {
        this.todos = [];
    }
    private todos: TodoItem[];
    addTodo(todoContent: string) {
        this.todos.push(new TodoItem(todoContent,false))
    }

    getTodos() {
        return this.todos;
    }
}

// 先以 TDD 方式做出核心 Todo App 邏輯，不包含前端介面
describe('Todo App Sample', function () {
    it('Should add one todo, and get one todo.', () => {
        const todoAppSample = new TodoAppSampleTest();
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([{
            content: 'hi',
            checked: false,
        }])
    });

    it('Should add two todos, and get two todos.', () => {
        const todoAppSample = new TodoAppSampleTest();
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('hooo')
        expect(todoAppSample.getTodos()).toEqual([
            {
                content: 'hi',
                checked: false,
            },
            {
                content: 'hooo',
                checked: false,
            },
        ])
    });


});
