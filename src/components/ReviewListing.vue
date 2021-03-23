<template>
  <div>
    <h4>Review Listing</h4>
    <img v-bind:src="items.picture" />
    <p>Name: {{ items.name }}</p>
    <p>Description: {{ items.description }}</p>
    <p>Category: {{ items.category }}</p>
    <p>Best Before: {{ items.expiryDate }}</p>
    <p>Original Price: ${{ items.originalPrice }}</p>
    <p>Listed Price : ${{ items.price }}</p>
    <p>Quantity: {{ items.quantity }}</p>
    <p>Delivery Options: {{ items.delivery.join() }}</p>
    <p>Dietary Restriction: {{ items.dietary.join() }}</p>

    <button type="button" v-on:click="$router.go(-1)">Modify Listing</button>

    <button type="button" v-on:click="sendListing()">Create Listing!</button>
  </div>
</template>

<script>
import { addListing } from "../database/queries.js";

export default {
  props: {
    items: Object,
  },
  methods: {
    sendListing: function () {
      addListing(this.items);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
