import { createRouter, createWebHistory } from 'vue-router'
import Standby from '../views/Standby.vue'
import Checkin from '../views/Checkin.vue'
import Verification from '../views/Verification.vue'
import Confirmation from '../views/Confirmation.vue'

const routes = [
  {
    path: '/',
    name: 'standby',
    component: Standby
  },
  {
    path: '/checkin',
    name: 'checkin',
    component: Checkin
  },
  {
    path: '/verification',
    name: 'verification',
    component: Verification
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router