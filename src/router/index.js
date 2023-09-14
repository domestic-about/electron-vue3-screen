import { createRouter, createWebHashHistory } from 'vue-router';
// import disclaimers from "@/pages/home/disclaimers.vue";
const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/intro',
    name: 'intro',
    component: () => import('@/pages/intro/index.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/contact/index.vue'),
  },
  {
    path: '/party',
    name: 'party',
    component: () => import('@/pages/party/index.vue'),
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('@/pages/research/index.vue'),
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/pages/service/index.vue'),
  },
  {
    path: '/subject',
    name: 'subject',
    component: () => import('@/pages/subject/index.vue'),
  },
  {
    path: '/talent',
    name: 'talent',
    component: () => import('@/pages/talent/index.vue'),
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('@/pages/teacher/index.vue'),
  },



];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
