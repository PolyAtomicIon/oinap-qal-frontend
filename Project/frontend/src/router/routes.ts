import { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    props:true,
    children: [
      {
        path: '',
        component: () => import('pages/Games/index.vue'),
        children: [
          {
            path: ':genre',
            component: () => import('components/templates/GameByGenre.vue'),
          },
        ]
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
      {
        path: 'statistics',
        component: () => import('pages/Studio/StatisticsContainer.vue'),
      },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Admin/index.vue'),
      },
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../pages/User/Profile.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../pages/User/Settings.vue')
      },
    ]
  },
  {
    path: '/mobile-modals',
    component: () => import('layouts/MobileViewerLayout.vue'),
    children: [
      {
        path: 'signin',
        name: 'signin',
        component: () => import('../components/molecules/SignInForm.vue')
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../components/molecules/SignUpForm.vue')
      },
      {
        path: 'user-friends',
        name: 'user-friends',
        component: () => import('../components/molecules/UserFriends.vue')
      },
      {
        path: 'user-ratings',
        name: 'user-ratings',
        component: () => import('../components/molecules/UserRatings.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes;
