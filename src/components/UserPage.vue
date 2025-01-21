<template>
  <div class="user-info-container">
    <div class="user-info-card">
      <h2 class="user-info-title">회원 정보</h2>
      <div v-if="user">
        <p><strong>아이디:</strong> {{ user.id }}</p>
        <!--<p><strong>이메일:</strong> {{ user.email }}</p>-->
        <!--<p><strong>가입일:</strong> {{ user.joinDate }}</p>-->
      </div>
      <div v-else>
        <p>회원 정보를 불러오는 중입니다...</p>
      </div>
      <button @click="logout" class="logout-btn">로그아웃</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserPage",
  data() {
    return {
      user: null,
    };
  },
  created() {
    //this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      try {
        // 로그인된 사용자 정보 요청
        const response = await axios.post("/user/userInfo");
        this.user = response.data;
      } catch (error) {
        console.error("회원 정보 불러오기 오류:", error);
        alert("회원 정보를 불러오는 중 오류가 발생했습니다.");
      }
    },
    logout() {
      // 로그아웃 처리 (예: 세션 삭제)
      alert("로그아웃되었습니다.");
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.user-info-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fc;
}

.user-info-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.user-info-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.user-info-card p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #c82333;
}
</style>
