<template>
  <div class="home-container">
    <h1 class="welcome-title">Welcome to the Home Page</h1>
    <!-- 로그인 페이지로 이동하는 링크 -->
    <router-link to="/login" class="login-link">Go to Login Page</router-link>  
    <router-link to="/userInfo" class="login-link">Go to User Page</router-link>  
    <router-link to="/gov24" class="login-link">Go to User gov24</router-link>  
  </div>
</template>

<!-- 파일명으로 찾는게 아니라 컴포넌트의 이름을 등록하고 이름으로 참조 -->
<script>
export default {
  name: "HomePage",
  created() {
    console.log("hompagefdsa");
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f7fc; /* 밝은 배경 색상 */
  text-align: center;
}

.welcome-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.login-link {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  border: 2px solid #007bff;
  transition: background-color 0.3s, color 0.3s;
}

.login-link:hover {
  background-color: #007bff;
  color: white;
}
</style>
