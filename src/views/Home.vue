<template>
  <div class="home">
    <img src="../assets/img/freshbytes.png" height="400px" width="400px" />
    <!-- <button v-on:click="toggleLogin">Toggle Login</button>
    <h4>{{ isLoggedIn }}</h4> -->
    <section class="section is-small">
      <login v-if="!isLoggedIn" />
      <div v-else>
        <h1 class="title is-3">Welcome {{ getUsername }}!</h1>
        <!-- <b-button class="is-primary" rounded v-on:click="logout">Logout</b-button> -->
      </div>
    </section>
    <section class="section is-small">
      <div>
        <b-carousel>
          <b-carousel-item v-for="slide in slideshow" :key="slide">
            <section :class="`hero is-small`">
              <div class="hero-body has-text-centered">
                <img :src="slide.img" height="800px" width="800px" />
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
import Login from "../components/Login.vue";
import slide1 from "../assets/img/slide1.png";
import slide2 from "../assets/img/slide2.png";

export default {
  name: "Home",
  components: {
    Login,
  },
  methods: {
    toggleLogin: function () {
      this.$store.commit("toggleLogin");
    },
    logout: function () {
      this.$store.commit("logout");
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
      slideshow: [{ img: slide1 }, { img: slide2 }],
    };
  },
};
</script>
