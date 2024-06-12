import { TodoAppSample } from "app/todoApp2/TodoAppSample";
import { Todo } from "app/todoApp2/TodoList";

describe('Todo App TDD Sample', function () {
    let todoAppSample = new TodoAppSample();
    beforeEach(() => {
        todoAppSample = new TodoAppSample()
    });

    it('Should add todo', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodoList()).toEqual([
            new Todo(0,'hi')
        ])
    });

    it('Should add two todos', () => {
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('hoooo')
        expect(todoAppSample.getTodoList()).toEqual([
            new Todo(0,'hi'),
            new Todo(1,'hoooo'),
        ])
    });

    it('Should delete todo', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodoList()).toEqual([
            new Todo(0,'hi'),
        ])
        todoAppSample.removeTodo(1)
    });



});
