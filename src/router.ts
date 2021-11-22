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
    component: Main,
    children: [ 
      {
        path: '/', 
        component: Home,
      },
      {
        path: '/info',
        component: InfoComponent,
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
<<<<<<< HEAD
  },
=======
},
>>>>>>> a112bd051efe871dcbee340b59eb790cdb71ebdf
];

const router = createRouter({
  history,
  routes,
});

router.beforeEach(loginRequired);

const exludedRoutes = ['login', 'signup', 'forgot-password'];

function loginRequired (to, from, next) {
  if (AuthService.authenticated() || exludedRoutes.includes(to.name)) {
    next()
  } else {
    next('/login')
  }
}

export default router;
