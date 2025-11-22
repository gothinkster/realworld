<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const visitId = ref('')
const verificationMethod = ref('id') // 'id'

const validateVisitId = (id) => {
  const idRegex = /^\d{6}$/
  return idRegex.test(id)
}

const nextStep = () => {
  if (!validateVisitId(visitId.value)) {
    alert('请输入6位来访ID')
    return
  }
  
  // 保存访客信息到sessionStorage
  sessionStorage.setItem('visitorInfo', JSON.stringify({
    visitId: visitId.value,
    verificationMethod: 'id'
  }))
  
  // 自动跳转
  router.push('/face-recognition')
}

const addToVisitId = (char) => {
  if (visitId.value.length < 6) {
    visitId.value += char
  }
}

const clearVisitId = () => {
  visitId.value = ''
}

const deleteLastChar = () => {
  visitId.value = visitId.value.slice(0, -1)
}

const goBack = () => {
  router.push('/')
}

// 监听visitId变化，当长度为6时自动验证
watch(visitId, (newValue) => {
  if (newValue.length === 6) {
    // 延迟100ms自动验证，让用户有时间确认输入
    setTimeout(() => {
      nextStep()
    }, 100)
  }
})
</script>

<template>
  <div class="verification-container">
    <div class="header">
      <h1>访客验证</h1>
      <p class="subtitle">请选择验证方式</p>
    </div>
    
    <div class="form-container">
      <!-- 来访ID验证 -->
      <div class="verification-method" :class="{ active: verificationMethod === 'id' }">
        <div class="method-header">
          <div class="method-icon">🔢</div>
          <div class="method-info">
            <h3>来访ID验证</h3>
            <p>请输入6位来访ID</p>
          </div>
          <div class="radio-btn" @click="verificationMethod = 'id'">
            <div class="radio-inner" :class="{ checked: verificationMethod === 'id' }"></div>
          </div>
        </div>
        
        <div class="method-content" v-if="verificationMethod === 'id'">
          <div class="form-group">
            <label for="visitId">请输入6位来访ID</label>
            <div class="input-group">
              <input
                id="visitId"
                type="text"
                v-model="visitId"
                placeholder="请输入来访ID"
                maxlength="6"
                @input="visitId = visitId.replace(/[^\d]/g, '')"
              />
            </div>
          </div>
          
          <div class="keypad">
            <div class="keypad-row">
              <button class="keypad-btn" @click="addToVisitId('1')">1</button>
              <button class="keypad-btn" @click="addToVisitId('2')">2</button>
              <button class="keypad-btn" @click="addToVisitId('3')">3</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn" @click="addToVisitId('4')">4</button>
              <button class="keypad-btn" @click="addToVisitId('5')">5</button>
              <button class="keypad-btn" @click="addToVisitId('6')">6</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn" @click="addToVisitId('7')">7</button>
              <button class="keypad-btn" @click="addToVisitId('8')">8</button>
              <button class="keypad-btn" @click="addToVisitId('9')">9</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn" @click="clearVisitId">清除</button>
              <button class="keypad-btn" @click="addToVisitId('0')">0</button>
              <button class="keypad-btn" @click="deleteLastChar">删除</button>
            </div>
          </div>
        </div>
      </div>
      

      
      <div class="button-group">
        <button class="back-btn" @click="goBack">返回</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.verification-container {
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

.form-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 25px;
}

.verification-method {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.verification-method.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  cursor: pointer;
}

.method-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
}

.method-info {
  flex: 1;
}

.method-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
  font-weight: bold;
}

.method-info p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.95rem;
}

.method-content {
  padding: 0 20px 20px 20px;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1rem;
}

.form-group input {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #333;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 8px;
  font-weight: bold;
}

.input-group {
  display: flex;
  gap: 10px;
}

/* 数字键盘样式 */
.keypad {
  margin-top: 20px;
}

.keypad-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 15px;
}

.keypad-btn {
  padding: 15px;
  border: none;
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.9);
  color: rgb(3, 57, 166);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.keypad-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}



.button-group {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.back-btn, .next-btn {
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

.next-btn {
  background: white;
  color: rgb(3, 57, 166);
}

.back-btn:hover, .next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>