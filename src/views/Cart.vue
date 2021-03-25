<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i><br />
      <router-link to="/products">Go shopping</router-link>
    </p>
    <section class="section is-medium">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Points Earned</p>
            <p class="title">{{ totalSavings * 10 }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total Savings</p>
            <p class="title">${{ totalSavings }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Environmental Impact</p>
            <p class="title">10</p>
          </div>
        </div>
      </div>
    </section>
    <div class="container is-fluid">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <strong>Product</strong>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <strong>Price</strong>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <strong>Quantity</strong>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <strong>Total</strong>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div></div>
        </div>
      </div>
    </div>
    <div v-for="product in products" :key="product">
      <basket v-bind:product="product"></basket>
    </div>
    <section class="section is-medium">
      <b-field grouped position="is-right">
        <p><strong> Grand Total: </strong> ${{ total }}</p>
      </b-field>
    </section>

    <p>
      <b-button
        v-show="products.length"
        type="is-primary"
        rounded
        @click="checkout"
        >Checkout</b-button
      >
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Basket from "../components/Basket.vue";

export default {
  computed: {
    ...mapGetters({
      products: "cart",
    }),
    total() {
      return this.products
        .reduce((total, p) => {
          return total + p.price * p.quantity;
        }, 0)
        .toFixed(2);
    },

    totalSavings() {
      return this.products
        .reduce((total, p) => {
          return total + (p.originalPrice - p.price) * p.quantity;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    checkout() {
      alert("Your total is $" + this.total);
    },
  },
  components: {
    Basket,
  },
};
</script>
