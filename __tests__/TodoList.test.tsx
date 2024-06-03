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
        given_add_todos('hi')

        expect(todoApp.getTodoById(0)?.checked).toBeFalsy()

        todoApp.checkTodo(0)
        expect(todoApp.getTodoById(0)?.checked).toBeTruthy()

        todoApp.checkTodo(0)
        expect(todoApp.getTodoById(0)?.checked).toBeFalsy()
    });

    function given_add_todos(todoInput: string = 'hi') {
        todoApp = new TodoApp([]);
        todoApp.addTodo(todoInput)
    }

    it('should edit todo', () => {
        let NEW_TODO_CONTENT = 'hiiii';
        given_add_todos();

        todoApp.editTodo(0, NEW_TODO_CONTENT)
        expect(todoApp.getTodoById(0)?.content).toEqual(NEW_TODO_CONTENT)
    });

    function given_todo_list(todoInputs: string[] = ['hi', 'ho']) {
        todoApp = new TodoApp([]);
        for (let i = 0; i < todoInputs.length; i++) {
            todoApp.addTodo(todoInputs[i])
        }
    }

    it('should delet todo', () => {
        given_todo_list();

        todoApp.removeTodo(1)
        expect(todoApp.getTodos()).toEqual([ {
            id: 0,
            checked: false,
            content: 'hi'
        } ])
    });



})
