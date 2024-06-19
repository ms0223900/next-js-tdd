class TodoAppSampleTest {
    addTodo(todoContent: string) {

    }

    getTodos() {
        return [{
            content: 'hi',
            checked: false
        }];
    }
}

// 先以 TDD 方式做出核心 Todo App 邏輯，不包含前端介面
describe('Todo App Sample', function () {
    it('Should add one todo, and get one todo.', () => {
        const todoAppSample = new TodoAppSampleTest();
        todoAppSample.addTodo('hi')
        expect(todoAppSample.getTodos()).toEqual([{
            content: 'hi',
            checked: false,
        }])
    });
});
