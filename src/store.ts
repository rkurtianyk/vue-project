import { createStore } from 'vuex';
import { State, TodoItem } from './models/state';


const store = createStore<State>({
    state: {
        todos: [
          { id: 0, text: 'buy some groceries', done: false },
          { id: 1, text: 'change wheels', done: false },
          { id: 2, text: 'finish homework', done: false }
        ],
    },
    getters: {
      doneTodos: (s: State): TodoItem[] => s.todos.filter(f => f.done)
    },
    mutations: {
      makeTodoDone(state: State, id: number): void {
        state.todos = state.todos.map((todoItem: TodoItem): TodoItem => {
            if (todoItem.id === id) {
              todoItem.done = true;
            }
            return todoItem;
          })
      },
      markTodoUndone(state: State, id: number): void {
        state.todos = state.todos.map((todoItem: TodoItem): TodoItem => {
            if (todoItem.id === id) {
              todoItem.done = false;
            }
            return todoItem;
          })
      }
    },
    actions: {
        markAsDone(context, id) {
            context.commit('makeTodoDone', id)
        },
        markAsUndone(context, id) {
            context.commit('markTodoUndone', id)
        }
    }
  })
  
  export default store;