import Vue from "vue";
import App from "./App.vue";
import router from "./components/router/router";
import "./components/UI";
import directives from "./components/directives/directives";

directives.forEach((directive) => {
  Vue.directive(directive.name, directive);
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
