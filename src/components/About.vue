<template>
  <v-app>
    <v-container>
      <v-row align="end" justify="center">
        <h1 class="display-3 font-weight-bold my-5">About Us</h1>
        <v-container>
          <section class="headline my-5">
            100% of the money we raise goes directly to
            <a
              href="https://www.blessingsinabackpack.org/"
            >Blessings in a Backpack</a>, a nonprofit organization that provides food to elementary school
            children across America who might otherwise go hungry. We are a
            group of friends looking to make a difference during difficult times
            and bring people together while in isolation. With these goals in
            mind, we created a platform to help feed children from the comfort
            and safety of our own homes. Why do we do it? To feed the kids and
            ensure that childhood hunger becomes a thing of the past.
          </section>

          <v-row align="start" justify="center">
            <v-col
              v-for="(person, index) of contributors"
              v-bind:key="index"
              cols="12"
              sm="4"
              md="3"
              my-1
            >
              <Headshot :person="person"></Headshot>
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="6">
          <v-img
            alt="Corona Caveman"
            :src="require('../assets/corona_caveman_challenge.png')"
            contain
            height="300"
            aspect-ratio="1"
          />
        </v-col>
        <v-col cols="6">
          <a href="https://www.blessingsinabackpack.org/">
            <v-img
              alt="Blessings in a Backpack Logo"
              :src="require('../assets/Blessings_in_a_Backpack_logo.png')"
              contain
              height="300"
            />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Headshot from "./Headshot";
import { contributors } from "../cavewallPictures.js";
export default {
  name: "About",

  data: () => ({
    contributors: contributors
  }),
  components: {
    Headshot
  }
};
</script>
