import Vue from "vue";
import App from "./App.vue";
import router from "./components/router/router";
import "./components/UI";

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
