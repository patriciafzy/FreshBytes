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
      has-navigation
      mobile-mode="compact"
      v-else
    >
      <b-step-item step="1" label="Cart" :clickable="false">
        <cart-component />
      </b-step-item>
      <b-step-item step="2" label="Address" :clickable="false">
        <address-component />
      </b-step-item>
      <b-step-item step="3" label="Payment" :clickable="false">
        <h1 class="title has-text-centered">Payment</h1>
        <credit-card-component />
      </b-step-item>
      <b-step-item step="4" label="Complete" :clickable="false">
        <complete />
      </b-step-item>

      <template slot="navigation" slot-scope="{ previous, next }">
        <div class="field is-grouped is-grouped-centered">
          <p class="control">
            <a class="button is-primary" @click.prevent="next.action">Submit</a>
          </p>
          <p class="control">
            <a class="button is-light" @click.prevent="previous.action">Back</a>
          </p>
        </div>
      </template>
    </b-steps>
  </div>
</template>

<script>
import CartComponent from "@/components/cart/CartComponent";
import CreditCardComponent from "@/components/cart/CreditCardComponent.vue";
import AddressComponent from "@/components/cart/AddressComponent.vue";
import Complete from "@/components/cart/Complete";
import { mapGetters } from "vuex";

export default {
  components: {
    CartComponent,
    CreditCardComponent,
    Complete,
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
    activeStep() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el,
      });
      setTimeout(() => loadingComponent.close(), 1000);
    },
  },
};
</script>

<style scoped>
.cart {
  width: 80%;
  margin: auto;
}
</style>
