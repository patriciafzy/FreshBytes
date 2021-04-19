<template>
  <div class="cart">
    <h1 class="title has-text-centered">Cart</h1>
    <div class="cart-items">
      <div class="title is-4 total-price">
        Your Grand Total: ${{ getCartPrice }}
      </div>
      <div class="field is-grouped is-grouped-centered">
        <b-button type="is-danger" @click="clearCart" class="button"
          >Clear Cart</b-button
        >
        <b-button type="is-primary" @click="showsuccess" class="button"
          >Checkout</b-button
        >
      </div>

      <section>
        <b-message
          v-if="isActive"
          auto-close
          title="Success!"
          type="is-success"
          has-icon
          v-model="isActive"
          aria-close-label="Close message"
        >
          Thank you for shopping at Fresh Bytes!
        </b-message>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addOrder, reduceItems } from "@/firebase/database";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapGetters(["getCart", "getUsername"]),
    getCartPrice: function () {
      return this.getCart
        .map((x) => x.price * x.currentQuantity)
        .reduce((a, b) => a + b)
        .toFixed(2);
    },
  },
  methods: {
    clearCart: function () {
      this.$store.commit("clearCart");
    },
    showsuccess: function () {
      this.isActive = true;
      setTimeout(() => (this.isActive = false), 10 * 1000);
      this.checkout();
    },
    checkout: async function () {
      const checkoutData = this.getCart.map((product) => {
        return {
          productId: product.id,
          quantity: product.currentQuantity,
          price: product.price,
          originalPrice: product.originalPrice,
          username: this.getUsername,
        };
      });

      // upload order
      await addOrder(checkoutData);

      // remove qty from items
      await reduceItems(this.getCart);

      this.$store.commit("clearCart");
    },
  },
};
</script>

<style scoped>
.button {
  margin-bottom: 10px;
}

.cart-items {
  text-align: left;
}

.cart-item {
  margin-bottom: 30px;
}

/* .total-price {
  margin-top: 30px;
} */
</style>
