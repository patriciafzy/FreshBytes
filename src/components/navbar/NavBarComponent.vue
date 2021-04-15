<template>
  <b-navbar class="navbar">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="logo" alt="FreshBytes" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'about' }">
        About
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'products' }"
        v-if="isLoggedIn && isCustomer"
      >
        Products
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'listings' }"
        v-if="isLoggedIn && !isCustomer"
      >
        Listings
      </b-navbar-item>
    </template>
    <template #end>
      <div class="buttons" v-if="!isLoggedIn">
        <router-link :to="{ name: 'signup' }" class="button is-primary">
          Sign Up
        </router-link>
        <router-link :to="{ name: 'login' }" class="button is-light">
          Login
        </router-link>
      </div>
      <b-navbar-dropdown :label="getUserName" v-else>
        <b-navbar-item tag="router-link" :to="{ name: 'profile' }">
          Profile
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'cart' }"
          v-if="isCustomer"
        >
          Cart
        </b-navbar-item>
        <b-navbar-item
          tag="router-link"
          :to="{ name: 'addListing' }"
          v-if="isBusiness"
        >
          Add Listing
        </b-navbar-item>
        <b-navbar-item v-on:click="logout"> Logout </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>

<script>
import logo from "../../assets/img/FreshBytesLogo.png";

export default {
  data: function () {
    return {
      logo: logo,
    };
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    isCustomer: function () {
      return this.$store.getters.isCustomer;
    },
    isBusiness: function () {
      return !this.$store.getters.isCustomer;
    },
    getUserName: function () {
      return this.$store.getters.getUserName;
    },
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 0 20px;
  margin-bottom: 40px;
  text-align: left;
}

.buttons {
  padding-left: 10px;
}
</style>
