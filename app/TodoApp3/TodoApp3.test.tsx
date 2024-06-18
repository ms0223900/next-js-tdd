interface TodoItem {
    id: number;
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
            id: this.todoList.length,
            checked: false,
            content,
        })
    }

    getTodoList() {
        return this.todoList;
    }

    removeTodo(todoId: number) {
        const newTodoList = this.todoList.filter(todo => todo.id !== todoId);
        this.todoList = newTodoList
    }
}

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
                id:1,
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
        return {
            id: 0,
            checked: false,
            content: 'hi',
            ...params
        };
    }

    it('should remove two todos', () => {
        todoApp3.addTodo('hi')
        todoApp3.addTodo('hooo')
        expect(todoApp3.getTodoList()).toEqual([
            todo(),
            todo({
                id:1,
                content: 'hooo'
            }),
        ])
        todoApp3.removeTodo(0)
        todoApp3.removeTodo(1)
        expect(todoApp3.getTodoList()).toHaveLength(0)
    });


});
