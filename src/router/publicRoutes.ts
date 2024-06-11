import type { RouteRecordRaw } from 'vue-router';

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access-token')) {
        next();
      } else {
        next({ path: from.fullPath, replace: true });
      }
    },
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/layout',
    name: '布局',
    component: () => import('@/views/LayOut.vue'),
  },
];
