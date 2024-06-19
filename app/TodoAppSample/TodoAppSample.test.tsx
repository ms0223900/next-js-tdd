import { TodoAppSampleTest } from "app/TodoAppSample/TodoAppSampleTest";
import { TodoItem } from "app/TodoAppSample/TodoItem";

// 先以 TDD 方式做出核心 Todo App 邏輯，不包含前端介面
describe('Todo App Sample', function () {
    let todoAppSample = new TodoAppSampleTest();
    beforeEach(() => {
        todoAppSample = new TodoAppSampleTest();
    });

    function todo(id: number, content: string) {
        return new TodoItem(id, content, false);
    }

    it('Should add one todo, and get one todo.', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([todo(0,'hi')])
    });

    it('Should add two todos, and get two todos.', () => {
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('hooo')
        expect(todoAppSample.getTodos()).toEqual([
            todo(0,'hi'),
            todo(1,'hooo'),
        ])
    });

    it('Should remove one todo.', () => {
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([
            todo(0,'hi'),
        ])
        todoAppSample.removeTodo(0) // id
        expect(todoAppSample.getTodos()).toHaveLength(0)
    });

    it('Should remove two todos.', () => {
        todoAppSample.addTodo('hi')
        todoAppSample.addTodo('heyyy')
        expect(todoAppSample.getTodos()).toEqual([
            todo(0,'hi'),
            todo(1,'heyyy'),
        ])
        todoAppSample.removeTodo(0) // id
        todoAppSample.removeTodo(1) // id
        expect(todoAppSample.getTodos()).toHaveLength(0)
    });


});
