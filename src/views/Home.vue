<template>
  <div class="home">
    <img src="../assets/img/freshbytes.png" height="400px" width="400px" />    
    <!-- <button v-on:click="toggleLogin">Toggle Login</button>
    <h4>{{ isLoggedIn }}</h4> -->
    <login v-if="!isLoggedIn" />
    <div v-else>
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
