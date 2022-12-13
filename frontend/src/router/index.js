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
      component: () => import('../views/User/ModulView.vue'),
      props: true
    },
    {
      path: '/course/:id/soal/:idsoal',
      name: 'soal',
      component: () => import('../views/User/ModulView.vue'),
      props: true
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/User/FaqView.vue')
    },
    {
      path: '/guru/profile-guru',
      name: 'profil-guru',
      component: () => import('../views/Guru/profileGuru.vue')
    },
    {
      path: '/guru/dashboard-nilai',
      name: 'dashboard-nilai',
      component: () => import('../views/Guru/dashboardNilai.vue')
    },
    {
      path: '/guru/detail-nilai',
      name: 'detail-nilai',
      component: () => import('../views/Guru/detailNilai.vue')
    },
    {
      path: '/guru/dashboard-kelas',
      name: 'dashboard-kelas',
      component: () => import('../views/Guru/dashboardKelas.vue')
    },
    {
      path: '/guru/edit-kelas',
      name: 'edit-kelas',
      component: () => import('../views/Guru/editKelas.vue')
    }
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})

export default router