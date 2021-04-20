<template>
  <div id="app" class="container">
    <nav-bar-component v-if="isLoggedIn" />
    <transition name="fade">
      <router-view />
      <footer-component></footer-component>
    </transition>
  </div>
</template>

<script>
import NavBarComponent from "@/components/utils/NavBarComponent";
import Footer from "@/components/utils/Footer";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBarComponent,
    'footer-component': Footer,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  created: function () {
    this.$store.dispatch("bindItems");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
