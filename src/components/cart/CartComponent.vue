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
      <div class="subtitle is-6">Points Earned: {{ getPoints }}</div>
      <div class="buttons">
        <b-button type="is-danger" class="button" @click="clearCart">
          Clear Cart
        </b-button>
        <b-button type="is-primary" class="button" @click="$emit('next')">
          Next
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    getPoints: function () {
      return this.getCart
        .map((x) => x.points * x.currentQuantity)
        .reduce((a, b) => a + b);
    },
  },
  methods: {
    clearCart: function () {
      this.$store.commit("clearCart");
    },
  },
};
</script>

<style scoped>
.buttons {
  justify-content: space-between;
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
