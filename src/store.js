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
      doneTodos: (state) => {
        return state.todos.filter(f => f.done)
      }
    },
    mutations: {
      changeDone(state, id) {
        state.todos = state.todos.map(todoItem => {
          if (todoItem.id === id) {
            todoItem.done = !todoItem.done;
          }
          return todoItem;
        })
      }
    }
  })
  
  export default store;