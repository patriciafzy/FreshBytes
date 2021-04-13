<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!getProducts.length">
      <i>Your cart is empty!</i><br />
      <router-link to="/products">Go shopping</router-link>
    </p>
    <section class="section is-medium">
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Points Earned</p>
            <p class="title">{{ getTotalSavings * 10 }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total Savings</p>
            <p class="title">${{ getTotalSavings }}</p>
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
    <div v-for="product in getProducts" :key="product.id">
      <basket v-bind:product="product"></basket>
    </div>
    <section class="section is-medium">
      <b-field grouped position="is-right">
        <p><strong>Grand Total: </strong> ${{ getTotal }}</p>
      </b-field>
    </section>

    <p>
      <b-button
        v-show="getProducts.length"
        type="is-primary"
        rounded
        @click="checkout"
        >Checkout</b-button
      >
    </p>
  </div>
</template>

<script>
import Basket from "../components/Basket.vue";
import { addOrder, getDocRef } from "../database/queries";

export default {
  components: {
    Basket,
  },
  computed: {
    getProducts: function () {
      console.log(this.$store.getters.getCart);
      return this.$store.getters.getCart;
    },
    getTotal: function () {
      return this.getProducts
        .map((product) =>
          this.computePrice(product.price, product.cartQuantity)
        )
        .reduce((x, y) => x + y, 0)
        .toFixed(2);
    },
    getTotalSavings: function () {
      return this.getProducts
        .map((product) =>
          this.computeSavings(
            product.originalPrice,
            product.price,
            product.cartQuantity
          )
        )
        .reduce((x, y) => x + y, 0);
    },
  },
  methods: {
    checkout() {
      this.$buefy.dialog.confirm({
        title: "Confirm your Order",
        message: "Your total is $" + this.getTotal,
        confirmText: "Checkout",
        type: "is-success",
        scroll: "keep",
        trapFocus: false,
        onConfirm: () => {
          this.createNewOrder();
          this.$buefy.toast.open("Order submitted");
        },
      });
    },
    computePrice: function (price, quantity) {
      return parseFloat((price * quantity).toFixed(2));
    },
    computeSavings: function (originalPrice, price, quantity) {
      return parseFloat(((originalPrice - price) * quantity).toFixed(2));
    },
    createNewOrder: function () {
      for (let i = 0; i < 1; i++) {
        let newOrder = {};
        newOrder["customer"] = getDocRef(
          "users",
          this.$store.getters.getUserData.id
        );
        newOrder["business"] = this.getProducts[i].business;
        newOrder["fufilled"] = false;
        newOrder["listingID"] = getDocRef("items", this.getProducts[i].id);
        newOrder["quantity"] = this.getProducts[i].cartQuantity;

        let deliveryOptions = "";

        if (this.getProducts[i].delivery) {
          deliveryOptions += "Delivery";
        }

        if (this.getProducts[i].pickup) {
          if (deliveryOptions != "") {
            deliveryOptions += " / ";
          }
          deliveryOptions += "Self Pick-Up";
        }

        newOrder["deliveryMode"] = deliveryOptions;
        addOrder(newOrder);
      }
    },
  },
};
</script>
