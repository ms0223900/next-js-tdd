import { TodoApp } from "../app/TodoApp";

describe('Todo List test', () => {
    let todoApp: TodoApp;

    it('should add todo', () => {
        todoApp = new TodoApp([]);
        todoApp.addTodo('hi')
        expect(todoApp.getTodos()).toHaveLength(1)
        expect(todoApp.getTodos()[0]).toEqual({
            id: 0,
            checked: false,
            content: 'hi'
        })
    });

    it('should check todo', () => {
        todoApp = new TodoApp([]);
        todoApp.addTodo('hi')
        expect(todoApp.getTodoById(0)?.checked).toBeFalsy()

        todoApp.checkTodo(0)
        expect(todoApp.getTodoById(0)?.checked).toBeTruthy()
    });



})
