import Vue from "vue";
import Vuex from "vuex";
import db from "../database/firebase.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    userData: {
      username: "",
      isCustomer: null,
    },
    products: [],
  },
  mutations: {
    setCategories: function (state, val) {
      state.products = val;
    },
    toggleLogin: function (state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    login: function (state, payload) {
      state.isLoggedIn = true;
      state.userData = payload;
    },
    logout: function (state) {
      state.isLoggedIn = false;
      state.userData = {};
    },
  },
  actions: {
    fetchCategories({ commit }) {
      db.collection("items")
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("cannot find");
            this.$router.push("/HelloWorld");
          } else {
            let product = {};
            this.loading = false;
            var products = [];
            querySnapshot.forEach((doc) => {
              product = [doc.id, doc.data()];
              products.push(product);
            });

            commit("setCategories", products);
          }
        });
    },
  },
  getters: {
    categories: function (state) {
      return state.products;
    },
    product: function (state) {
      return (id) => {
        return state.products.filter((p) => p[0] === id);
      };
    },
    isLoggedIn: function (state) {
      return state.isLoggedIn;
    },
    getUsername: function (state) {
      return state.userData.username;
    },
    getUserType: function (state) {
      return state.userData.isCustomer;
    },
  },
  modules: {},
});

store.dispatch("fetchCategories");
export default store;
