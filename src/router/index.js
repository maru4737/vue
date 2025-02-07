// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import LoginPage from '../components/LoginPage.vue';
import UserPage from '../components/UserPage.vue';
import Gov24Page from '../components/indexPage.vue';


// VueRouter 사용 등록
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/userInfo',
    name: 'User',
    component: UserPage,
  },
  {
    path: '/gov24',
    name: 'Gov24',
    component: Gov24Page,
  },

];

const router = new VueRouter({
  mode: 'history', // 브라우저의 히스토리 모드 사용
  routes,
});

export default router;
