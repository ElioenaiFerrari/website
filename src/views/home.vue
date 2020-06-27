<template>
  <v-container fluid wrap>
    <Landing
      src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      title="Descomplique sua emissão de cobranças com a Juno"
      subtitle="A Juno é fácil de usar e sem burocracia: você emite e acompanha suas cobranças em um só lugar e só paga por cobrança confirmada."
    />
    <Topics />
    <Forum class="my-4" />
    <Plans />
    <Landing
      src="https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      title="Gostou?"
      subtitle="Fazer seu cadastro na Juno é grátis e não leva nem 5 minutos."
    />
  </v-container>
</template>

<script>
import Topics from '@/components/home/topics';
import Landing from '@/components/home/landing';
import Forum from '@/components/home/forum';
import Plans from '@/components/home/plans';
// import Footer from '@/components/home/footer';

export default {
  components: {
    Topics,
    Landing,
    Forum,
    Plans,
  },

  computed: {},
};
</script>

<style scoped></style>
