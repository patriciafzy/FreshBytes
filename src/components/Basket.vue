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
  props: {
    product: Object,
  },
  methods: {
    increment: function (product) {
      if (this.product.cartQuantity >= product.quantity) {
        return alert(
          "The maximum number that can be added is " +
            this.product.quantity +
            "!"
        );
      }
      this.product.cartQuantity++;
      this.product.total = this.product.price * this.product.cartQuantity;
      this.updateQuantity(this.product, this.product.cartQuantity);
    },
    decrement: function () {
      this.product.cartQuantity -= 1;
      if (this.product.cartQuantity < 0) {
        this.product.cartQuantity = 0;
      }
      this.product.total = this.product.price * this.product.cartQuantity;
      this.updateQuantity();
      if (this.product.cartQuantity == 0) {
        this.removeItem(this.product);
      }
    },
    updateQuantity: function () {
      this.$store.commit("setQuantity", {
        id: this.product.id,
        newQuantity: this.product.cartQuantity,
      });
    },
    removeItem: function () {
      this.$store.commit("removeFromCart", this.product.id);
    },
  },
  computed: {
    total: function () {
      return (this.product.cartQuantity * this.product.price).toFixed(2);
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
