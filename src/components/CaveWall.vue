<template>
  <v-app>
    <v-container>
      <h1 class="display-3 font-weight-bold my-5 text-center">CaveWall of Honor</h1>
      <v-container>
        <section class="headline">
          Ready to show off all those natural looks and get on the prestegious
          CaveWall of honor? Then be sure to use #coronacaveman on your next
          social media post and you’ll be entered to become our Featured Caveman
          or Cavewoman of the Day! There’s no limit to the amount of
          submissions, so each day is another chance to win! Winners will be
          notified by 8pm daily, and asked to send a picture to be featured
          starting the next day.
        </section>
      </v-container>
      <PersonCategory :people="topDonors" title="Top Donors"></PersonCategory>
      <PersonCategory :people="superlatives" title="Superlatives"></PersonCategory>
      <h3 class="display-0 font-weight-regular text-center mb-4">
        Think you can beat them? Be sure to post a picture and follow the entry
        rules above to take the throne!
      </h3>
      <PersonCategory :people="featured" title="Featured Cavepeople"></PersonCategory>
    </v-container>
  </v-app>
</template>

<script>
import PersonCategory from "./PersonCategory";
import { superlatives, topDonors, featured } from "../cavewallPictures.js";
export default {
  name: "CaveWall",
  data: () => ({
    superlatives: superlatives,
    topDonors: topDonors,
    featured: featured
  }),
  components: {
    PersonCategory
  }
};
</script>
