import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 컴포넌트 임포트
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'

// 개발환경표시
Vue.config.productionTip = false

// VueRouter 사용
Vue.use(VueRouter)

// 라우터 설정
const routes = [
  {
    path: '/',  // 기본 경로
    component: HomePage
  },
  {
    path: '/login',  // 로그인 페이지 경로
    component: LoginPage
  }
]

const router = new VueRouter({
  mode: 'history',  // 브라우저의 히스토리 모드 사용 (url상의 해시(#)을 제거, url이 깔끔해지고 url로 접근이 용이해짐)
  routes
})

new Vue({
  render: h => h(App),
  router  // 라우터를 Vue 인스턴스에 연결
}).$mount('#app')
