<template>
  <v-card class="login-page" elevation="24" shaped tile>
    <v-form elevation="6" outlined shaped dark ref="form" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-btn
        :disabled="false"
        v-on:click="connectToMetaMask"
        color="success"
        class="mr-4"
      >
        Login
      </v-btn>
    </v-form></v-card
  >
</template>

<script>
import Web3 from "web3";
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      name: "",
      web3: null,
      logged: false,
    };
  },
  methods: {
    ...mapActions(["setCurrentUser"]),

    connectToMetaMask: async function () {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        this.web3 = new Web3(window.ethereum);
        let accounts = await this.web3.eth.getAccounts();
        this.logged = true;
        this.setCurrentUser(accounts[0]);
        this.$router.push({ path: "/profilehome" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.login-page {
  margin: 20%;
  margin-top: 5%;
  padding: 5%;
}
</style>
