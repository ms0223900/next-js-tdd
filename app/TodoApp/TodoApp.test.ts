class TodoApp {
    addTodo(content: string) {

    }

    getTodos() {
        return [
            {
                checked: false,
                content: '- [ ] Add todo, and get todo'
            }
        ];

    }
}

describe('Todo App', function () {
    it('Should add todo, and get one todo.', () => {
        let todoApp = new TodoApp();
        todoApp.addTodo('- [ ] Add todo, and get todo')
        expect(todoApp.getTodos()).toEqual([
            {
                checked: false,
                content: '- [ ] Add todo, and get todo'
            }
        ])
    });
});
