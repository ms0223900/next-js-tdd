interface Todo {
    checked: boolean
    content: string
}

class TodoApp {
    todoList: Todo[]

    constructor(todoList: Todo[]) {
        this.todoList = todoList;
    }

    getTodos() {
        return this.todoList;
    }

    addTodo(input: string) {
        this.todoList.push({
            checked: false,
            content: input
        })
    }
}

describe('Todo List test', () => {
    let todoApp: TodoApp;
    it('should render list', () => {
        todoApp = new TodoApp([
            {
                checked: false,
                content: ""
            }
        ]);

        expect(todoApp.getTodos()).toHaveLength(1)
    })

    it('should add todo', () => {
        todoApp = new TodoApp([]);
        todoApp.addTodo('hi')
        expect(todoApp.getTodos()).toHaveLength(1)

    });
})
