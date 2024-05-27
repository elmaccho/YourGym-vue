import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import SilowniaView from '@/views/offert/SilowniaView.vue'
import FitnessView from '@/views/offert/FitnessView.vue'
import SquashView from '@/views/offert/SquashView.vue'
import IndoorCyclingView from '@/views/offert/IndoorCyclingView.vue'
import RelaxZoneView from '@/views/offert/RelaxZoneView.vue'
import FiftyPlusView from '@/views/offert/FiftyPlusView.vue'
import TicketMorning from '@/views/tickets/Morning.vue'
import TicketOpen from '@/views/tickets/Open.vue'
import TicketFree from '@/views/tickets/Free.vue'
import Purchase from '@/views/purchase/Purchase.vue'

import ClubsList from '@/views/ClubsList.vue'
import Warszawa from '@/views/clubs/Warszawa.vue'
import Gdansk from '@/views/clubs/Gdansk.vue'
import Olsztyn from '@/views/clubs/Olsztyn.vue'
import Szczecin from '@/views/clubs/Szczecin.vue'
import Bydgoszcz from '@/views/clubs/Bydgoszcz.vue'
import Torun from '@/views/clubs/Torun.vue'
import Bialystok from '@/views/clubs/Bialystok.vue'
import Poznan from '@/views/clubs/Poznan.vue'
import Lodz from '@/views/clubs/Lodz.vue'
import Lublin from '@/views/clubs/Lublin.vue'
import Wroclaw from '@/views/clubs/Wroclaw.vue'
import Kielce from '@/views/clubs/Kielce.vue'
import Katowice from '@/views/clubs/Katowice.vue'
import Rzeszow from '@/views/clubs/Rzeszow.vue'
import Krakow from '@/views/clubs/Krakow.vue'

import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  scrollBehavior(){
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
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
    },
    {
      path: '/karnety',
      children: [
        {
          path: '',
          // component: () => import('../views/offert/OffertView.vue'),
          component: MainView
        },
        {
          path: 'karnetRano',
          name: 'morning',
          component: TicketMorning
        },
        {
          path: 'karnetOpen',
          name: 'open',
          component: TicketOpen
        },
        {
          path: 'karnetFree',
          name: 'free',
          component: TicketFree
        }
      ]
    },
    {
      path: '/zakup',
      name: 'purchase',
      component: Purchase
    },
    {
      path: '/kluby',
      children: [
        {
          path: '',
          name: 'clubslist',
          component: ClubsList
        },
        {
          path: 'warszawa',
          name: 'warsaw',
          component: Warszawa
        },
        {
          path: 'gdansk',
          name: 'gdansk',
          component: Gdansk
        },
        {
          path: 'olsztyn',
          name: 'olsztyn',
          component: Olsztyn
        },
        {
          path: 'szczecin',
          name: 'szczecin',
          component: Szczecin
        },
        {
          path: 'bydgoszcz',
          name: 'bydgoszcz',
          component: Bydgoszcz
        },
        {
          path: 'torun',
          name: 'torun',
          component: Torun
        },
        {
          path: 'bialystok',
          name: 'bialystok',
          component: Bialystok
        },
        {
          path: 'poznan',
          name: 'poznan',
          component: Poznan
        },
        {
          path: 'lodz',
          name: 'lodz',
          component: Lodz
        },
        {
          path: 'lublin',
          name: 'lublin',
          component: Lublin
        },
        {
          path: 'wroclaw',
          name: 'wroclaw',
          component: Wroclaw
        },
        {
          path: 'kielce',
          name: 'kielce',
          component: Kielce
        },
        {
          path: 'katowice',
          name: 'katowice',
          component: Katowice
        },
        {
          path: 'rzeszow',
          name: 'rzeszow',
          component: Rzeszow
        },
        {
          path: 'krakow',
          name: 'krakow',
          component: Krakow
        }
      ]
    },
    {
      path: '/logowanie',
      name: 'login',
      component: LoginView
    },
    {
      path: '/rejestracja',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
