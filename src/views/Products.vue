<template>
  <div class="products">
    <h2 class="title is-2">Featured Items</h2>
    <div class="columns is-centered">
      <div class="column is-narrow">
        <b-input v-model="search" placeholder="Search..."></b-input>
      </div>
    </div>
    <div class="container">
      <product-card-component
        v-for="product in filteredList"
        :key="product.id"
        :product="product"
        v-on:addToCart="toggleSideBarCart"
      />
    </div>
    <sidebar-cart ref="sidebar"></sidebar-cart>
  </div>
</template>

<script>
import { getProducts } from "../database/queries.js";
import ProductCardComponent from "../components/cards/ProductCardComponent.vue";
import SidebarCart from "../components/SidebarCart.vue";

export default {
  components: {
    ProductCardComponent,
    SidebarCart,
  },
  data() {
    return {
      search: "",
      products: [],
    };
  },
  created: function () {
    getProducts().then((snapshot) => {
      this.products = snapshot.docs.map((doc) => {
        let data = doc.data();
        data["id"] = doc.id;
        return data;
      });
    });
  },
  computed: {
    filteredList: function () {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    toggleSideBarCart: function () {
      this.$refs.sidebar.toggleBasket();
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 0 0.5em;
}
</style>
