import Vue from "vue";
import Vuex from "vuex";
import storedata from "./modules/storedata";

// Load vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    storedata,
  },
});
