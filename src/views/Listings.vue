<template>
  <div>
    Your Listings!!
    <b-table
      :data="listings"
      :columns="columns"
      :empty="isEmpty"
      scrollable
      striped
      narrowed
    />
  </div>
</template>

<script>
import { getListings } from "../database/queries.js";

export default {
  data: function () {
    return {
      isEmpty: false,
      listings: [],
      columns: [
        { field: "name", label: "Name" },
        { field: "description", label: "Description" },
        { field: "quantity", label: "Quantity" },
        { field: "price", label: "Price" },
        { field: "originalPrice", label: "Original Price" },
        { field: "category", label: "Category" },
        { field: "expiryDate", label: "Expiry Date" },
        { field: "dietary", label: "Dietary" },
        { field: "delivery", label: "Delivery" },
        { field: "pickup", label: "Pickup" },
        { field: "location", label: "Location" },
        { field: "removed", label: "Removed" },
        // { field: "business", label: "Business" },
        // { field: "picture", label: "Picture" },
      ],
    };
  },
  created: function () {
    const username = this.$store.getters.getUsername;
    getListings(username).then((snapshot) => {
      if (snapshot.docs.length == 0) {
        this.isEmpty = true;
        return;
      }

      this.listings = snapshot.docs.map((x) => x.data());
    });
  },
  methods: {
    toProperCase: function (str) {
      return str.replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
      );
    },
  },
};
</script>

<style></style>
