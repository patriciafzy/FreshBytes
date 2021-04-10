<template>
  <div>
    <div class="container is-fluid">
      <section class="section">
        <div class="level">
          <figure class="media-left">
            <p class="image is-96x96">
              <img v-bind:src="product.picture" />
            </p>
          </figure>
          <div class="level-item has-text-centered">
            <div>
              <p>{{ product.name }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p>${{ product.price }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="counter" v-on:click="decrement(product)">-</div>
            <div>
              <p>{{ product.cartQuantity }}</p>
            </div>
            <div class="counter" v-on:click="increment(product)">+</div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p>${{ total }}</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <b-button rounded type="is-light" v-on:click="removeItem(product)"
                >Remove</b-button
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: function () {
    return {
      productData: { ...this.product },
    };
  },
  methods: {
    increment: function (product) {
      if (this.productData.cartQuantity >= product.quantity) {
        return alert(
          "The maximum number that can be added is " +
            this.productData.quantity +
            "!"
        );
      }
      this.productData.cartQuantity++;
      this.productData.total =
        this.productData.price * this.productData.cartQuantity;
      this.updateQuantity(this.productData, this.productData.cartQuantity);
    },
    decrement: function () {
      this.productData.cartQuantity -= 1;
      if (this.productData.cartQuantity < 0) {
        this.productData.cartQuantity = 0;
      }
      this.productData.total =
        this.productData.price * this.productData.cartQuantity;
      this.updateQuantity();
      if (this.productData.cartQuantity == 0) {
        this.removeItem(this.productData);
      }
    },
    updateQuantity: function () {
      this.$store.commit("setQuantity", {
        id: this.productData.id,
        newQuantity: this.productData.cartQuantity,
      });
    },
    removeItem: function () {
      this.$store.commit("removeFromCart", this.productData.id);
    },
  },
  computed: {
    total: function () {
      return (this.productData.cartQuantity * this.productData.price).toFixed(
        2
      );
    },
  },
};
</script>

<style scoped>
.counter {
  float: left;
  width: 20px;
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
</style>
