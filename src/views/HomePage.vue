<template>
  <div class="home">
    <img src="@/assets/img/FreshBytesLogo.png" width="300px" height="300px" />
    <b-carousel class="carousel">
      <b-carousel-item v-for="(slide, i) in slides" :key="i">
        <figure class="image">
          <img :src="slide" />
        </figure>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
import slide1 from "@/assets/img/slide1.png";
import slide2 from "@/assets/img/slide2.png";

export default {
  data: function () {
    return {
      slides: [slide1, slide2],
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.carousel {
  width: 1000px;
  margin: auto;
  margin-top: 50px;
}
</style>
