<template>
  <div class="home">
    <h1 class="title is-1"><i>FreshBytes</i></h1>
    <login v-if="!isLoggedIn" />
    <div v-if="isLoggedIn">
      <h1 class="title is-3">Welcome {{ getUsername }}!</h1>
      <b-button class="is-primary" rounded v-on:click="logout">Logout</b-button>
    </div>
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
    logout: function () {
      this.$store.commit("logout");
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
