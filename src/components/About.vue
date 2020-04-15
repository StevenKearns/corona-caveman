<template>
  <v-app>
    <v-container>
      <v-row align="start" justify="center">
        <h1 class="display-4 font-weight-bold my-5">About Us</h1>
        <v-img
          alt="Corona Caveman"
          :src="require('../assets/corona_caveman_challenge.png')"
          contain
          height="500"
          aspect-ratio="1"
        />
        <section class="headline">
          100% of the money we raise goes directly to the Blessings in a
          Backpack charity - a non profit organization that provides good to
          elementary school children across America who might otherwise go
          hungry. We are a group of college students looking to make a
          difference in the difficult pandemic we currently live in, and bring
          people together during these times of isolation. With quarantine in
          effect it can be difficult to reach out, so we created a platform to
          help feed the children from the comfort and safety of your own home.
          Why do we do it? To feed the kids, and ensure that childhood hunger
          becomes a thing of the past.
        </section>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "About",

  data: () => ({})
};
</script>
