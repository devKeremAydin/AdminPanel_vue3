import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashBoard.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/profile.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../pages/products.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
