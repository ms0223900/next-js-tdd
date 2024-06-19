export class TodoItem {
    id: number;

    constructor(id: number, content: string, checked: boolean) {
        this.id = id;
        this.content = content;
        this.checked = checked;
    }

    content: string
    checked: boolean
    toggle() {
        this.checked=!this.checked
    }
}
