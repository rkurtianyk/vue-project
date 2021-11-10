export interface TodoItem {
    id: number;
    text: string;
    done: boolean;
}

export interface State {
    todos: Array<TodoItem>;
}
