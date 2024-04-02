import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueRouter from 'vue-router'
// import axios from 'axios'


// Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(VueRouter)
// import axios from 'axios'

// // 设置默认的 baseURL
// axios.defaults.baseURL = 'http://127.0.0.1:5000'
// // 将 Axios 实例添加到 Vue 实例的原型中
// app.config.globalProperties.$axios = axios
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

createApp(App).use(router).mount('#app')
