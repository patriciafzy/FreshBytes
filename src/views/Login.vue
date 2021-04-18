<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <img
        src="../assets/img/FreshBytesLogo.png"
        height="300px"
        width="300px"
      />
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
      <b-button type="is-primary" rounded expanded @click="login"
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
        this.loginAlert("Please enter valid username and password!");
      } else {
        validateLogin(this.username, this.password)
          .then((result) => {
            if (result) {
              this.$store.commit("login", result);
              this.$router.push({ name: "home" });
            }
          })
          .catch(() => this.loginAlert("Invalid username/password!"));
      }
    },
    loginAlert: function (message) {
      this.$buefy.dialog.alert({
        title: "Error",
        message: message,
        type: "is-danger",
        hasIcon: true,
        icon: "times-circle",
        iconPack: "fa",
        ariaRole: "alertdialog",
        ariaModal: true,
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
