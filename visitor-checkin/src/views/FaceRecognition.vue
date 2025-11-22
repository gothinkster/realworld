<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isChecking = ref(false)
const checkResult = ref(null)
const visitorInfo = ref(null)

const startFaceRecognition = () => {
  isChecking.value = true
  
  // 模拟人证比对过程
  setTimeout(() => {
    // 模拟比对结果，实际项目中需要调用硬件接口
    const result = Math.random() > 0.1 ? 'success' : 'fail'
    checkResult.value = result
    isChecking.value = false
    
    if (result === 'success') {
      // 比对成功，保存结果到sessionStorage
      sessionStorage.setItem('faceRecognitionResult', 'success')
      
      // 模拟行程校验
      setTimeout(() => {
        router.push('/confirmation')
      }, 1000)
    }
  }, 2000)
}

const retryFaceRecognition = () => {
  checkResult.value = null
  startFaceRecognition()
}

const goBack = () => {
  router.push('/verification')
}

onMounted(() => {
  // 获取访客信息
  const info = sessionStorage.getItem('visitorInfo')
  if (info) {
    visitorInfo.value = JSON.parse(info)
  } else {
    // 如果没有访客信息，返回验证页面
    router.push('/verification')
  }
})
</script>

<template>
  <div class="face-recognition-container">
    <div class="header">
      <h1>人证比对</h1>
      <p class="subtitle">请将面部对准摄像头进行比对</p>
    </div>
    
    <div class="content">
      <div class="camera-container">
        <div class="camera-placeholder" v-if="!isChecking && checkResult === null">
          <div class="camera-icon">📷</div>
          <p>摄像头准备就绪</p>
        </div>
        
        <div class="checking-container" v-if="isChecking">
          <div class="loading-spinner"></div>
          <p>正在进行人证比对...</p>
        </div>
        
        <div class="result-container" v-if="checkResult === 'success'">
          <div class="success-icon">✅</div>
          <p>人证比对成功！</p>
          <p class="subtext">正在进行行程校验...</p>
        </div>
        
        <div class="result-container" v-if="checkResult === 'fail'">
          <div class="fail-icon">❌</div>
          <p>人证比对失败！</p>
          <p class="subtext">请重新尝试</p>
        </div>
      </div>
      
      <div class="visitor-info" v-if="visitorInfo">
        <p><strong>手机号码:</strong> {{ visitorInfo.phoneNumber }}</p>
        <p><strong>身份证号码:</strong> {{ visitorInfo.idNumber }}</p>
      </div>
      
      <div class="button-group">
        <button class="back-btn" @click="goBack" :disabled="isChecking">返回</button>
        
        <button 
          class="check-btn" 
          @click="checkResult === 'fail' ? retryFaceRecognition() : startFaceRecognition()"
          :disabled="isChecking"
        >
          {{ checkResult === 'fail' ? '重新比对' : '开始比对' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.face-recognition-container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 0 20px;
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
  max-width: 600px;
}

.camera-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 60px 40px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.camera-placeholder .camera-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.camera-placeholder p {
  font-size: 1.2rem;
  opacity: 0.8;
}

.checking-container .loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.checking-container p {
  font-size: 1.2rem;
}

.result-container .success-icon, .result-container .fail-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.result-container p {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.result-container .subtext {
  font-size: 1rem;
  opacity: 0.8;
  font-weight: normal;
}

.visitor-info {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.visitor-info p {
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.button-group {
  display: flex;
  gap: 20px;
}

.back-btn, .check-btn {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn {
  background: rgba(255, 255, 255, 0.7);
  color: #667eea;
}

.check-btn {
  background: white;
  color: #667eea;
}

.back-btn:hover:not(:disabled), .check-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.back-btn:disabled, .check-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>