<template>
  <v-card class="F-container" elevation="24" shaped tile>
    <v-form elevation="6" outlined shaped dark ref="form" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        label="Title"
        required
      ></v-text-field>
      <v-textarea
        name="input-7-1"
        filled
        label="Discription"
        auto-grow
      ></v-textarea>
      <div
        shaped
        tile
        v-for="(participant, i) in participants"
        :key="i"
        class="text-fields-row"
      >
        <v-text-field
          class="mr-2"
          label="Name of participant"
          v-model="participant.name"
        ></v-text-field>

        <v-text-field
          class="mr-2"
          label="Address of participant"
          v-model="participant.address"
        ></v-text-field>

        <v-btn @click="remove(i)" class="error"
          ><v-icon left> {{ icons.mdiDelete }} </v-icon>delete</v-btn
        >
      </div>

      <v-btn @click="add" class="primary mr-2">Add more participants</v-btn>
      <v-btn :disabled="false" color="success" class="mr-4 mx-2">
        Submit
      </v-btn>
    </v-form></v-card
  >
</template>

<script>
import { mdiDelete } from "@mdi/js";
export default {
  name: "AddCampaignPage",
  data() {
    return {
      name: "",
      icons: {
        mdiDelete,
      },
      participants: [
        {
          name: "",
          address: "",
        },
        {
          name: "",
          address: "",
        },
      ],
    };
  },
  methods: {
    add() {
      this.participants.push({
        name: "",
        address: "",
      });
      console.log(this.participants);
    },

    remove(index) {
      this.participants.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.F-container {
  margin: 20%;
  margin-top: 5%;
  padding: 2%;
}
.text-fields-row {
  display: flex;
}
</style>
