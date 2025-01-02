import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from './plugins/axios'; // Axios 설정 파일 가져오기

// 컴포넌트 임포트
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

// 개발환경 표시
Vue.config.productionTip = false;

// VueRouter 사용
Vue.use(VueRouter);

// Axios를 Vue 인스턴스에 글로벌로 등록
Vue.prototype.$axios = axios;

// 라우터 설정
const routes = [
  {
    path: '/', // 기본 경로
    component: HomePage,
  },
  {
    path: '/login', // 로그인 페이지 경로
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: 'history', // 브라우저의 히스토리 모드 사용
  routes,
});

new Vue({
  render: (h) => h(App),
  router, // 라우터를 Vue 인스턴스에 연결
}).$mount('#app');
