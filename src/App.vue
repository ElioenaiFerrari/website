<template>
  <v-app>
    <v-main>
      <Header />
      <v-container fluid>
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/header';

export default {
  name: 'App',
  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
.slide-enter-active {
  animation: slide-in 0.3s ease;
}
.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>
