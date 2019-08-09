import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: () => import('./views/Recommendations.vue'),
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('./views/Customers.vue'),
    },
    {
      path: '/my',
      name: 'my-recommendations',
      component: () => import('./views/MyRecommendations.vue'),
    },
    {
      path: '/new',
      name: 'new-recommendation',
      component: () => import('./views/NewRecommendation.vue'),
    },
  ],
});
