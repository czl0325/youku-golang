import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: "Index", component:()=>import('@/views/Index.vue')},
  { path: '/login', name: "Login", component:()=>import('@/views/Login.vue')}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
