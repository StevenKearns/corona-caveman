<template>
  <v-app>
    <v-container>
      <v-row align="start" justify="center">
        <h1 class="display-3 font-weight-bold my-5">CaveWall of Honor</h1>
        <v-container>
          <section class="headline">
            Be sure to submit a picture with your caveman face on to any one of
            our social media platforms or
            <a
              href="mailto:coronacavemanchallenge@gmail.com"
            >contact us</a> to
            be featured on the prestigious CaveWall of Honor!
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
