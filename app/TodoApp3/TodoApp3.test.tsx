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
            id:0,
            checked: false,
            content,
        })
    }

    getTodoList() {
        return this.todoList;
    }

    removeTodo(todoId: number) {
        const newTodoList = this.todoList.filter(todo => todo.id!==todoId);
        this.todoList=newTodoList
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


});
