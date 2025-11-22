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
      <!-- 摄像头对比区域 -->
      <div class="camera-grid" v-if="!isChecking && checkResult === null">
        <div class="camera-item">
          <div class="camera-header">
            <div class="camera-label">身份证照片</div>
            <div class="camera-status ready">已就绪</div>
          </div>
          <div class="camera-placeholder">
            <div class="camera-icon">🆔</div>
            <p>身份证信息已读取</p>
          </div>
        </div>
        
        <div class="camera-item">
          <div class="camera-header">
            <div class="camera-label">实时摄像头</div>
            <div class="camera-status active">正在采集</div>
          </div>
          <div class="camera-placeholder">
            <div class="camera-icon">📷</div>
            <p>请将面部对准摄像头</p>
            <p class="tips">保持光线充足，面部无遮挡</p>
          </div>
        </div>
      </div>
      
      <div class="checking-container" v-if="isChecking">
        <div class="loading-spinner"></div>
        <p>正在进行人证比对...</p>
        <p class="subtext">请稍候，系统正在比对中</p>
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
      
      <div class="visitor-info" v-if="visitorInfo">
        <p><strong>来访ID:</strong> {{ visitorInfo.visitId || 'N/A' }}</p>
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

/* 摄像头网格布局 */
.camera-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.camera-item {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.camera-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.camera-label {
  font-size: 1.1rem;
  font-weight: bold;
}

.camera-status {
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
}

.camera-status.ready {
  background: rgba(0, 255, 128, 0.2);
  color: rgb(0, 255, 128);
}

.camera-status.active {
  background: rgba(255, 165, 0, 0.2);
  color: rgb(255, 165, 0);
}

.camera-placeholder {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.camera-placeholder .camera-icon {
  font-size: 3.5rem;
}

.camera-placeholder p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin: 0;
}

.camera-placeholder .tips {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: -5px;
}

.checking-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  min-height: 300px;
}

.checking-container .loading-spinner {
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.checking-container p {
  font-size: 1.2rem;
  margin: 0;
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
  color: rgb(3, 57, 166);
}

.check-btn {
  background: white;
  color: rgb(3, 57, 166);
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