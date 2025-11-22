<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const visitorInfo = ref(null)
const checkInInfo = ref(null)


const printBadge = () => {
  // 模拟打印功能
  console.log('打印访客证')
  alert('打印功能已触发，请检查打印机')
}

const completeCheckIn = () => {
  // 清空sessionStorage
  sessionStorage.clear()
  
  // 返回待机页面
  router.push('/')
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
  
  // 获取签到信息
  const checkIn = sessionStorage.getItem('checkInInfo')
  if (checkIn) {
    checkInInfo.value = JSON.parse(checkIn)
  }
  

  
  // 自动触发打印
  setTimeout(() => {
    printBadge()
  }, 1000)
})
</script>

<template>
  <div class="print-container">
    <div class="header">
      <h1>签到完成</h1>
      <p class="subtitle">请领取您的访客证</p>
    </div>
    
    <div class="content">
      <div class="badge-container">
        <div class="badge-header">
          <h2>访客证</h2>
          <p class="company-name">XX公司</p>
        </div>
        
        <div class="badge-info">

          
          <div class="visitor-details">
            <div class="detail-item">
              <label>来访ID:</label>
              <span>{{ visitorInfo?.visitId || 'N/A' }}</span>
            </div>

            <div class="detail-item">
              <label>签到时间:</label>
              <span>{{ checkInInfo?.checkInTime }}</span>
            </div>
            
            <div class="detail-item">
              <label>拜访对象:</label>
              <span>{{ checkInInfo?.hostName }}</span>
            </div>
          </div>
        </div>
        
        <div class="badge-footer">
          <p>请妥善保管此访客证</p>
          <p>离开时请归还</p>
        </div>
      </div>
      
      <div class="button-group">
        <button class="print-btn" @click="printBadge">重新打印</button>
        <button class="complete-btn" @click="completeCheckIn">完成</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.print-container {
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
  max-width: 600px;
}

.badge-container {
  background: white;
  color: #333;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.badge-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(163, 8, 160);
}

.badge-header h2 {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: rgb(3, 57, 166);
}

.company-name {
  font-size: 1rem;
  color: #666;
}

.badge-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}



.visitor-details {
  flex: 1;
  text-align: left;
}

.detail-item {
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.detail-item label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 3px;
}

.detail-item span {
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
}

.badge-footer {
  text-align: center;
  padding-top: 15px;
  border-top: 2px solid rgb(3, 57, 166);
  font-size: 0.8rem;
  color: #666;
}

.badge-footer p {
  margin-bottom: 5px;
}

.button-group {
  display: flex;
  gap: 20px;
}

.print-btn, .complete-btn {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.print-btn {
  background: rgba(255, 255, 255, 0.7);
  color: rgb(3, 57, 166);
}

.complete-btn {
  background: white;
  color: rgb(3, 57, 166);
}

.print-btn:hover, .complete-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* 打印样式 */
@media print {
  body {
    background: white;
    margin: 0;
    padding: 0;
  }
  
  .print-container {
    background: white;
    color: #333;
    padding: 20px;
  }
  
  .header, .button-group {
    display: none;
  }
  
  .badge-container {
    box-shadow: none;
    border: 1px solid #ddd;
    page-break-inside: avoid;
  }
}
</style>