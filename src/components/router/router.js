import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import PostPage from "../pages/PostPage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/posts", component: PostPage },
  { path: "/about", component: AboutPage },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
