<template>
  <span>
    <h3 v-if="person.award" class="text-center mb-2">{{ person.award }}</h3>
    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
      <v-img :aspect-ratio="0.9" :src="person.image"></v-img>

      <v-card-text class="pt-2" style="position: relative;">
        <v-btn
          v-if="person.linkedin"
          :href="person.linkedin"
          absolute
          color="#0C2E5F"
          class="white--text"
          fab
          small
          right
          top
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <div class="font-weight-light title">{{ person.name }}</div>
        <h3 v-if="person.title" class="font-weight-light blue--text mt-2">{{ person.title }}</h3>
      </v-card-text>
    </v-card>
  </span>
</template>

<script>
export default {
  props: ["person"]
};
</script>
