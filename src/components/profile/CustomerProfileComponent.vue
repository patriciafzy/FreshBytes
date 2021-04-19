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
      <orders-table-component></orders-table-component>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OrdersTableComponent from "@/components/utils/OrdersTableComponent";

export default {
  components: {
    OrdersTableComponent,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  created: function () {
    this.$store.dispatch("bindUserOrders");
  },
};
</script>

<style scoped>
.orders {
  margin-top: 40px;
}
</style>
