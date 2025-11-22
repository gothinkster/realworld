import { createRouter, createWebHistory } from 'vue-router'
import Standby from '../views/Standby.vue'
import Verification from '../views/Verification.vue'
import IdCardVerification from '../views/IdCardVerification.vue'
import FaceRecognition from '../views/FaceRecognition.vue'
import Confirmation from '../views/Confirmation.vue'
import Print from '../views/Print.vue'

const routes = [
  { path: '/', name: 'Standby', component: Standby },
  { path: '/verification', name: 'Verification', component: Verification },
  { path: '/id-card-verification', name: 'IdCardVerification', component: IdCardVerification },
  { path: '/face-recognition', name: 'FaceRecognition', component: FaceRecognition },
  { path: '/confirmation', name: 'Confirmation', component: Confirmation },
  { path: '/print', name: 'Print', component: Print },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router