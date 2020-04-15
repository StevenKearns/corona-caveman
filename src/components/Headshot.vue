<template>
  <v-card class="mx-auto" color="grey lighten-4" max-width="400">
    <v-img :aspect-ratio="0.9" :src="person.image"></v-img>

    <v-card-text class="pt-2" style="position: relative;">
      <v-btn
        v-if="person.linkedin"
        :href="person.linkedin"
        absolute
        color="orange"
        class="white--text"
        fab
        small
        right
        top
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        v-if="person.instagram"
        :href="person.instagram"
        absolute
        color="orange"
        class="white--text"
        fab
        small
        right
        top
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <div class="font-weight-light title mb-2">{{ person.name }}</div>
      <h3
        v-if="person.description"
        class="display-1 font-weight-light orange--text mb-2"
      >{{ person.description }}</h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["person"]
};
</script>
