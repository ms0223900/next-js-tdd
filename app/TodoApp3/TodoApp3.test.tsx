import { TodoApp3 } from "app/TodoApp3/TodoApp3";
import { TodoItem } from "app/TodoApp3/types";

describe('Todo App Sample 3', function () {
    let todoApp3 = new TodoApp3();
    beforeEach(() => {
        todoApp3 = new TodoApp3();
    });

    it('should add todo', () => {
        todoApp3.addTodo('hi')
        expect(todoApp3.getTodoList()).toEqual([{
            id: 0,
            checked: false,
            content: 'hi'
        }])
    });

    it('should add two todos', () => {
        todoApp3.addTodo('hi')
        todoApp3.addTodo('hooo')
        expect(todoApp3.getTodoList()).toEqual([
            todo(),
            todo({
                id: 1,
                content: 'hooo'
            }),
        ])
    });


    it('should remove todo', () => {
        todoApp3.addTodo('hi')
        expect(todoApp3.getTodoList()).toEqual([{
            id: 0,
            checked: false,
            content: 'hi'
        }])
        todoApp3.removeTodo(0)
        expect(todoApp3.getTodoList()).toHaveLength(0)
    });


    function todo(params?: Partial<TodoItem>) {
        return new TodoItem( {
            id: 0,
            checked: false,
            content: 'hi',
            ...params
        } );
    }

    it('should remove two todos', () => {
        todoApp3.addTodo('hi')
        todoApp3.addTodo('hooo')
        expect(todoApp3.getTodoList()).toEqual([
            todo(),
            todo({
                id: 1,
                content: 'hooo'
            }),
        ])
        todoApp3.removeTodo(0)
        todoApp3.removeTodo(1)
        expect(todoApp3.getTodoList()).toHaveLength(0)
    });

    it('should remove two todos', () => {
        todoApp3.addTodo('hi')
        todoApp3.addTodo('hooo')
        expect(todoApp3.getTodoList()).toEqual([
            todo(),
            todo({
                id: 1,
                content: 'hooo'
            }),
        ])
        todoApp3.removeTodo(0)
        todoApp3.removeTodo(1)
        expect(todoApp3.getTodoList()).toHaveLength(0)
    });

    it('should add todos and remove two todos', () => {
        todoApp3.addTodo('hi')
        todoApp3.addTodo('hooo')

        todoApp3.removeTodo(0)
        expect(todoApp3.getTodoList()).toEqual([
            todo({
                id: 1,
                content: 'hooo'
            }),
        ])

        todoApp3.addTodo('heyyyy')
        expect(todoApp3.getTodoList()).toEqual([
            todo({
                id: 1,
                content: 'hooo'
            }),
            todo({
                id: 2,
                content: 'heyyyy'
            }),
        ])
        todoApp3.removeTodo(1)
        expect(todoApp3.getTodoList()).toEqual([
            todo({
                id: 2,
                content: 'heyyyy'
            }),
        ])
        todoApp3.addTodo('hoho')
        expect(todoApp3.getTodoList()).toEqual([
            todo({
                id: 2,
                content: 'heyyyy'
            }),
            todo({
                id: 3,
                content: 'hoho'
            }),
        ])
    });

    it('should toggle todo checked', () => {
        todoApp3.addTodo('hi')

        todoApp3.toggleTodo(0)
        const todo = todoApp3.findTodoById(0)
        expect(todo?.checked).toBeTruthy()
    });

    it('should edit todo content', () => {
        todoApp3.addTodo('hi')

        todoApp3.editTodo(0, 'hoooo')
        const todo = todoApp3.findTodoById(0)
        expect(todo?.content).toEqual('hoooo')
    });




});
