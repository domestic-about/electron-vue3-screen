import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
// import disclaimers from "@/pages/home/disclaimers.vue";
const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('@/pages/intro.vue'),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
