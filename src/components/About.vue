<template>
  <v-app>
    <v-container>
      <v-row align="end" justify="center">
        <h1 class="display-3 font-weight-bold my-5 text-center">About Us</h1>
        <v-container>
          <section class="headline">
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
          <PersonCategory class="my-6" :people="contributors"></PersonCategory>
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
import PersonCategory from "./PersonCategory";
import { contributors } from "../cavewallPictures.js";
export default {
  name: "About",

  data: () => ({
    contributors: contributors
  }),
  components: {
    PersonCategory
  }
};
</script>
