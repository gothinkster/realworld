<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const countdown = ref(10)
let timer = null

const startCheckin = () => {
  router.push('/verification')
}

const resetCountdown = () => {
  countdown.value = 10
}

const startCountdown = () => {
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      resetCountdown()
    }
  }, 1000)
}

const stopCountdown = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  stopCountdown()
})
</script>

<template>
  <div class="standby-container">
    <div class="header">
      <h1>访客签到系统</h1>
      <p class="subtitle">请点击下方按钮开始签到</p>
    </div>
    
    <div class="content">
      <div class="countdown">
        <span>{{ countdown }}</span>
      </div>
      
      <button class="start-btn" @click="startCheckin" @mouseenter="resetCountdown" @mouseleave="startCountdown">
        开始签到
      </button>
    </div>
    
    <div class="footer">
      <p>© 2025 访客签到系统</p>
    </div>
  </div>
</template>

<style scoped>
.standby-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.content {
  text-align: center;
}

.countdown {
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.start-btn {
  background: white;
  color: #667eea;
  border: none;
  padding: 20px 60px;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.start-btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.footer {
  position: absolute;
  bottom: 20px;
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>