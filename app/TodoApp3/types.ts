export class TodoItem {
    id: number;
    checked: boolean
    content: string

    constructor({id,checked,content}: { id: number, checked: boolean, content: string }) {
        this.id = id;
        this.checked = checked;
        this.content = content;
    }
    toggleTodo() {
        this.checked=!this.checked
    }
}
