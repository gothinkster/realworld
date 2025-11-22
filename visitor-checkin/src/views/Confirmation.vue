<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const visitorInfo = ref(null)
const checkInTime = ref('')
const checkOutTime = ref('')
const hostName = ref('张三')
const hostPhone = ref('13800138000')
const meetingRoom = ref('会议室A')

const confirmCheckIn = () => {
  // 保存签到信息到sessionStorage
  sessionStorage.setItem('checkInInfo', JSON.stringify({
    checkInTime: checkInTime.value,
    checkOutTime: checkOutTime.value,
    hostName: hostName.value,
    hostPhone: hostPhone.value,
    meetingRoom: meetingRoom.value
  }))
  
  router.push('/print')
}

const goBack = () => {
  router.push('/face-recognition')
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
  
  // 设置当前时间
  const now = new Date()
  checkInTime.value = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  
  // 设置预计离开时间（当前时间+2小时）
  const checkOut = new Date(now.getTime() + 2 * 60 * 60 * 1000)
  checkOutTime.value = checkOut.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
})
</script>

<template>
  <div class="confirmation-container">
    <div class="header">
      <h1>签到确认</h1>
      <p class="subtitle">请确认以下信息是否正确</p>
    </div>
    
    <div class="info-container">
      <div class="info-section">
        <h2>访客信息</h2>
        <div class="info-item">
          <label>手机号码:</label>
          <span>{{ visitorInfo?.phoneNumber }}</span>
        </div>
        <div class="info-item">
          <label>身份证号码:</label>
          <span>{{ visitorInfo?.idNumber }}</span>
        </div>
      </div>
      
      <div class="info-section">
        <h2>签到信息</h2>
        <div class="info-item">
          <label>签到时间:</label>
          <span>{{ checkInTime }}</span>
        </div>
        <div class="info-item">
          <label>预计离开时间:</label>
          <span>{{ checkOutTime }}</span>
        </div>
      </div>
      
      <div class="info-section">
        <h2>拜访信息</h2>
        <div class="info-item">
          <label>拜访对象:</label>
          <span>{{ hostName }}</span>
        </div>
        <div class="info-item">
          <label>拜访对象电话:</label>
          <span>{{ hostPhone }}</span>
        </div>
        <div class="info-item">
          <label>会议室:</label>
          <span>{{ meetingRoom }}</span>
        </div>
      </div>
    </div>
    
    <div class="button-group">
      <button class="back-btn" @click="goBack">返回</button>
      <button class="confirm-btn" @click="confirmCheckIn">确认签到</button>
    </div>
  </div>
</template>

<style scoped>
.confirmation-container {
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

.info-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.info-section {
  margin-bottom: 30px;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section h2 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 10px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-item label {
  font-weight: bold;
  font-size: 1rem;
  opacity: 0.9;
}

.info-item span {
  font-size: 1rem;
  opacity: 0.8;
  text-align: right;
  max-width: 60%;
  word-break: break-all;
}

.button-group {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 600px;
}

.back-btn, .confirm-btn {
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

.confirm-btn {
  background: white;
  color: #667eea;
}

.back-btn:hover, .confirm-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .info-container {
    padding: 30px 20px;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .info-item span {
    margin-top: 5px;
    max-width: 100%;
    text-align: left;
  }
}
</style>