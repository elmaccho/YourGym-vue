import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import OffertView from '@/views/OffertView.vue'
import SilowniaView from '@/views/offert/SilowniaView.vue'
import FitnessView from '@/views/offert/FitnessView.vue'
import SquashView from '@/views/offert/SquashView.vue'
import IndoorCyclingView from '@/views/offert/IndoorCyclingView.vue'
import RelaxZoneView from '@/views/offert/RelaxZoneView.vue'
import FiftyPlusView from '@/views/offert/FiftyPlusView.vue'

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
          // component: () => import('../views/offert/OffertView.vue'),
          component: MainView
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
        },
        {
          path: 'squash',
          name: 'squash',
          component: SquashView
        },
        {
          path: 'indoorCycling',
          name: 'indoorCycling',
          component: IndoorCyclingView
        },
        {
          path: 'strefaRelaksu',
          name: 'relaxZone',
          component: RelaxZoneView
        },
        {
          path: '50+',
          name: 'fiftyPlus',
          component: FiftyPlusView
        }
      ]
    }
  ]
})

export default router
