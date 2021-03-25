<template>
  <div id="app">
    <div id="nav">
      <div v-if="isLoggedIn">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'products' }">Products</router-link> |
        <router-link :to="{ name: 'profile' }">Profile</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link> |
        <router-link :to="{ name: 'cart' }">Cart</router-link>
        <router-link v-if="isBusiness" :to="{ name: 'addListing' }">
          | Add Listing</router-link
        >
      </div>
      <div v-else>
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'about' }">About</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
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
  background-color: #f5f5f5;
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
