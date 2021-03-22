<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <img class="flex-col-2" :src="product[1].picture">
        <div class="flex-col-2" >
          <h2>{{ product[1].name }}</h2>
          <p>Price: ${{ product[1].price }}</p>
          <p>Original Price: ${{ product[1].originalPrice }}</p>
          <p>You will save <b>${{ (product[1].originalPrice - product[1].price).toFixed(2) }}</b>!</p>
          <p>Description: {{ product[1].description }}</p>
          <p><em><b>{{ product[1].quantity }}</b> left in stock</em></p>
          <h4>Other Details:</h4>
          <ul>
            <p>Expiry Date: {{ product[1].expiryDate }}</p>
            <p>Delivery Options: {{ product[1].delivery[0] }}</p> 
            <p v-if="product[1].delivery[1]">and {{ product[1].delivery[1] }}</p>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Product',

  props: {
    id: {
      type: String
    }
  },
  
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)[0]
    }
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
