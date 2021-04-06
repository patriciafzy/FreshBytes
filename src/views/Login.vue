<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <img src="../assets/img/freshbytes.png" height="300px" width="300px" />
      <h1 class="title is-3">Login</h1>
      <b-field>
        <b-input
          v-model="username"
          placeholder="username"
          icon-pack="fas"
          icon="user"
        ></b-input>
      </b-field>
      <b-field>
        <b-input
          v-model="password"
          placeholder="password"
          type="password"
          icon-pack="fas"
          icon="lock"
        ></b-input>
      </b-field>
      <b-button type="is-primary" rounded expanded v-on:click="login"
        >Login</b-button
      >
    </div>
  </div>
</template>

<script>
import { validateLogin } from "../database/queries.js";

export default {
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      if (this.username === "" || this.password === "") {
        alert("Please enter valid username and password!");
      }

      validateLogin(this.username, this.password).then((result) => {
        if (result) {
          this.$store.commit("login", result);
          this.$router.push({ name: "Home" });
        } else {
          alert("Invalid username/password!!");
        }
      });
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 5px;
}
</style>
