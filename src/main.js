import Vue from "vue";
import App from "./App.vue";
import "./components/UI";

// const requireComponent = require.context("@/components/UI", true);

// console.log(requireComponent.keys());
// components.forEach((element) => {
//   Vue.component(element.name, element);
// });

new Vue({
  render: (h) => h(App),
}).$mount("#app");
