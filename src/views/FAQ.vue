<template>
  <section class="home">
    <img src="@/assets/img/FreshBytesLogo.png" width="300px" height="300px" />
    <h1 class="title is-3" align="left">General FAQ</h1>
    <b-collapse
      class="card"
      animation="slide"
      v-for="(collapse, index) of collapses"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div class="card-header" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content" align="left">
          {{ collapse.text }}
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "What is the shelf life of the products?",
          text:
            "As the products are mainly excess/ugly items, it is best to consume within 3 days since the shelf life is limited. You can check More Info under each product for their individual shelf life!",
        },
        {
          title: "What if I receive a bad product?",
          text:
            "If you encounter any rotten products, please send us an email with photos at contact@freshbytes.com.sg by the next day and we will look into it immediately",
        },
        {
          title: "How is the environmental impact calculated?",
          text:
            "The environmental impact of each product is calculated based on Weight. For example, 100g of products is equivalent to 1 environmental point. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
