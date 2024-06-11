import { createRouter, createWebHistory } from 'vue-router';
import { publicRoutes } from './publicRoutes';
import { privateRoutesWithAuth } from './privateRoutes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...publicRoutes,
    ...privateRoutesWithAuth,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('access-token');

  if (requiresAuth && !isAuthenticated) {
    next({ path: '/login', replace: true });
  } else {
    next();
  }
});

export default router;
