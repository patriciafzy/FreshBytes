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
      ></b-input>
    </b-field>
    <b-field>
      <b-input
        v-model="email"
        type="email"
        placeholder="email"
        icon-pack="fas"
        icon="inbox"
      ></b-input>
    </b-field>
    <b-field>
      <b-select
        placeholder="location"
        v-model="location"
        icon-pack="fas"
        icon="location-arrow"
        expanded
      >
        <option v-for="l in locations" :key="l" :value="l">
          {{ l }}
        </option>
      </b-select>
    </b-field>
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
        password-reveal
        type="password"
        icon-pack="fas"
        icon="lock"
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
      ></b-input>
    </b-field>
    <b-button type="is-primary" rounded expanded v-on:click="submit">
      Submit
    </b-button>
  </div>
</template>

<script>
import { addUser } from "../../database/queries.js";

const locations = ["North", "South", "East", "West"];

export default {
  data: function () {
    return {
      name: "",
      email: "",
      location: "",
      username: "",
      password: "",
      locations,
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

      const customerData = {
        name: this.name,
        email: this.email,
        location: this.location,
        username: this.username,
        password: this.password,
        isCustomer: true,
      };

      addUser(customerData).then(() => {
        this.$router.push({ name: "home" });
      });
    },
  },
  computed: {
    // TODO: Add checks for other parameters
    hasAnyError: function () {
      const nameIsEmpty = this.name === "";
      const emailIsEmpty = this.email === "";
      const locationIsEmpty = this.location === "";
      const usernameIsEmpty = this.username === "";
      const passwordIsDifferent = this.password !== this.confirmPassword;
      const passwordIsEmpty = this.password === "";

      return (
        nameIsEmpty ||
        emailIsEmpty ||
        locationIsEmpty ||
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

<style></style>
