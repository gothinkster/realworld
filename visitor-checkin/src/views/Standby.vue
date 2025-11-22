<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToIdVerification = () => {
  router.push('/verification')
}

const goToIdCardVerification = () => {
  router.push('/id-card-verification')
}
</script>

<template>
  <div class="standby-container">
    <div class="header">
      <h1>访客签到系统</h1>
      <p class="subtitle">欢迎您的来访</p>
    </div>
    
    <div class="content">
      <div class="image-grid">
        <div class="image-item" @click="goToIdVerification" style="cursor: pointer;">
          <div class="image-placeholder">
            <div class="image-icon">🔢</div>
            <div class="image-text">来访ID验证</div>
          </div>
        </div>
        <div class="image-item" @click="goToIdCardVerification" style="cursor: pointer;">
          <div class="image-placeholder">
            <div class="image-icon">🪪</div>
            <div class="image-text">身份证验证</div>
          </div>
        </div>
      </div>
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
  background: linear-gradient(135deg, rgb(3, 57, 166) 0%, rgb(2, 40, 114) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Microsoft Yahei', sans-serif;
  padding: 0 20px;
  overflow-y: auto;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
}

.content {
  text-align: center;
  width: 100%;
  max-width: 800px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.image-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.image-icon {
  font-size: 3rem;
}

.image-text {
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 0.9;
}

.feature-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
}

.feature-icon {
  font-size: 1.2rem;
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
  color: rgb(3, 57, 166);
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