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
              <p>{{ quantity }}</p>
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
  data() {
    return {
      quantity: this.product.quantity,
    };
  },
  props: {
    product: Object,
  },
  methods: {
    increment: function (product) {
      if (this.quantity >= product.stockQuantity) {
        return alert(
          "The maximum number that can be added is " +
            this.product.stockQuantity +
            "!"
        );
      }
      this.quantity += 1;
      this.product.quantity = this.quantity;
      this.product.total = this.product.price * this.product.quantity;
      this.updateQuantity(this.product, this.quantity);
    },
    decrement: function (product) {
      this.quantity -= 1;
      if (this.quantity < 0) {
        this.quantity = 0;
      }
      this.product.quantity = this.quantity;
      this.product.total = this.product.price * this.product.quantity;
      this.updateQuantity(this.product, this.quantity);
      if (this.quantity == 0) {
        this.removeItem(product);
      }
    },
    updateQuantity: function (product, quantity) {
      this.$store.commit("setQuantity", { id: product.id, value: quantity });
    },
    removeItem: function (product) {
      this.$store.commit("removeFromCart", { id: product.id });
    },
  },
  computed: {
    total() {
      return (this.product.quantity * this.product.price).toFixed(2);
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
