import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        todos: [
          { id: 0, text: 'buy some groceries', done: false },
          { id: 1, text: 'change wheels', done: false },
          { id: 2, text: 'finish homework', done: false }
        ],
        count: 0,
        version: '0.0.1'
      }
    },
    getters: {
      doneTodos: s => s.todos.filter(f => f.done)
    },
    mutations: {
      makeTodoDone(state, id) {
        state.todos = state.todos.map(todoItem => {
            if (todoItem.id === id) {
              todoItem.done = true;
            }
            return todoItem;
          })
      },
      markTodoUndone(state, id) {
        state.todos = state.todos.map(todoItem => {
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