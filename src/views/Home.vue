<template>
  <div class="home">
    <h1><i>FreshBytes</i></h1>
    <button v-on:click="toggleLogin">Toggle Login</button>
    <h4>{{ isLoggedIn }}</h4>
    <login v-if="!isLoggedIn" />
    <h1 v-else>Welcome {{ getUsername }}!</h1>
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
  methods: {
    toggleLogin: function () {
      this.$store.commit("toggleLogin");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    getUsername: function () {
      return this.$store.getters.getUsername;
    },
  },
};
</script>
