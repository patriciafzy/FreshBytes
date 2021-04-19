<template>
  <div>
    <b-table :data="paginatedItems" :columns="columns" />
    <b-pagination
      :total="total"
      :per-page="perPage"
      v-model="current"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {
      columns: [
        { field: "orderId", label: "Order ID" },
        { field: "productName", label: "Product" },
        { field: "originalPrice", label: "Original Price" },
        { field: "price", label: "Price" },
        { field: "quantity", label: "Quantity" },
      ],
      current: 1,
      perPage: 5,
    };
  },
  computed: {
    ...mapGetters(["getOrders"]),
    total: function () {
      return this.getOrders.length;
    },
    paginatedItems: function () {
      const pageNumber = this.current - 1;
      return this.getOrders.slice(
        pageNumber * this.perPage,
        (pageNumber + 1) * this.perPage
      );
    },
  },
};
</script>

<style></style>
