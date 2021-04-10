<template>
  <section>
    <b-sidebar
      type="is-light"
      :fullheight="true"
      :fullwidth="false"
      :overlay="true"
      :right="true"
      v-model="open"
    >
      <div class="p-1">
        <br />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bt3103-main-project.appspot.com/o/freshbytes%20logo.png?alt=media&token=cb78fdb8-7d74-4e7d-b4c3-44d7ef29515d"
          alt="FreshBytes"
        />
        <b-menu>
          <b-menu-list label="Your Cart">
            <div>
              <div v-for="product in getProducts" :key="product.id">
                <div>
                  <p style="float: left" class="image is-32x32">
                    <img v-bind:src="product.picture" />
                  </p>
                  <p style="float: left">
                    <strong> {{ product.name }} </strong>
                  </p>
                  <br />
                  <p style="float: left">
                    Quantity: {{ product.cartQuantity }}
                  </p>
                  <p style="float: right">
                    Total Price: ${{
                      computePrice(product.price, product.cartQuantity)
                    }}
                  </p>
                </div>
                <br />
              </div>
              <section class="section is-medium">
                <p style="float: right">
                  <strong> Grand Total: ${{ total }} </strong>
                </p>
              </section>
            </div>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  props: {
    toggle: Boolean,
  },
  methods: {
    toggleBasket: function () {
      this.open = true;
      setTimeout(() => (this.open = false), 1200);
    },
    computePrice: function (price, quantity) {
      return (price * quantity).toFixed(2);
    },
  },
  computed: {
    getProducts: function () {
      return this.$store.getters.getCart;
    },
    total() {
      return this.getProducts
        .map((product) =>
          this.computePrice(product.price, product.cartQuantity)
        )
        .map((price) => parseFloat(price))
        .reduce((x, y) => x + y, 0)
        .toFixed(2);
    },
  },
};
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
