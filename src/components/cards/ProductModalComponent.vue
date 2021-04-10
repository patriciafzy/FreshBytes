<template>
  <div class="modal-card" style="width: auto">
    <div class="modal-card-head">
      <p class="modal-card-title">{{ product.name }}</p>
      <button type="button" class="delete" @click="$emit('close')" />
    </div>
    <div class="modal-card-body">
      <img :src="product.picture" />
      <div class="details">
        <p>Price: ${{ price }}</p>
        <p>Original Price: ${{ originalPrice }}</p>
        <p>
          You will save
          <b> ${{ priceSaved }} </b>!
        </p>
        <p>Description: {{ product.description }}</p>
        <p>
          <em
            ><b>{{ product.quantity }}</b> left in stock</em
          >
        </p>
      </div>
      <div class="other-details">
        <h4 class="title is-4">Other Details:</h4>
        <p>Expiry Date: {{ product.expiryDate }}</p>
        <p>Available for Delivery: {{ product.delivery }}</p>
        <p>Available for Pick Up: {{ product.pickup }}</p>
      </div>
      <footer class="modal-card-footer">
        <b-button class="is-primary">Add to Cart</b-button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    price: function () {
      return this.product.price.toFixed(2);
    },
    originalPrice: function () {
      return this.product.originalPrice.toFixed(2);
    },
    priceSaved: function () {
      return (this.product.originalPrice - this.product.price).toFixed(2);
    },
  },
};
</script>

<style scoped>
.modal-card-head {
  text-align: left;
}

img {
  max-width: 300px;
  max-height: 200px;
  object-fit: cover;
}

.details {
  margin: 20px 0;
}

.other-details {
  margin-bottom: 20px;
}
</style>
