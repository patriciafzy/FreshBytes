import Vue from 'vue'
import Vuex from 'vuex'
import db from '../database/firebase.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setCategories(state, val) {
      state.products = val;
    }
  },
  actions: {
    fetchCategories({ commit }) {
      db.collection('items').get().then(querySnapshot => {
        if (querySnapshot.empty) {
          console.log('cannot find')
          this.$router.push('/HelloWorld')
        } else {
          let product = {};
          this.loading = false;
          var products = [];
          querySnapshot.forEach(doc => {
            product = [doc.id, doc.data()];
            products.push(product);
          });

          commit("setCategories", products);
        }
      });
    }
  },
  getters: {
    categories (state) {
        return state.products;
    },
    product: (state) => (id) => {
        return state.products.filter(p => p[0] === id)
    }
  },
  modules: {
  }
})

store.dispatch("fetchCategories")
export default store;
