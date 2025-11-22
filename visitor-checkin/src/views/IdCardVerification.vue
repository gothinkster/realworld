<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isScanning = ref(false)

const startIdCardScan = () => {
  isScanning.value = true
  
  // 模拟身份证扫描过程
  setTimeout(() => {
    // 模拟扫描成功，实际项目中需要调用硬件接口
    const idCardInfo = {
      name: '张三',
      idNumber: '110101199001011234',
      birthday: '1990-01-01',
      address: '北京市朝阳区XXX街道XXX号'
    }
    
    // 保存身份证信息到sessionStorage
    sessionStorage.setItem('idCardInfo', JSON.stringify(idCardInfo))
    sessionStorage.setItem('visitorInfo', JSON.stringify({
      verificationMethod: 'id-card',
      name: idCardInfo.name
    }))
    
    isScanning.value = false
    
    // 跳转到人脸比对页面
    router.push('/face-recognition')
  }, 2000)
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="id-card-verification-container">
    <div class="header">
      <h1>身份证验证</h1>
      <p class="subtitle">请将身份证放置在扫描区域</p>
    </div>
    
    <div class="content">
      <div class="scan-container" :class="{ scanning: isScanning }">
        <div class="scan-area">
          <div class="scan-line" v-if="isScanning"></div>
          <div class="scan-icon">🪪</div>
          <p>{{ isScanning ? '正在扫描身份证...' : '请将身份证放置在此区域' }}</p>
          <p class="tips" v-if="!isScanning">请确保身份证正面朝上，光线充足</p>
        </div>
      </div>
      
      <div class="button-group">
        <button class="back-btn" @click="goBack" :disabled="isScanning">返回</button>
        <button 
          class="scan-btn" 
          @click="startIdCardScan"
          :disabled="isScanning"
        >
          {{ isScanning ? '扫描中...' : '开始扫描' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.id-card-verification-container {
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
  font-size: 2rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1rem;
  opacity: 0.8;
}

.content {
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.scan-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.scan-container.scanning {
  border-color: rgba(0, 255, 128, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 128, 0.3);
}

.scan-area {
  border: 3px dashed rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 40px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgb(0, 255, 128);
  animation: scan 2s linear infinite;
  box-shadow: 0 0 10px rgba(0, 255, 128, 0.8);
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

.scan-icon {
  font-size: 4rem;
  opacity: 0.8;
}

.scan-area p {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}

.scan-area .tips {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: -10px;
}

.button-group {
  display: flex;
  gap: 20px;
}

.back-btn, .scan-btn {
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

.scan-btn {
  background: white;
  color: rgb(3, 57, 166);
}

.back-btn:hover:not(:disabled), .scan-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.back-btn:disabled, .scan-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>