import Vue from 'vue';
import App from './App.vue';
import router from './router/index'; // 라우터 설정 가져오기
import axios from './plugins/axios'; // Axios 설정 파일 가져오기

// 개발환경 표시
Vue.config.productionTip = false;

// Axios를 Vue 인스턴스에 글로벌로 등록
Vue.prototype.$axios = axios;

// Vue 애플리케이션 초기화
new Vue({
  render: (h) => h(App),
  router, // 라우터를 Vue 인스턴스에 연결
}).$mount('#app');
