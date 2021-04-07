<template>
  <div>
    <h1 class="title is-4">Review Listing</h1>
    <img v-bind:src="items.picture" />
    <p>Name: {{ items.name }}</p>
    <p>Description: {{ items.description }}</p>
    <p>Category: {{ items.category }}</p>
    <p>Best Before: {{ items.expiryDate }}</p>
    <p>Original Price: ${{ items.originalPrice }}</p>
    <p>Listed Price : ${{ items.price }}</p>
    <p>Quantity: {{ items.quantity }}</p>
    <br />
    <p>Delivery Options:</p>
    <p>Delivery: {{ items.delivery }}</p>
    <p>Pick up: {{ items.pickup }}</p>
    <br />
    <p>Location: {{ items.location }}</p>
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
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped></style>
