<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <div
      data-widget-src="https://secure.givelively.org/donate/blessings-in-a-backpack-inc/caveman-coronavirus-challenge?ref=sd_widget"
      id="give-lively-widget"
      class="gl-branded-donation-widget"
    ></div>
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
        link: ""
      },
      {
        icon: "mdi-facebook",
        link: ""
      },
      {
        icon: "mdi-instagram",
        link: ""
      },
      {
        icon: "mdi-youtube",
        link: ""
      }
    ]
  }),
  mounted() {
    let gl = document.createElement("script");
    gl.src =
      "https://secure.givelively.org/widgets/branded_donation/blessings-in-a-backpack-inc/caveman-coronavirus-challenge.js";
    document.getElementsByTagName("head")[0].appendChild(gl);
  }
};
</script>
