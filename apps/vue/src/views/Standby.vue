<template>
  <div class="standby-container">
    <div class="background-image" :style="{ backgroundImage: `url(${config.backgroundImage})` }"></div>
    <div class="overlay">
      <div class="logo" :style="{ backgroundImage: `url(${config.logo})` }"></div>
      <h1 class="welcome-text">{{ config.welcomeText }}</h1>
      <button class="checkin-button" @click="goToCheckin">开始签到</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Standby',
  data() {
    return {
      config: {
        backgroundImage: '/background.jpg',
        logo: '/logo.png',
        welcomeText: '欢迎光临我们的企业'
      }
    }
  },
  methods: {
    goToCheckin() {
      this.$router.push('/checkin')
    }
  },
  mounted() {
    this.loadConfig()
  },
  methods: {
    async loadConfig() {
      try {
        const response = await fetch('/api/config')
        if (response.ok) {
          const data = await response.json()
          this.config = { ...this.config, ...data }
        }
      } catch (error) {
        console.error('Failed to load config:', error)
      }
    },
    goToCheckin() {
      this.$router.push('/checkin')
    }
  }
}
</script>

<style scoped>
.standby-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.logo {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
}

.welcome-text {
  color: white;
  font-size: 48px;
  margin-bottom: 50px;
  text-align: center;
}

.checkin-button {
  padding: 15px 40px;
  font-size: 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkin-button:hover {
  background-color: #0056b3;
}
</style>