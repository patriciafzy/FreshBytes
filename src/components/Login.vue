<template>
  <div class="container">
    <h3>Login</h3>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button v-on:click="login">Login</button>
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
        } else {
          alert("Invalid username/password!!");
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

input,
button {
  display: block;
  margin: 10px;
}
</style>
