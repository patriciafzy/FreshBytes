<template>
  <div id="app">
    <nav-bar-component></nav-bar-component>
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from "./components/navbar/NavBarComponent.vue";

export default {
  components: {
    NavBarComponent,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    isBusiness: function () {
      return !this.$store.getters.getUserType;
    },
  },
};
</script>

<style>
html {
  height: 100%;
  padding: 0px;
  margin: 0px;
}

body {
  background-color: #f5edd9;
  width: 100%;
  min-height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
