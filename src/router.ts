import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import InfoComponent from './components/InfoComponent.vue';
import AuthService from './api/auth';

const history = createWebHistory();

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
];

const router = createRouter({
  history,
  routes,
});

// router.beforeEach(loginRequired);

const exludedRoutes = ['login', 'signup', 'forgot-password'];

function loginRequired (to, from, next) {
  if (AuthService.authenticated()) {
    next()
  } else {
    next('/login')
  }
}

export default router;
