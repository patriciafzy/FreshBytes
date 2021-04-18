<template>
  <div>
    <home-page v-if="isLoggedIn" />
    <landing-page v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomePage from "@/views/HomePage";
import LandingPage from "@/views/LandingPage";

export default {
  components: {
    HomePage,
    LandingPage,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
    logout: function () {
      this.$store.commit("logout");
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style></style>
