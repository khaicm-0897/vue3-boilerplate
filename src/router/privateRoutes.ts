import type { RouteRecordRaw } from 'vue-router';

// Routes that require authentication
const privateRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue'),
  },
];

export const privateRoutesWithAuth = privateRoutes.map((route) => ({
  ...route,
  meta: {
    requiresAuth: true,
  },
}));
