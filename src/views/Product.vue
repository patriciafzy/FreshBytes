<template>
  <div>
    <section class="wrapper">
      <div class="columns">
        <div class="column">
          <img :src="product[1].picture" />
          <h1 class="title is-4">{{ product[1].name }}</h1>
          <h1 class="title is-4">{{ "$" + displayprice }}</h1>
          <p>
            You will save
            <b> ${{ price }} </b>!
          </p>
        </div>
        <div class="column" align="left">
          <br />
          <h1 class="title is-5">Item Description</h1>
          <p>{{ product[1].description }}</p>
          <br /><br />
          <h1 class="title is-5">More Details:</h1>
          <ul>
            <p>Expiry Date: {{ product[1].expiryDate }}</p>
            <p>Available for Delivery: {{ product[1].delivery }}</p>
            <p>Available for Pick Up: {{ product[1].pickup }}</p>
          </ul>
          <p>
            <em
              ><b>{{ product[1].quantity }}</b> left in stock</em
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)[0],
    };
  },
  computed: {
    price: function () {
      return (this.product[1].originalPrice - this.product[1].price).toFixed(2);
    },
    displayprice: function () {
      return this.product[1].price.toFixed(2);
    },
  },
};
</script>

<style>
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col-2 {
  width: 50%;
}
</style>
