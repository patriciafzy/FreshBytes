<template>
  <div class="columns is-centered">
    <div class="column is-narrow">
      <img
        src="../assets/img/FreshBytesLogo.png"
        height="300px"
        width="300px"
      />
      <h1 class="title is-3">Sign Up</h1>
      <div v-if="!customer && !business">
        <b-button
          type="is-primary"
          rounded
          expanded
          v-on:click="toggleCustomer"
        >
          Customer
        </b-button>
        <b-button type="is-danger" rounded expanded v-on:click="toggleBusiness">
          Business
        </b-button>
      </div>
      <div v-if="customer">
        <customer-signup />
      </div>
    </div>
  </div>
</template>

<script>
import CustomerSignup from "../components/signups/CustomerSignup.vue";

export default {
  components: {
    CustomerSignup,
  },
  data: function () {
    return {
      customer: false,
      business: false,
    };
  },
  methods: {
    toggleCustomer: function () {
      this.business = false;
      this.customer = true;
    },
    toggleBusiness: function () {
      this.customer = false;
      this.business = true;
    },
  },
};
</script>

<style scoped>
button {
  margin-top: 5px;
}
</style>
