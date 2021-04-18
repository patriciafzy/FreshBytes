<template>
  <div id="app">
    <nav-bar-component v-if="isLoggedIn" />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "@/components/utils/NavBarComponent";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBarComponent,
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
</style>
