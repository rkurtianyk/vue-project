import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import NotFound from './components/NotFound.vue'
import NestedComponent from './components/NestedComponent.vue'

const NumberPage = () => import('./components/NumberPage.vue')

const history = createWebHistory();

const routes = [
  { path: '/', component: Home },
  { 
    path: '/about',
    name: 'about',
    component: About, 
    children: [
      {
        path: 'nested', 
        components: {
          nestedView: NestedComponent
        }
      },
    ]
  },
  { 
    path: '/random-number/:number',
    component: NumberPage,
    name: 'random-number',
    redirect: '/'
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history,
  routes,
});

export default router;
