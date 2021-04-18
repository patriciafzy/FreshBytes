<template>
  <div class="columns is-centered">
    <div class="column login">
      <h1 class="title is-3">Login</h1>
      <b-field>
        <b-input
          v-model="username"
          placeholder="username"
          icon-pack="fas"
          icon="user"
          required
        ></b-input>
      </b-field>
      <b-field>
        <b-input
          v-model="password"
          placeholder="password"
          type="password"
          icon-pack="fas"
          icon="lock"
          required
        ></b-input>
      </b-field>
      <p type="is-danger">{{ error }}</p>
      <b-button
        type="is-primary"
        rounded
        expanded
        class="button"
        @click="login"
      >
        Login
      </b-button>
      <b-button
        type="is-info"
        rounded
        expanded
        class="button"
        @click="$emit('signup')"
      >
        Signup
      </b-button>
    </div>
  </div>
</template>

<script>
import { login } from "@/firebase/auth";

export default {
  data: function () {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login: function () {
      if (this.username === "" || this.password === "") {
        this.error = "Please fill in the fields!";
        return;
      }

      login(this.username, this.password)
        .then((result) => {
          console.log(result);
          this.$store.commit("login", result);
          this.$store.dispatch("bindUserOrders");
        })
        .catch((e) => {
          this.error = e;
        });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
}

.button {
  margin: 5px 0;
}
</style>
