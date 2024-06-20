interface TodoItem {
    checked: boolean
    content: string
}

class TodoApp {
    private todos: TodoItem[];


    constructor() {
        this.todos = [];
    }

    addTodo(content: string) {
        this.todos.push({
            checked: false,
            content,
        })

    }

    getTodos() {
        return this.todos;

    }
}

describe('Todo App', function () {
    let todoApp = new TodoApp();
    beforeEach(() => {
        todoApp = new TodoApp();
    });

    it('Should add todo, and get one todo.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            {
                checked: false,
                content: '- [ ] Add todo, and get todo'
            }
        ])
    });

    it('Should add two todos, and get two todos.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        todoApp.addTodo('- [ ] Add two todos')
        expect(todoApp.getTodos()).toEqual([
            {
                checked: false,
                content: '- [ ] Add todo, and get todo'
            },
            {
                checked: false,
                content: '- [ ] Add two todos'
            }
        ])
    });


});
