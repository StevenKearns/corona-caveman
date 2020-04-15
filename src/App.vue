<template>
  <v-app>
    <!-- TODO: Donate now button, in header social media links, 3 tabs one for pictures one for donations and one to contact us -->
    <!-- <v-app-bar app color="#0C2E5F" dark shrink-on-scroll prominent>-->
    <v-app-bar app color="#0C2E5F" dark>
      <!-- <div class="d-flex align-center"></div> -->

      <div class="d-flex align-center">
        <v-img
          alt="Corona Caveman"
          class="mr-2"
          :src="require('./assets/corona_caveman_challenge.png')"
          contain
          width="50"
          aspect-ratio="1"
        />
      </div>

      <v-spacer />

      <v-btn outlined large color="white">About us</v-btn>
      <v-btn outlined large color="white">Cave wall of honor</v-btn>
      <v-btn outlined large color="white">Donate</v-btn>

      <v-spacer />

      <v-btn icon medium v-for="(item, index) of socialMedia" v-bind:key="index" :href="item.link">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

      <v-btn class="my-1" href="mailto:coronacavemanchallenge@gmail.com" text>
        <span class="mr-2">Contact Us</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    socialMedia: [
      // Icon here refers to the name of Material Design Icons
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/corona_caveman"
      }
      // {
      //   icon: "mdi-facebook",
      //   link: ""
      // },
      // {
      //   icon: "mdi-instagram",
      //   link: ""
      // }
      // {
      //   icon: "mdi-youtube",
      //   link: ""
      // }
    ]
  })
};
</script>
