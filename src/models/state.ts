export interface TodoItem {
    id: string;
    text: string;
    done: boolean;
}

export interface State {
    todos: Array<TodoItem>;
}
