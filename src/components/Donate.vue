<template>
  <v-app>
    <div
      data-widget-src="https://secure.givelively.org/donate/blessings-in-a-backpack-inc/corona-caveman-challenge?ref=sd_widget"
      id="give-lively-widget"
      class="gl-branded-donation-widget"
    ></div>
  </v-app>
</template>

<script>
export default {
  name: "Donate",

  mounted() {
    let gl = document.createElement("script");
    gl.src =
      "https://secure.givelively.org/widgets/branded_donation/blessings-in-a-backpack-inc/corona-caveman-challenge.js";
    document.getElementsByTagName("head")[0].appendChild(gl);
  }
};
</script>
