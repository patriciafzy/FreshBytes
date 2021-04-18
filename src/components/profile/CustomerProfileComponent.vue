<template>
  <div>
    Customer Profile Page
    <div v-for="order in getOrders" :key="order.id">
      {{ order }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getOrders"]),
  },
};
</script>

<style></style>
