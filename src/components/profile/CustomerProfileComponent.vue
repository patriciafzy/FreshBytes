<template>
  <div>
    <div class="bg-light is-fullheight">
      <section class="hero is-primary profile-cover is-bold">
        <div class="hero-body">
          <div class="container"></div>
        </div>
      </section>
    </div>
    <div class="orders">
      <h1 class="title is-3">Hello, {{ getUser.name }}!</h1>
      <h1 class="title is-4">Your Orders</h1>
    </div>
    <b-table :data="getOrders" :columns="columns" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getOrders"]),
    ...mapGetters(["getUser"]),
  },
  data: function () {
    return {
      columns: [
        { field: "orderId", label: "Order ID" },
        { field: "productId", label: "Product ID" },
        { field: "originalPrice", label: "Original Price" },
        { field: "price", label: "Price" },
        { field: "quantity", label: "Quantity" },
      ],
    };
  },
};
</script>

<style scoped>
.orders {
  margin-top: 40px;
}
</style>
