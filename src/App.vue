<template>
  <v-app>
    <v-app-bar app color="green" elevation="6" outlined shaped dark>
      <v-btn
        to="/login"
        class="btn loginBtn float-left"
        color="primary"
        elevation="2"
      >
        Login</v-btn
      >
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
};
</script>
<style scoped>
.loginBtn {
  margin-left: auto;
}
</style>
