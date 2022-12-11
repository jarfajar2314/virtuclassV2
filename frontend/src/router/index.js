import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/user/profile',
      name: 'profile',
      component: () => import('../views/User/UserProfile.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/User/CourseView.vue')
    },
    {
      path: '/course/:id',
      name: 'modul',
      component: () => import('../views/User/ModulView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/User/FaqView.vue')
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router