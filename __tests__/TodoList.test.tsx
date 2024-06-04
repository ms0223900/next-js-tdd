import { Todo, TodoApp } from "../app/TodoApp";

describe('Todo List test', () => {
    let todoApp: TodoApp;

    it('should add todo', () => {
        todoApp = new TodoApp([]);
        todoApp.addTodo('hi')
        expect(todoApp.getTodos()).toHaveLength(1)
        const todo = new Todo({
            id: 0,
            checked: false,
            content: 'hi'
        });
        expect(todoApp.getTodos()[0]).toEqual(todo)
    });

    it('should check todo', () => {
        given_todo_list(['hi'])

        expect(todoApp.getTodoById(0)?.checked).toBeFalsy()

        todoApp.checkTodo(0)
        expect(todoApp.getTodoById(0)?.checked).toBeTruthy()

        todoApp.checkTodo(0)
        expect(todoApp.getTodoById(0)?.checked).toBeFalsy()
    });

    it('should edit todo', () => {
        let NEW_TODO_CONTENT = 'hiiii';
        given_todo_list(['hi'])

        todoApp.editTodo(0, NEW_TODO_CONTENT)
        expect(todoApp.getTodoById(0)?.content).toEqual(NEW_TODO_CONTENT)
    });

    function given_todo_list(todoInputs: string[]) {
        todoApp = new TodoApp([]);
        for (let i = 0; i < todoInputs.length; i++) {
            todoApp.addTodo(todoInputs[i])
        }
    }

    it('should remove todo', () => {
        given_todo_list(['hi', 'ho']);

        todoApp.removeTodo(1)
        expect(todoApp.getTodos()).toEqual([new Todo( {
            id: 0,
            checked: false,
            content: 'hi'
        } )])
    });


})
