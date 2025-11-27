<template>
  <div class="confirmation-container">
    <h1>确认行程</h1>
    <div v-if="visitor" class="visitor-info">
      <div class="info-card">
        <h2>访客信息</h2>
        <div class="info-item">
          <label>姓名：</label>
          <span>{{ visitor.name }}</span>
        </div>
        <div class="info-item">
          <label>电话：</label>
          <span>{{ visitor.phone }}</span>
        </div>
        <div class="info-item">
          <label>身份证号：</label>
          <span>{{ visitor.idCard }}</span>
        </div>
        <div class="info-item">
          <label>预约时间：</label>
          <span>{{ formatDate(visitor.visitTime) }}</span>
        </div>
        <div class="info-item">
          <label>预约楼层：</label>
          <span>{{ visitor.visitFloor }}</span>
        </div>
        <div class="info-item">
          <label>接待员：</label>
          <span>{{ visitor.receptionistName || '未指定' }}</span>
        </div>
      </div>
      
      <div class="status-section">
        <div v-if="isTodayVisit" class="status-success">
          <div class="status-icon">✓</div>
          <h3>今日行程已确认</h3>
          <p>您可以打印访客证进入大楼</p>
          <button class="print-button" @click="printVisitorPass">打印访客证</button>
        </div>
        <div v-else-if="isFutureVisit" class="status-warning">
          <div class="status-icon">⚠</div>
          <h3>行程为未来日期</h3>
          <p>您的预约时间是 {{ formatDate(visitor.visitTime) }}</p>
          <p>请在预约当天前来签到</p>
        </div>
        <div v-else class="status-error">
          <div class="status-icon">✗</div>
          <h3>无有效行程</h3>
          <p>未找到您的有效预约信息</p>
          <p>请联系您的邀约人</p>
        </div>
      </div>
    </div>
    
    <div v-else class="loading">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>
    
    <div class="button-group">
      <button @click="goToStandby">返回待机页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirmation',
  data() {
    return {
      visitor: null,
      isTodayVisit: false,
      isFutureVisit: false
    }
  },
  mounted() {
    const visitorId = this.$route.query.visitorId
    if (visitorId) {
      this.loadVisitorInfo(visitorId)
    }
  },
  methods: {
    async loadVisitorInfo(visitorId) {
      try {
        const response = await fetch(`/api/visitors/${visitorId}`)
        if (response.ok) {
          this.visitor = await response.json()
          this.checkVisitStatus()
        } else {
          alert('未找到访客信息')
        }
      } catch (error) {
        console.error('Failed to load visitor info:', error)
        alert('加载访客信息失败')
      }
    },
    checkVisitStatus() {
      if (!this.visitor.visitTime) {
        return
      }
      
      const visitDate = new Date(this.visitor.visitTime)
      const today = new Date()
      
      // 忽略时间部分，只比较日期
      const visitDateOnly = new Date(visitDate.getFullYear(), visitDate.getMonth(), visitDate.getDate())
      const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      
      this.isTodayVisit = visitDateOnly.getTime() === todayOnly.getTime()
      this.isFutureVisit = visitDateOnly.getTime() > todayOnly.getTime()
    },
    formatDate(dateString) {
      if (!dateString) return ''
      
      const date = new Date(dateString)
      return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    async printVisitorPass() {
      if (!this.isTodayVisit) {
        alert('只有当天行程才能打印访客证')
        return
      }
      
      try {
        // 调用打印API
        const response = await fetch(`/api/visitors/${this.visitor.id}/print`, {
          method: 'POST'
        })
        
        if (response.ok) {
          alert('访客证打印成功')
          // 这里可以添加打印完成后的逻辑，例如跳转到待机页
          setTimeout(() => {
            this.goToStandby()
          }, 2000)
        } else {
          alert('打印失败，请重试')
        }
      } catch (error) {
        console.error('Print failed:', error)
        alert('打印失败，请重试')
      }
    },
    goToStandby() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.confirmation-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.confirmation-container h1 {
  font-size: 48px;
  margin-bottom: 30px;
  color: #333;
}

.visitor-info {
  width: 100%;
  max-width: 800px;
}

.info-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.info-card h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
  font-size: 18px;
}

.info-item label {
  font-weight: bold;
  width: 150px;
  color: #333;
}

.info-item span {
  color: #666;
}

.status-section {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 30px;
}

.status-success,
.status-warning,
.status-error {
  padding: 20px;
  border-radius: 5px;
}

.status-success {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.status-warning {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.status-error {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.status-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.status-section h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.status-section p {
  font-size: 16px;
  margin-bottom: 5px;
}

.print-button {
  margin-top: 20px;
  padding: 12px 30px;
  font-size: 18px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.print-button:hover {
  background-color: #218838;
}

.loading {
  text-align: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.button-group {
  display: flex;
  justify-content: center;
}

.button-group button {
  padding: 12px 30px;
  font-size: 18px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-group button:hover {
  background-color: #545b62;
}
</style>