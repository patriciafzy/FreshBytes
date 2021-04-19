<template>
  <div v-if="isPageLoaded">
    <h1 class="title is-3">Customer Signup</h1>
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <validation-provider
        rules="required|alpha_spaces"
        v-slot="{ errors, valid }"
        name="Name"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input
            v-model="name"
            placeholder="name"
            icon-pack="fas"
            icon="user-circle"
          />
        </b-field>
      </validation-provider>
      <validation-provider
        rules="required|email"
        v-slot="{ errors, valid }"
        name="Email"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input
            type="email"
            v-model="email"
            placeholder="email"
            icon-pack="fas"
            icon="inbox"
          />
        </b-field>
      </validation-provider>
      <validation-provider
        rules="required|available_username"
        v-slot="{ errors, valid }"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input
            v-model="username"
            placeholder="username"
            icon-pack="fas"
            icon="user"
          />
        </b-field>
      </validation-provider>
      <validation-provider
        rules="required|password_min:8"
        vid="password"
        v-slot="{ errors, valid }"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input
            type="password"
            v-model="password"
            placeholder="password"
            icon-pack="fas"
            icon="lock"
          />
        </b-field>
      </validation-provider>
      <validation-provider
        rules="required|confirmed:password"
        v-slot="{ errors, valid }"
      >
        <b-field
          :type="{ 'is-danger': errors[0], 'is-success': valid }"
          :message="errors"
        >
          <b-input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            icon-pack="fas"
            icon="lock"
          />
        </b-field>
      </validation-provider>
      <b-button
        type="is-primary"
        rounded
        expanded
        class="button"
        @click="handleSubmit(submit)"
      >
        Signup
      </b-button>
    </validation-observer>
    <b-button
      type="is-link"
      rounded
      expanded
      class="button"
      @click="$emit('back')"
    >
      Back
    </b-button>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import { addUser, getUsernames } from "@/firebase/auth";

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: function () {
    return {
      isPageLoaded: false,
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  created: function () {
    // Validation for taken usernames
    getUsernames().then((usernames) => {
      extend("available_username", (value) => {
        if (!usernames.includes(value)) {
          return true;
        }

        return "Username already taken!";
      });

      this.isPageLoaded = true;
    });
  },
  methods: {
    submit: function () {
      const userData = {
        ...this._data,
        isCustomer: true,
        points: 0,
      };

      delete userData.isPageLoaded;
      delete userData.confirmPassword;

      console.log(userData);

      addUser(userData).then(() => {
        this.$store.commit("login", userData);
      });
    },
  },
};
</script>

<style scoped>
.button {
  margin: 5px 0;
}
</style>
