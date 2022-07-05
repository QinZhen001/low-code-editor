import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import "@/assets/iconfont/iconfont.css";
import "@/styles/animate.scss";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/reset.css";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
