<template>
  <div class="cart">
    <h1 class="title has-text-centered">Cart</h1>
    <div class="cart-items">
      <cart-product-card-component
        v-for="item in getCart"
        :key="item.name"
        :product="item"
        class="cart-item"
      />
      <div class="title is-4 total-price">Total: ${{ getCartPrice }}</div>
      <b-button type="is-danger" @click="clearCart" class="button"
        >Clear Cart</b-button
      >
      <b-button type="is-primary" @click="checkout" class="button"
        >Checkout</b-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addOrder, reduceItems } from "@/firebase/database";
import CartProductCardComponent from "@/components/cart/CartProductCardComponent";

export default {
  components: {
    CartProductCardComponent,
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
