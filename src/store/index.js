import Vue from "vue";
import Vuex from "vuex";
import postModule from "./postModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: [postModule],
});
