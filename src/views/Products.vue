<template>
  <div>
    <section class="wrapper">
      <h2 class="title is-2">Featured Items</h2>
      <br />
      <div>
        <input type="text" v-model="search" placeholder="Search title.." />
      </div>
      <ul class="featured-items">
        <li
          v-for="product in filteredList"
          :key="product[1].id"
          class="productList"
        >
          <img :src="product[1].picture" height="200px" /><br />
          <p class="product-title">{{ product[1].name }}</p>
          <p>
            <i>${{ product[1].price }}</i>
          </p>
          <p>
            <i>Description: {{ product[1].description }}</i>
          </p>
          <button
            class="product-title"
            v-bind:id="product[0]"
            v-on:click.prevent="route($event)"
          >
            More Info
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      search: "",
    };
  },

  computed: {
    filteredList() {
      return this.products.filter((post) => {
        return post[1].name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    products() {
      return this.$store.state.products;
    },

    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["fetchCatagories"]),

    route: function (event) {
      this.id = event.target.getAttribute("id");
      this.$router.push({ name: "product", params: { id: this.id } });
    },
  },
};
</script>

<style>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-flow: row wrap;
  column-gap: 0.5%;
}

.product-image {
  max-height: 200px;
}
.product-title {
  font-weight: bold;
  color: black;
}

.productList {
  width: 100%;
  margin: 10px;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
  flex: 1 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
}
</style>
