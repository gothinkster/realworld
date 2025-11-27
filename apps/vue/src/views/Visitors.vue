<template>
  <div class="visitors-container">
    <h1>访客管理</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>电话</th>
          <th>身份证号</th>
          <th>预约时间</th>
          <th>预约楼层</th>
          <th>签到时间</th>
          <th>接待员ID</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="visitor in visitors" :key="visitor.id">
          <td>{{ visitor.id }}</td>
          <td>{{ visitor.name }}</td>
          <td>{{ visitor.phone }}</td>
          <td>{{ visitor.idCard }}</td>
          <td>{{ visitor.visitTime }}</td>
          <td>{{ visitor.visitFloor }}</td>
          <td>{{ visitor.checkInTime }}</td>
          <td>{{ visitor.receptionistId }}</td>
          <td>{{ visitor.status }}</td>
          <td>
            <button v-if="visitor.status === 'pending'" @click="checkIn(visitor.id)">签到</button>
            <button @click="deleteVisitor(visitor.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Visitors',
  data() {
    return {
      visitors: []
    }
  },
  mounted() {
    this.loadVisitors()
  },
  methods: {
    async loadVisitors() {
      try {
        const response = await fetch('/api/visitors')
        
        if (response.ok) {
          this.visitors = await response.json()
        } else {
          alert('加载访客信息失败')
        }
      } catch (error) {
        console.error(error)
        alert('加载访客信息失败')
      }
    },
    
    async checkIn(id) {
      try {
        const response = await fetch(`/api/visitors/${id}/checkin`, {
          method: 'POST'
        })
        
        if (response.ok) {
          alert('签到成功')
          this.loadVisitors()
        } else {
          alert('签到失败')
        }
      } catch (error) {
        console.error(error)
        alert('签到失败')
      }
    },
    
    async deleteVisitor(id) {
      try {
        const response = await fetch(`/api/visitors/${id}`, {
          method: 'DELETE'
        })
        
        if (response.ok) {
          alert('删除成功')
          this.loadVisitors()
        } else {
          alert('删除失败')
        }
      } catch (error) {
        console.error(error)
        alert('删除失败')
      }
    }
  }
}
</script>

<style scoped>
.visitors-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
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