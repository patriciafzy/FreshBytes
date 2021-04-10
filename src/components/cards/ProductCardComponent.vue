<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="product.picture" height="200px" width="200px" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content">
        <p class="title is-4">{{ product.name }}</p>
        <p class="subtitle is-6">{{ getPrice }}</p>
      </div>
      <div class="content">
        <p>{{ product.description }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="isModalActive = true">More Info</a>
      <a class="card-footer-item" @click="addToCart">Add to Cart</a>
    </footer>
    <b-modal v-model="isModalActive" has-modal-card trap-focus>
      <template>
        <product-modal-component
          :product="product"
          @close="isModalActive = false"
        />
      </template>
    </b-modal>
  </div>
</template>

<script>
import ProductModalComponent from "./ProductModalComponent.vue";

export default {
  components: {
    ProductModalComponent,
  },
  props: {
    product: Object,
  },
  data: function () {
    return {
      isModalActive: false,
    };
  },
  computed: {
    getPrice: function () {
      return "$" + this.product.price.toFixed(2);
    },
  },
  methods: {
    addToCart: function () {
      this.$store.commit("addToCart", this.product);
      this.$emit("addToCart");
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
  max-height: 200px;
  object-fit: cover;
}

.card {
  max-height: 600px;
  max-width: 300px;
}

.content {
  height: 50px;
}

.card {
  margin-bottom: 30px;
}
</style>
