import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/index";

const routes = [
  { path: "/", component: Index },
  // { path: '/posts', component:  },
  // { path: '/about', component:  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
