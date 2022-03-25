<template>
  <div>
    <v-alert class="mt-4" dismissible type="success"
      >You are logged in with account : {{ getCurrentUser }}
    </v-alert>
    <v-card class="container mx-auto my-auto">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>Deployed Voting campaigns</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
        <v-btn
          to="/addcampaign"
          class="btn loginBtn float-left"
          color="indigo"
          elevation="2"
        >
          start your voting campaign</v-btn
        >
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group v-model="selected" active-class="pink--text">
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title">
              <template>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.subtitle"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="item.headline"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-btn
                  class="ma-1"
                  :loading="loading"
                  :disabled="loading"
                  color="secondary"
                  @click="loader = 'loading'"
                >
                  Participate
                </v-btn>
                <v-btn
                  class="ma-1"
                  :loading="loading2"
                  :disabled="true"
                  color="success"
                  @click="loader = 'loading2'"
                >
                  Vote
                  <template v-slot:loader>
                    <span>Loading...</span>
                  </template>
                </v-btn>
                <!-- <v-list-item-action>
                  <v-list-item-action-text
                    v-text="item.action"
                  ></v-list-item-action-text>
                </v-list-item-action> -->
              </template>
            </v-list-item>

            <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginPage",
  data: () => ({
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
    ],
  }),
  computed: mapGetters(["getCurrentUser"]),
};
</script>

<style scoped>
.container {
  margin: 20%;
  margin-top: 5%;
}
</style>
