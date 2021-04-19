<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="product.image" height="200px" width="200px" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media-content">
        <p class="title is-4 mb-1">{{ product.name }}</p>
        <p class="title is-4 mb-0 has-text-success">{{ getPrice }}</p>
        <p>
          <strike>{{ getOriginalPrice }}</strike>
        </p>
      </div>
      <div class="content">
        <p class="block-with-text">{{ product.description }}</p>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" @click="isModalActive = true">More Info</a>
      <a class="card-footer-item" @click="addToCart" v-if="isCustomer"
        >Add to Cart</a
      >
    </footer>
    <b-modal v-model="isModalActive" has-modal-card trap-focus>
      <template>
        <product-modal-component
          :product="product"
          @close="isModalActive = false"
          @addToCart="addToCart"
        />
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    ...mapGetters(["isCustomer"]),
    getPrice: function () {
      return "$" + parseFloat(this.product.price).toFixed(2);
    },
    getOriginalPrice: function () {
      return "$" + parseFloat(this.product.originalPrice).toFixed(2);
    },
  },
  methods: {
    addToCart: function () {
      this.$emit("addToCart", this.product);
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

.media-content {
  padding-bottom: 10px;
}

.card-content {
  height: 220px;
}

.content {
  height: 50px;
  max-height: 50px;
}

.block-with-text {
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
}

.block-with-text:before {
  content: "...";
  position: absolute;
  right: 0;
  bottom: 0;
}

.block-with-text:after {
  content: "";
  position: absolute;
  right: 0;
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  background: white;
}

.card {
  margin-bottom: 30px;
}
</style>
