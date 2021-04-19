<template>
  <div class="card">
    <div class="media">
      <div class="media-left">
        <b-image class="is-64x64" :src="product.image" />
      </div>
      <div class="media-content">
        <div class="content">
          <strong>{{ product.name }}</strong>
          <p>
            {{ product.currentQuantity }} x ${{ product.price }} = ${{
              productPrice
            }}
            <br />
            <small>
              <i>Quantity Remaining: {{ quantityRemaining }}</i>
            </small>
            <br />
            <small>
              <i>Points: {{ productPoints }}</i>
            </small>
          </p>
          <a @click.prevent="addItemToCart" class="icon">
            <b-icon icon="plus" size="is-small" />
          </a>
          <a @click.prevent="reduceItemFromCart" class="icon">
            <b-icon icon="minus" size="is-small" />
          </a>
          <a @click.prevent="removeItemFromCart" class="icon">
            <b-icon icon="trash" size="is-small" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    quantityRemaining: function () {
      return this.product.quantity - this.product.currentQuantity;
    },
    productPrice: function () {
      return (
        parseFloat(this.product.price) * this.product.currentQuantity
      ).toFixed(2);
    },
    productPoints: function () {
      return this.product.points * this.product.currentQuantity;
    },
  },
  methods: {
    addItemToCart: function () {
      if (this.quantityRemaining <= 0) {
        this.$buefy.snackbar.open({
          message: "Cannot exceed quantity remaining!",
          type: "is-danger",
          position: "is-top",
          duration: 800,
        });
        return;
      }

      this.$store.commit("addItemToCart", this.product);
    },
    reduceItemFromCart: function () {
      if (this.product.currentQuantity <= 1) {
        this.$buefy.snackbar.open({
          message: "Cannot reduce quantity anymore!",
          type: "is-danger",
          position: "is-top",
          duration: 800,
        });
        return;
      }

      this.$store.commit("reduceItemFromCart", this.product);
    },
    removeItemFromCart: function () {
      this.$store.commit("removeItemFromCart", this.product);
    },
  },
};
</script>

<style scoped>
.card {
  padding: 20px;
}

.media-left {
  margin: auto 20px auto 0;
}

.icon {
  margin: 0 3px;
}
</style>
