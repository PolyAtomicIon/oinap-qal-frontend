import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Games/index.vue'),
      },
    ]
  },
  {
    path: '/games/:id',
    component: () => import('pages/Games/_slug.vue'),
  },
  {
    path: '/studio',
    component: () => import('layouts/StudioLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Studio/index.vue'),
      },
    ]
  },
  {
    path: '/ResetPassword',
    component: () => import('../pages/ResetPassword.vue')
  },
  {
    path: '/Admin/Homepage',
    component: () => import('../pages/Homepage.vue')
  },
  {
    path: '/Developer/Homepage',
    component: () => import('../pages/Homepage.vue')
  },
  {
    path: '/Gamer/Homepage',
    component: () => import('../pages/Homepage.vue')
  },
  {
    path: '/Gamer/Homepage',
    component: () => import('../pages/Homepage.vue')
  },
  {
    path: '/Admin/Profile',
    component: () => import('../pages/Profile.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes;
