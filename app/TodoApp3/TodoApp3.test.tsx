interface TodoItem {
    checked: boolean
    content: string
}

class TodoApp3 {
    constructor() {
        this.todoList = [];
    }
    private todoList: TodoItem[];

    addTodo(content: string) {
        this.todoList.push({
            checked:false,
            content,
        })
    }

    getTodoList() {
        return this.todoList;
    }
}

describe('Todo App Sample 3', function () {
    it('should add todo', () => {
        let todoApp3 = new TodoApp3();
        todoApp3.addTodo('hi')
        expect(todoApp3.getTodoList()).toEqual([{
            checked:false,
            content: 'hi'
        }])
    });
});
