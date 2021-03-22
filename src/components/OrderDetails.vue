<template>
  <div id="orderDets">
    <h1>Your Past Orders</h1>
    <ul id="orderList">
      <li v-for="order in this.allOrders" :key="order.id">
        Order Number: {{ order.id }} | Item: {{ order.listingID.name }} |
        Quantity: {{ order.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    allOrders: {},
  },
  methods: {},
  created: function () {
    /*
        getUserOrdersWithListing(this.userType, this.userId).then(allOrders => {
            this.totalOrders = allOrders;
        });
        */
  },
};
</script>

<style scoped>
#orderDets {
  text-align: left;
  border: blue solid 2px;
}

#indiOrder {
  display: flex;
  flex-direction: row;

  border: red solid 2px;
}

#indiItem {
  text-align: left;
}
</style>
