import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "./assets/scss/app.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import "./vee-validate";

Vue.use(Buefy, {
  defaultIconPack: "fas",
});

Vue.config.productionTip = false;

new Vue({
  created: function () {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
