import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import { createStore } from 'vuex'
import InfoComponent from './components/InfoComponent.vue';

loadFonts();

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

createApp(App)
  .component('InfoComponent', InfoComponent)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
