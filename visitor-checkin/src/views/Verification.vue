<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const phoneNumber = ref('')
const idNumber = ref('')
const verificationCode = ref('')
const showVerificationCode = ref(false)
const countdown = ref(60)
let timer = null

const validatePhoneNumber = (phone) => {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}


const validateIdNumber = (id) => {
  const idRegex = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/
  return idRegex.test(id)
}


const sendVerificationCode = () => {
  if (!validatePhoneNumber(phoneNumber.value)) {
    alert('请输入正确的手机号码')
    return
  }
  
  // 模拟发送验证码
  console.log('发送验证码到:', phoneNumber.value)
  showVerificationCode.value = true
  startCountdown()
}


const startCountdown = () => {
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      timer = null
    }
  }, 1000)
}


const resendVerificationCode = () => {
  if (timer) return
  countdown.value = 60
  sendVerificationCode()
}

const nextStep = () => {
  if (!validatePhoneNumber(phoneNumber.value)) {
    alert('请输入正确的手机号码')
    return
  }
  
  if (showVerificationCode.value && !verificationCode.value) {
    alert('请输入验证码')
    return
  }
  
  if (!validateIdNumber(idNumber.value)) {
    alert('请输入正确的身份证号码')
    return
  }
  
  // 保存访客信息到sessionStorage
  sessionStorage.setItem('visitorInfo', JSON.stringify({
    phoneNumber: phoneNumber.value,
    idNumber: idNumber.value
  }))
  
  router.push('/face-recognition')
}

const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="verification-container">
    <div class="header">
      <h1>访客验证</h1>
      <p class="subtitle">请填写以下信息进行验证</p>
    </div>
    
    <div class="form-container">
      <div class="form-group">
        <label for="phoneNumber">手机号码</label>
        <div class="input-group">
          <input
            id="phoneNumber"
            type="tel"
            v-model="phoneNumber"
            placeholder="请输入手机号码"
            maxlength="11"
            @input="phoneNumber = phoneNumber.replace(/[^\d]/g, '')"
          />
          <button
            class="send-code-btn"
            @click="sendVerificationCode"
            :disabled="timer !== null || !phoneNumber"
          >
            {{ timer ? `${countdown}s后重发` : '发送验证码' }}
          </button>
        </div>
      </div>
      
      <div class="form-group" v-if="showVerificationCode">
        <label for="verificationCode">验证码</label>
        <input
          id="verificationCode"
          type="text"
          v-model="verificationCode"
          placeholder="请输入验证码"
          maxlength="6"
          @input="verificationCode = verificationCode.replace(/[^\d]/g, '')"
        />
      </div>
      
      <div class="form-group">
        <label for="idNumber">身份证号码</label>
        <input
          id="idNumber"
          type="text"
          v-model="idNumber"
          placeholder="请输入身份证号码"
          maxlength="18"
          @input="idNumber = idNumber.replace(/[^\dXx]/g, '')"
        />
      </div>
      
      <div class="button-group">
        <button class="back-btn" @click="goBack">返回</button>
        <button class="next-btn" @click="nextStep">下一步</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.verification-container {
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
  margin-bottom: 50px;
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

.form-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
}

.input-group {
  display: flex;
  gap: 10px;
}

.send-code-btn {
  padding: 0 20px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.send-code-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-1px);
}

.send-code-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-group {
  display: flex;
  gap: 20px;
  margin-top: 40px;
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
  color: #667eea;
}

.next-btn {
  background: white;
  color: #667eea;
}

.back-btn:hover, .next-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
</style>