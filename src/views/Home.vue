<template>
  <div class="home">
    <img src="../assets/img/FreshBytesLogo.png" height="400px" width="400px" />
    <div v-if="isLoggedIn">
      <h1 class="title is-3">Welcome {{ getUsername }}!</h1>
    </div>
    <section class="section is-small">
      <div>
        <b-carousel>
          <b-carousel-item v-for="slide in slideshow" :key="slide">
            <section :class="`hero is-small`">
              <div class="hero-body has-text-centered">
                <img :src="slide" height="800px" width="800px" />
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </div>
    </section>
    <section class="section is-medium" align="left">
      <h1 class="title">Best-Selling Items</h1>
      <p>Check out this week's top deals!</p>
    </section>
  </div>
</template>

<script>
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slide2.png";

export default {
  name: "Home",
  methods: {
    toggleLogin: function () {
      this.$store.commit("toggleLogin");
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    getUsername: function () {
      return this.$store.getters.getUsername;
    },
  },

  data() {
    return {
      slideshow: [slide1, slide2],
    };
  },
};
</script>
