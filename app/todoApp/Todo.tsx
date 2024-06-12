export class Todo {
    private _checked: boolean;
    private _id: number;
    private _content: string;

    constructor({ checked, id, content }: { checked: boolean; id: number; content: string }) {
        this._checked = checked
        this._id = id
        this._content = content
    }

    get checked(): boolean {
        return this._checked;
    }

    get id(): number {
        return this._id;
    }

    get content(): string {
        return this._content;
    }

    set id(value: number) {
        this._id = value;
    }

    set content(value: string) {
        this._content = value;
    }

    toggleChecked() {
        this._checked = !this._checked
    }

    updateContent(content: string) {
        this._content = content
    }
}
