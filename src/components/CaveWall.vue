<template>
  <v-app>
    <v-container>
      <v-row align="start" justify="center">
        <h1 class="display-3 font-weight-bold my-5">CaveWall of Honor</h1>
        <v-container>
          <section class="headline">
            Ready to show off your all natural looks? Then be sure to submit
            your prehistoric look, along with your intended superlative, to any
            of our social media or
            <a
              href="mailto:coronacavemanchallenge@gmail.com"
            >contact us</a> for
            a chance at getting on the prestigious CaveWall of Honor!
            Superlatives will be created as submissions are received, or you can
            try knocking off a current leader!
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
