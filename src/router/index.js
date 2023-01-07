import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Destination from '@/views/Destination.vue';
import Crew from '@/views/Crew.vue';
import Technology from '@/views/Technology.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'Home',
    path: '/home',
    component: Home,
  },
  {
    name: 'Destination',
    path: '/destination',
    component: Destination,
  },
  {
    name: 'Crew',
    path: '/crew',
    component: Crew,
  },
  {
    name: 'Technology',
    path: '/technology',
    component: Technology,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;