import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEdit);
library.add(faTrashAlt);
library.add(faThumbsUp);
library.add(faCheck);

loadFonts();

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
