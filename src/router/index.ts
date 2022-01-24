import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/test',
    component: layout,
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test/index.vue')
      },
      {
        path: '/app',
        name: 'app',
        component: () => import("@/views/app/index.vue")
      },
      {
        path: '/litterComponents',
        name: 'litterComponents',
        component: () => import("@/views/littleCompoents/index.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
  routes,
})

export default router;