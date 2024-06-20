import { TodoApp } from "app/TodoApp/TodoApp";

describe('Todo App', function () {
    let todoApp = new TodoApp();
    beforeEach(() => {
        todoApp = new TodoApp();
    });

    it('Should add todo, and get one todo.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            {
                id:0,
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
                id:0,
                checked: false,
                content: '- [ ] Add todo, and get todo'
            },
            {
                id:1,
                checked: false,
                content: '- [ ] Add two todos'
            }
        ])
    });

    it('Should add two todos, and get two todos.', () => {
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            {
                id: 0,
                checked: false,
                content: '- [ ] Add todo, and get todo'
            },
        ])
        todoApp.removeTodo(0)
    });



});
