import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/Admin',
        component: () => import('../pages/Admin/AdminRegistration.vue')
      },
      {
        path: '/Developer',
        component: () => import('../pages/Developer/DeveloperLogin.vue')
      },
      {
        path: '/Developer/Registration',
        component: () => import('../pages/Developer/DeveloperRegistration.vue')
      },
      {
        path: 'Developer/ResetPassword',
        component: () => import('../pages/ResetPassword.vue')
      },
      {
        path: '/Gamer',
        component: () => import('../pages/Gamer/GamerRegistration.vue')
      }

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
