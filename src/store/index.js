import Vue from "vue";
import Vuex from "vuex";
import galleryModule from "./galleryModule";
import postModule from "./postModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    post: postModule,
    images: galleryModule,
  },
});
