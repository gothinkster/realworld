<template>
  <div class="verification-container">
    <h1>人证比对</h1>
    <div class="verification-content">
      <div class="camera-preview">
        <div class="preview-placeholder">
          <div class="camera-icon">📷</div>
          <p>请将脸部对准摄像头</p>
        </div>
      </div>
      <div class="verification-steps">
        <div class="step active">1. 准备拍照</div>
        <div class="step">2. 采集人脸</div>
        <div class="step">3. 比对验证</div>
        <div class="step">4. 完成</div>
      </div>
      <div class="verification-tips">
        <h3>温馨提示：</h3>
        <ul>
          <li>请确保光线充足</li>
          <li>请摘掉帽子和眼镜</li>
          <li>请保持面部表情自然</li>
          <li>请将脸部置于画面中央</li>
        </ul>
      </div>
      <div class="button-group">
        <button @click="startVerification" :disabled="isVerifying">
          {{ isVerifying ? '验证中...' : '开始验证' }}
        </button>
        <button @click="cancelVerification">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Verification',
  data() {
    return {
      isVerifying: false,
      visitorId: null
    }
  },
  mounted() {
    this.visitorId = this.$route.query.visitorId
    this.initializeHardware()
  },
  methods: {
    // 初始化硬件设备（预留桩代码）
    initializeHardware() {
      console.log('Initializing verification hardware...')
      // 这里应该是初始化摄像头、身份证阅读器等硬件的代码
      // 例如：
      // hardware.initializeCamera()
      // hardware.initializeIDCardReader()
    },
    // 开始人证比对（预留桩代码）
    async startVerification() {
      if (this.isVerifying) return
      
      this.isVerifying = true
      
      try {
        // 步骤1: 采集人脸图像
        console.log('Capturing face image...')
        // const faceImage = await hardware.captureFace()
        
        // 步骤2: 读取身份证信息
        console.log('Reading ID card information...')
        // const idCardInfo = await hardware.readIDCard()
        
        // 步骤3: 执行人证比对
        console.log('Performing verification...')
        // const verificationResult = await hardware.verify(faceImage, idCardInfo)
        
        // 模拟验证过程
        await this.simulateVerification()
        
        // 步骤4: 验证成功，跳转到确认页面
        this.$router.push({ path: '/confirmation', query: { visitorId: this.visitorId } })
      } catch (error) {
        console.error('Verification failed:', error)
        alert('验证失败，请重试')
        this.isVerifying = false
      }
    },
    // 模拟验证过程（用于演示）
    async simulateVerification() {
      // 模拟准备拍照
      await this.delay(1000)
      this.updateStep(1)
      
      // 模拟采集人脸
      await this.delay(1500)
      this.updateStep(2)
      
      // 模拟比对验证
      await this.delay(2000)
      this.updateStep(3)
      
      // 模拟完成
      await this.delay(500)
      this.updateStep(4)
    },
    // 更新验证步骤
    updateStep(stepIndex) {
      const steps = document.querySelectorAll('.step')
      steps.forEach((step, index) => {
        if (index < stepIndex) {
          step.classList.add('completed')
          step.classList.remove('active')
        } else if (index === stepIndex) {
          step.classList.add('active')
          step.classList.remove('completed')
        } else {
          step.classList.remove('active', 'completed')
        }
      })
    },
    // 延迟函数
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    // 取消验证
    cancelVerification() {
      this.isVerifying = false
      this.$router.push('/checkin')
    }
  }
}
</script>

<style scoped>
.verification-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.verification-container h1 {
  font-size: 48px;
  margin-bottom: 30px;
  color: #333;
}

.verification-content {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.camera-preview {
  width: 400px;
  height: 300px;
  margin: 0 auto 30px;
  background-color: #000;
  border-radius: 10px;
  overflow: hidden;
}

.preview-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.camera-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.preview-placeholder p {
  font-size: 18px;
}

.verification-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 20px;
}

.step {
  font-size: 16px;
  color: #666;
  position: relative;
  padding: 10px;
  transition: color 0.3s;
}

.step.active {
  color: #007bff;
  font-weight: bold;
}

.step.completed {
  color: #28a745;
}

.step.completed::after {
  content: '✓';
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  color: #28a745;
  font-weight: bold;
}

.verification-tips {
  text-align: left;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.verification-tips h3 {
  margin-bottom: 10px;
  color: #333;
}

.verification-tips ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
}

.verification-tips li {
  margin-bottom: 5px;
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

.button-group button:first-child:hover:not(:disabled) {
  background-color: #0056b3;
}

.button-group button:first-child:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.button-group button:last-child {
  background-color: #6c757d;
  color: white;
}

.button-group button:last-child:hover {
  background-color: #545b62;
}
</style>