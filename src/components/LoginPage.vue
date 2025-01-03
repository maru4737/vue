<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">로그인</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="input-group">
          <label for="id">아이디</label>
          <input type="text" id="id" v-model="id" placeholder="아이디를 입력하세요" required />
        </div>
        <div class="input-group">
          <label for="pw">비밀번호</label>
          <input type="password" id="pw" v-model="pw" placeholder="비밀번호를 입력하세요" required />
        </div>
        <button type="submit" class="login-btn">로그인</button>
      </form>
      <p class="signup-link">계정이 없으신가요? <router-link to="/signup">회원가입</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      id: "",
      pw: "",
    };
  },
  methods: {
    async login() {
      try {
        // 로그인 요청
        const response = await axios.post("/login/userLogin", {
          id: this.id,
          pw: this.pw,
        });
        // 서버 응답 처리
        console.log('서버 응답:', response.data);
        //alert(`서버에서 받은 응답: ${response.data}`);

        this.$router.push({ name: 'User' });
        
      } catch (error) {
        console.error("로그인 오류:", error);
        // alert("로그인 중 오류가 발생했습니다.");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fc;
}

.login-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-group label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
}

.input-group input {
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.input-group input:focus {
  border-color: #007bff;
  outline: none;
}

.login-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #0056b3;
}

.signup-link {
  margin-top: 20px;
  font-size: 14px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
