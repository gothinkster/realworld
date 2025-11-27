<template>
  <div class="register-container">
    <h1>访客登记</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="phone">电话</label>
        <input type="tel" id="phone" v-model="formData.phone" required>
      </div>
      <div class="form-group">
        <label for="idCard">身份证号</label>
        <input type="text" id="idCard" v-model="formData.idCard" required>
      </div>
      <div class="form-group">
        <label for="visitTime">预约时间</label>
        <input type="datetime-local" id="visitTime" v-model="formData.visitTime" required>
      </div>
      <div class="form-group">
        <label for="visitFloor">预约楼层</label>
        <input type="text" id="visitFloor" v-model="formData.visitFloor" required>
      </div>
      <div class="form-group">
        <label for="receptionistId">接待员ID</label>
        <input type="text" id="receptionistId" v-model="formData.receptionistId" required>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        idCard: '',
        visitTime: '',
        visitFloor: '',
        receptionistId: ''
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        })
        if (response.ok) {
          alert('登记成功')
          this.formData = {
            name: '',
            phone: '',
            idCard: '',
            visitTime: '',
            visitFloor: '',
            receptionistId: ''
          }
        } else {
          alert('登记失败')
        }
      } catch (error) {
        console.error(error)
        alert('登记失败')
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>