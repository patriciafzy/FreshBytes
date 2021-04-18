<template>
  <b-navbar spaced>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ name: 'main' }">
        <img src="@/assets/img/FreshBytesLogo.png" />
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'products' }"
        v-if="isCustomer"
      >
        Products
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ name: 'listings' }"
        v-if="!isCustomer"
      >
        Listings
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'profile' }">
        Profile
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'dashboard' }">
        Dashboard
      </b-navbar-item>
      <b-navbar-item v-if="isCustomer" tag="router-link" :to="{ name: 'cart' }">
        <div class="cartcount" v-if="getCartCount > 0">{{ getCartCount }}</div>
        <b-icon icon="shopping-cart" style="margin-right: 3px" />
        Cart
      </b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" @click="logout">
            <strong>Logout</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn", "isCustomer", "getCartCount"]),
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style>
.cartcount {
  position: absolute;
  background: #ff2211;
  color: white;
  text-align: center;
  padding-top: 2px;
  height: 18px;
  width: 18px;
  font-size: 10px;
  margin: -8px 0 0 8px;
  border-radius: 50%;
  font-weight: 700;
}
</style>
