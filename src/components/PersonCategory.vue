<template>
  <div>
    <h2 v-if="title" class="display-1 font-weight-bold text-center">{{ title }}</h2>
    <v-row align="start" justify="center">
      <v-col v-for="(person, index) of people" v-bind:key="index" cols="12" sm="4" md="3" my-1>
        <Headshot :person="person"></Headshot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Headshot from "./Headshot";
export default {
  props: ["people", "title"],
  components: {
    Headshot
  }
};
</script>
