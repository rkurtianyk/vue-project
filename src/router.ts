import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import NotFound from './components/NotFound.vue';
import AuthService from './api/auth';

const history = createWebHistory();

const routes = [
  { path: '/', component: Home, beforeEnter: loginRequired },
  {
    path: '/login',
    name: 'login',
    component: Login
},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history,
  routes,
});

function loginRequired (to, from, next) {
  if (AuthService.authenticated()) {
    next()
  } else {
    next('/login')
  }
}

export default router;
