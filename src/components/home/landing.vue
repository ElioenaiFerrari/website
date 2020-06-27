<template>
  <v-layout fluid row wrap column>
    <v-parallax :src="src" cover class="mb-10 rounded">
      <v-row align="center" justify="start">
        <v-col cols="6">
          <h1 class="text-left display-1 font-weight-bold mb-4">
            {{ title }}
          </h1>
          <h4 class="subheading font-weight-light">
            {{ subtitle }}
          </h4>
          <br />
          <v-btn
            @click="this.$emit('click')"
            :class="$theme.textTheme.button"
            :color="$theme.accentColor"
            >Comece agora</v-btn
          >
        </v-col>
      </v-row>
    </v-parallax>
  </v-layout>
</template>

<script>
export default {
  props: ['src', 'title', 'subtitle'],
};
</script>

<style></style>
