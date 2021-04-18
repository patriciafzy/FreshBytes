<template>
  <div class="home">
    <div class="start">
      <img src="@/assets/img/FreshBytesLogo.png" width="300px" height="300px" />
      <login-component v-if="loginMode" @signup="toggleLogin" />
      <signup-component
        v-if="!loginMode"
        @back="toggleLogin"
      ></signup-component>
      <div class="about-intro">Scroll down to learn more about us!</div>
    </div>
    <mission-component></mission-component>
  </div>
</template>

<script>
import LoginComponent from "@/components/login/LoginComponent";
import SignupComponent from "@/components/signup/SignupComponent";
import MissionComponent from "@/components/about/MissionComponent";

export default {
  components: {
    LoginComponent,
    SignupComponent,
    MissionComponent,
  },
  data: function () {
    return {
      loginMode: true,
    };
  },
  methods: {
    toggleLogin: function () {
      this.loginMode = !this.loginMode;
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  margin: 100px 0;
}

.start {
  height: 100vh;
}

.about-intro {
  margin-bottom: 30px;
}
</style>
