<template>
  <v-app>
    <v-container>
      <v-row align="start" justify="center">
        <h1 class="display-3 font-weight-bold my-5">CaveWall of Honor</h1>
        <v-container>
          <section class="headline">
            Ready to show off all those natural looks and get on the prestegious
            CaveWall of honor? Then be sure to use #coronacaveman on your next
            social media post and you’ll be entered to become our Featured
            Caveman or Cavewoman of the Day! There’s no limit to the amount of
            submissions, so each day is another chance to win! Winners will be
            notified by 8pm daily, and asked to send a picture to be featured
            starting the next day.
          </section>
        </v-container>
        <v-col v-for="(person, index) of people" v-bind:key="index" cols="12" sm="4" md="3" my-1>
          <Headshot :person="person"></Headshot>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Headshot from "./Headshot";
import { people } from "../cavewallPictures.js";
export default {
  name: "CaveWall",
  data: () => ({
    people: people
  }),
  components: {
    Headshot
  }
};
</script>
