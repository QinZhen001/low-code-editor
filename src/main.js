import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import store from './store';
import router from './router/index.js';
import { regiesterComponents } from '@/custom-component';

import '@/assets/iconfont/iconfont.css';
import '@/styles/animate.scss';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/reset.css';

// 注册自定义组件
regiesterComponents();

Vue.use(ElementUI, { size: 'small' });
Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
