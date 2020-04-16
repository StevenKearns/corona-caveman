<template>
  <v-app>
    <!-- TODO: 3 tabs one for pictures one for donations and one to contact us -->
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
          @click="
            $router.push({
              name: 'Donate'
            })
          "
        />
      </div>
      <v-menu v-if="mobileScreen" transition="slide-y-transition" offset-y bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon medium v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="page in pageRoutes"
            v-bind:key="page.route"
            @click="
              $router.push({
                name: page.route
              })
            "
          >
            <v-list-item-title>{{ page.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div v-else>
        <v-btn
          v-for="page in pageRoutes.slice(0, 2)"
          v-bind:key="page.route"
          outlined
          large
          color="white"
          class="mx-1"
          @click="
            $router.push({
              name: page.route
            })
          "
        >{{ page.text }}</v-btn>
        <v-btn
          large
          color="#996515"
          class="mx-1"
          @click="
            $router.push({
              name: 'Donate'
            })
          "
        >Donate</v-btn>
      </div>

      <v-spacer />

      <v-btn icon medium v-for="(item, index) of socialMedia" v-bind:key="index" :href="item.link">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

      <v-btn v-if="mediumScreen" class="my-1" href="mailto:coronacavemanchallenge@gmail.com" text>
        <span class="mr-2">Contact Us</span>
      </v-btn>
      <v-btn v-else icon medium href="mailto:coronacavemanchallenge@gmail.com">
        <v-icon>mdi-email</v-icon>
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
      // Icon refers to the name of Material Design Icons
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/corona_caveman"
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/harry.thecaveman"
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/corona.caveman/"
      }
      // {
      //   icon: "mdi-youtube",
      //   link: ""
      // }
    ],
    pageRoutes: [
      // Icon here refers to the name of Material Design Icons
      {
        text: "About Us",
        route: "About"
      },
      {
        text: "CaveWall of Honor",
        route: "CaveWall"
      },
      {
        text: "Donate",
        route: "Donate"
      }
    ]
  }),
  computed: {
    mobileScreen() {
      return this.$vuetify.breakpoint.xs;
    },
    mediumScreen() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  }
};
</script>
