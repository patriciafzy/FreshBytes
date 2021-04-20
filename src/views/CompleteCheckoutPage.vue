<template>
  <div class="cart">
    <h1 class="title has-text-centered">
      Thank you for shopping at Fresh Bytes!
    </h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addOrder, reduceItems } from "@/firebase/database";

export default {
  computed: {
    ...mapGetters(["getCart", "getUsername", "getUserId"]),
  },
  created: function () {
    if (this.getCart.length === 0) {
      this.$router.push({ name: "cart" });
      return;
    }
    this.checkout();
  },
  methods: {
    checkout: async function () {
      const checkoutData = this.getCart.map((product) => {
        return {
          productId: product.id,
          productName: product.name,
          quantity: product.currentQuantity,
          price: product.price,
          originalPrice: product.originalPrice,
          username: this.getUsername,
          business: product.business,
          points: product.points,
        };
      });

      // upload order
      await addOrder(checkoutData, this.getUserId);

      // remove qty from items
      await reduceItems(this.getCart);

      this.$store.commit("clearCart");
    },
  },
};
</script>

<style scoped>
.cart {
  width: 80%;
  margin: auto;
  margin-top: 50px;
}
</style>
