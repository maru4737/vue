// Vue Router의 인스턴스를 생성하는 함수 
// Vue Router의 **히스토리 모드(history mode)**를 설정하는 함수
import { createRouter, createWebHistory } from 'vue-router';
// HomePage 이름의 컴포넌트를 ./components/HomePage.vue 경로에서 찾아서 임포트
import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
  {
    path: '/',
    // 라우트의 고유한 이름
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
