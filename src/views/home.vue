<template>
  <v-container column>
    <Landing />
    <Topics />
    <Forum class="my-4" />
  </v-container>
</template>

<script>
import Topics from '@/components/home/topics';
import Landing from '@/components/home/landing';
import Forum from '@/components/home/forum';

export default {
  components: {
    Topics,
    Landing,
    Forum,
  },

  computed: {},
};
</script>

<style scoped></style>
