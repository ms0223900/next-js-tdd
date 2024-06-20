import { TodoApp, TodoItem } from "app/TodoApp/TodoApp";

describe('Todo App', function () {
    let todoApp = new TodoApp();
    beforeEach(() => {
        todoApp = new TodoApp();
    });

    function todo(params?: Partial<TodoItem>) {
        return {
            id: 0,
            checked: false,
            content: '- [ ] Add todo, and get todo',
            ...params
        };
    }

    it('Should add todo, and get one todo.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            todo()
        ])
    });

    it('Should add two todos, and get two todos.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        todoApp.addTodo('- [ ] Add two todos')
        expect(todoApp.getTodos()).toEqual([
            todo({ id: 0, checked: false, content: '- [ ] Add todo, and get todo' }),
            todo({ id: 1, checked: false, content: '- [ ] Add two todos' }),
        ])
    });


    it('Should remove todo.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            todo({ id: 0, checked: false, content: '- [ ] Add todo, and get todo' }),
        ])
        todoApp.removeTodo(0)
        expect(todoApp.getTodos()).toHaveLength(0)
    });

    it('Should remove two todos, and get 0 todos.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        todoApp.addTodo('- [ ] Add two todos')
        expect(todoApp.getTodos()).toEqual([
            todo({ id: 0, checked: false, content: '- [ ] Add todo, and get todo' }),
            todo({ id: 1, checked: false, content: '- [ ] Add two todos' }),
        ])
        todoApp.removeTodo(0)
        todoApp.removeTodo(1)
        expect(todoApp.getTodos()).toHaveLength(0)
    });

});
