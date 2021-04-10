<template>
  <div>
    This is a customer profile page that is tempoarily broken.... Error 404 that
    kind of stuff.
  </div>
  <!-- <div v-if="userDetails">
    <h1 class="title is-3">{{ userDetails.name }}'s Profile Page</h1>
    <side-bar v-on:change-profile="changeDetails"></side-bar>
    <div id="content">
      <user-details
        v-bind:userDetails="userData"
        v-bind:isCustomer="isCustomer"
        v-bind:userId="userId"
        v-if="toShow.details"
      ></user-details>
      <order-details
        v-bind:allOrders="allOrders"
        v-if="toShow.orders"
      ></order-details>
    </div>
  </div> -->
</template>

<script>
// import SideBar from "../SideBar.vue";
// import OrderDetails from "../OrderDetails.vue";
// import UserDetails from "../UserDetails.vue";

// export default {
//   data() {
//     return {
//       isCustomer: Boolean,
//       allOrders: [],
//       toShow: {
//         details: true,
//         orders: false,
//         dashboard: false,
//       },
//       userId: String,
//     };
//   },
//   computed: {
//     userData: function () {
//       return this.$store.getters.getUserData;
//     }
//   },
//   methods: {
//     /**
//      * Changes the displayed element in the profile page based on a click on the sidebar
//      */
//     changeDetails: function (event) {
//       for (const property in this.toShow) {
//         this.toShow[property] = property == event ? true : false;
//       }
//     },
//   },
//   components: {
//     SideBar,
//     UserDetails,
//     OrderDetails,
//   },
// };
</script>

<style scoped>
#content {
  margin-left: 200px;
  padding: 1px 16px;
}
</style>
