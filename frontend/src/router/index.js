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
      path: '/course',
      name: 'course',
      // route level code-splitting
      component: () => import('../views/User/CourseView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      component: () => import('../views/User/FaqView.vue')
    }
  ]
})

export default router