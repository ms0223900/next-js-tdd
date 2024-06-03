import { TodoApp } from "./TodoApp";

describe('Todo List test', () => {
    let todoApp: TodoApp;
    it('should render list', () => {
        todoApp = new TodoApp([
            {
                checked: false,
                content: ""
            }
        ]);

        expect(todoApp.getTodos()).toHaveLength(1)
    })

    it('should add todo', () => {
        todoApp = new TodoApp([]);
        todoApp.addTodo('hi')
        expect(todoApp.getTodos()).toHaveLength(1)

    });
})
