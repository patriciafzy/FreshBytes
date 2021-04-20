<template>
  <div class="cart">
    <div v-if="getCartCount == 0">
      <h1 class="title is-3">Your cart is currently empty!</h1>
      <h1 class="subtitle is-5">
        Go <router-link :to="{ name: 'products' }">Shopping</router-link>
      </h1>
    </div>
    <b-steps
      v-model="activeStep"
      rounded
      :has-navigation="false"
      mobile-mode="compact"
      v-else
    >
      <b-step-item step="1" label="Cart" :clickable="false">
        <cart-component @next="nextPage" />
      </b-step-item>
      <b-step-item step="2" label="Address" :clickable="false">
        <address-component @previous="previousPage" @next="nextPage" />
      </b-step-item>
      <b-step-item step="3" label="Payment" :clickable="false">
        <h1 class="title has-text-centered" style="margin-bottom: 0px">
          Payment
        </h1>
        <credit-card-component @next="nextPage" />
      </b-step-item>
      <b-step-item step="4" label="Complete" :clickable="false">
        <!-- <complete-component /> -->
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import CartComponent from "@/components/cart/CartComponent";
import CreditCardComponent from "@/components/cart/CreditCardComponent.vue";
import AddressComponent from "@/components/cart/AddressComponent.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CartComponent,
    CreditCardComponent,
    AddressComponent,
  },
  data: function () {
    return {
      activeStep: 0,
      submitting: false,
      isFullPage: true,
    };
  },
  computed: {
    ...mapGetters(["getCartCount"]),
  },
  watch: {
    activeStep: function (newVal) {
      if (newVal === 3) {
        this.$router.push({ name: "completeCheckout" });
      }

      const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el,
      });
      setTimeout(() => loadingComponent.close(), 300);
    },
  },
  methods: {
    previousPage: function () {
      this.activeStep -= 1;
    },
    nextPage: function () {
      this.activeStep += 1;
    },
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  margin: auto;
  margin-top: 50px;
}
</style>
