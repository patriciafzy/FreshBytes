<template>
  <div>
    <b-message
      title="Error"
      type="is-danger"
      v-model="errorIsActive"
      has-icon
      closable
      size="is-small"
    >
      {{ errorMessage }}
    </b-message>

    <b-field>
      <b-input
        v-model="name"
        placeholder="name"
        icon-pack="fas"
        icon="user-circle"
        required
      ></b-input>
    </b-field>

    <b-field>
      <b-input
        v-model="email"
        type="email"
        placeholder="email"
        icon-pack="fas"
        icon="inbox"
        required
      ></b-input>
    </b-field>

    <b-field>
      <b-input
        v-model="description"
        placeholder="description"
        type="textarea"
        required
      >
      </b-input>
    </b-field>

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
        password-reveal
        type="password"
        icon-pack="fas"
        icon="lock"
        required
      ></b-input>
    </b-field>

    <b-field :type="isSamePassword" :message="isSamePasswordError">
      <b-input
        v-model="confirmPassword"
        placeholder="confirm password"
        password-reveal
        type="password"
        icon-pack="fas"
        icon="lock"
        required
      ></b-input>
    </b-field>

    <b-button type="is-primary" rounded expanded v-on:click="submit">
      Submit
    </b-button>
  </div>
</template>

<script>
import { addUser } from "../../database/queries.js";

export default {
  data: function () {
    return {
      name: "",
      email: "",
      description: "",
      username: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      errorIsActive: false,
    };
  },
  methods: {
    submit: function () {
      if (this.hasAnyError) {
        this.errorMessage = "Please ensure there are no errors!";
        this.errorIsActive = true;
        return;
      }

      const businessData = {
        name: this.name,
        email: this.email,
        description: this.description,
        username: this.username,
        password: this.password,
        isCustomer: false,
      };

      addUser(businessData).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
  computed: {
    // TODO: Add checks for other parameters
    hasAnyError: function () {
      const nameIsEmpty = this.name === "";
      const emailIsEmpty = this.email === "";
      const descriptionIsEmpty = this.description === "";
      const usernameIsEmpty = this.username === "";
      const passwordIsDifferent = this.password !== this.confirmPassword;
      const passwordIsEmpty = this.password === "";

      return (
        nameIsEmpty ||
        emailIsEmpty ||
        descriptionIsEmpty ||
        usernameIsEmpty ||
        passwordIsDifferent ||
        passwordIsEmpty
      );
    },
    isSamePassword: function () {
      if (this.password === "" && this.confirmPassword === "") {
        return "";
      }
      return this.password === this.confirmPassword
        ? "is-success"
        : "is-danger";
    },
    isSamePasswordError: function () {
      return this.password === this.confirmPassword
        ? ""
        : "Passwords do not match!";
    },
  },
};
</script>

<style scoped></style>
