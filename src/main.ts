import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store';
import getApp from './firebaseDb';

console.log(getApp().name);

loadFonts();

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
