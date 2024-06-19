import { TodoAppSampleTest } from "app/TodoAppSample/TodoAppSampleTest";

// 先以 TDD 方式做出核心 Todo App 邏輯，不包含前端介面
describe('Todo App Sample', function () {
    let todoAppSample = new TodoAppSampleTest();
    beforeEach(() => {
        todoAppSample = new TodoAppSampleTest();
    });
    it('Should add one todo, and get one todo.', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([{
            id: 0,
            content: 'hi',
            checked: false,
        }])
    });

    it('Should add two todos, and get two todos.', () => {
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('hooo')
        expect(todoAppSample.getTodos()).toEqual([
            {
                id: 0,
                content: 'hi',
                checked: false,
            },
            {
                id: 1,
                content: 'hooo',
                checked: false,
            },
        ])
    });

    it('Should remove one todo.', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([
            {
                id: 0,
                content: 'hi',
                checked: false,
            },
        ])
        todoAppSample.removeTodo(0) // id
        expect(todoAppSample.getTodos()).toHaveLength(0)
    });


});
