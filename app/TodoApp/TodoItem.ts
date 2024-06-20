export interface TodoItem {
    id: number;
    checked: boolean
    content: string

    toggle(): void;
}

export class TodoItemImpl implements TodoItem {
    constructor({ id, checked, content }: Pick<TodoItem, 'id' | 'checked' | 'content'>) {
        this.checked = checked;
        this.content = content;
        this.id = id;
    }

    checked: boolean;
    content: string;
    id: number;

    toggle(): void {
        this.checked = !this.checked
    }

    editContent(content: string) {
        this.content = content
    }
}
