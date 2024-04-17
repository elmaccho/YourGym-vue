import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import OffertView from '@/views/OffertView.vue'
import SilowniaView from '@/views/SilowniaView.vue'
import FitnessView from '@/views/FitnessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/oferta',
      children: [
        {
          path: '',
          component: () => import('../views/OffertView.vue'),
        },
        {
          path: 'silownia',
          name: 'silownia',
          component: SilowniaView
        },
        {
          path: 'fitness',
          name: 'fitness',
          component: FitnessView
        }
      ]
    }
  ]
})

export default router
