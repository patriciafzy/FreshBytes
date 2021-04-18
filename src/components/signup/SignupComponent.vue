<template>
  <div class="columns is-centered">
    <div class="column signup">
      <div v-if="!customer && !business">
        <h1 class="title is-3">Signup</h1>
        <b-button
          type="is-primary"
          rounded
          expanded
          class="button"
          @click="toggleCustomer"
        >
          Customer
        </b-button>
        <b-button
          type="is-info"
          rounded
          expanded
          class="button"
          @click="toggleBusiness"
        >
          Business
        </b-button>
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
      <customer-signup-component v-if="customer" @back="toggleSignup" />
      <business-signup-component v-if="business" @back="toggleSignup" />
    </div>
  </div>
</template>

<script>
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent";
import BusinessSignupComponent from "@/components/signup/BusinessSignupComponent";

export default {
  components: {
    CustomerSignupComponent,
    BusinessSignupComponent,
  },
  data: function () {
    return {
      customer: false,
      business: false,
    };
  },
  methods: {
    toggleCustomer: function () {
      this.customer = true;
      this.business = false;
    },
    toggleBusiness: function () {
      this.customer = false;
      this.business = true;
    },
    toggleSignup: function () {
      this.customer = false;
      this.business = false;
    },
  },
};
</script>

<style scoped>
.signup {
  max-width: 300px;
  margin: auto;
}

.button {
  margin: 5px 0;
}
</style>
