import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrashAlt, faThumbsUp, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import Header from './components/Header.vue'
import InfoComponent from './components/InfoComponent.vue'

library.add(faEdit);
library.add(faTrashAlt);
library.add(faThumbsUp);
library.add(faCheck);

loadFonts();

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('Header', Header)
  .component('InfoComponent', InfoComponent)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app');
