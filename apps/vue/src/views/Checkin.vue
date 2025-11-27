<template>
  <div class="checkin-container">
    <h1>访客签到</h1>
    <div class="checkin-methods">
      <div class="method-card" @click="selectMethod('phone')">
        <div class="method-icon">📱</div>
        <h2>手机号签到</h2>
      </div>
      <div class="method-card" @click="selectMethod('idcard')">
        <div class="method-icon">🪪</div>
        <h2>身份证签到</h2>
      </div>
    </div>
    
    <div v-if="selectedMethod" class="input-form">
      <h2>{{ selectedMethod === 'phone' ? '手机号签到' : '身份证签到' }}</h2>
      <input 
        type="text" 
        v-model="inputValue" 
        :placeholder="selectedMethod === 'phone' ? '请输入手机号' : '请输入身份证号'"
        @keyup.enter="submitCheckin"
      >
      <div class="button-group">
        <button @click="submitCheckin">确认</button>
        <button @click="cancelCheckin">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkin',
  data() {
    return {
      selectedMethod: null,
      inputValue: ''
    }
  },
  methods: {
    selectMethod(method) {
      this.selectedMethod = method
      this.inputValue = ''
    },
    async submitCheckin() {
      if (!this.inputValue.trim()) {
        alert('请输入' + (this.selectedMethod === 'phone' ? '手机号' : '身份证号'))
        return
      }
      
      try {
        const response = await fetch('/api/visitors/checkin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            [this.selectedMethod]: this.inputValue.trim()
          })
        })
        
        if (response.ok) {
          const visitor = await response.json()
          this.$router.push({ path: '/verification', query: { visitorId: visitor.id } })
        } else {
          alert('未找到匹配的访客信息，请联系邀约人')
        }
      } catch (error) {
        console.error('Checkin failed:', error)
        alert('签到失败，请重试')
      }
    },
    cancelCheckin() {
      this.selectedMethod = null
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>
.checkin-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.checkin-container h1 {
  font-size: 48px;
  margin-bottom: 50px;
  color: #333;
}

.checkin-methods {
  display: flex;
  gap: 50px;
}

.method-card {
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.method-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.method-card h2 {
  font-size: 24px;
  color: #333;
}

.input-form {
  margin-top: 50px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.input-form h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
}

.input-form input {
  width: 300px;
  height: 50px;
  font-size: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 30px;
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.button-group button {
  padding: 12px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-group button:first-child {
  background-color: #007bff;
  color: white;
}

.button-group button:first-child:hover {
  background-color: #0056b3;
}

.button-group button:last-child {
  background-color: #6c757d;
  color: white;
}

.button-group button:last-child:hover {
  background-color: #545b62;
}
</style>