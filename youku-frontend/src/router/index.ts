import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: "Index", component:()=>import('@/views/Index.vue')},
  { path: '/user', name: "User", component:()=>import('@/views/User.vue'),
    children: [
      {path: '/login', name: "Login", component:()=>import('@/views/Login.vue')},
      {path: '/register', name: "Register", component:()=>import('@/views/Register.vue')}
    ]}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
