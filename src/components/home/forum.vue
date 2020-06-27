<template>
  <v-layout fluid row wrap column>
    <v-row
      v-for="item in forum"
      :key="item.id"
      cols="12"
      justify="space-between"
      class="my-10"
      :class="{ 'flex-row-reverse': item.id % 2 === 0 }"
    >
      <v-col cols="6">
        <span class="title orange--text">
          {{ item.title }}
        </span>
        <br />
        <span class="overline grey--text">
          {{ item.subtitle }}
        </span>
      </v-col>
      <v-col cols="6">
        <v-parallax :src="item.image" height="350" />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  computed: {
    forum() {
      return [
        {
          id: 1,
          title: 'A Juno é para todos',
          subtitle:
            'A Juno é a melhor solução para você receber dos seus clientes, sem burocracia - não importa se você é pessoa física, MEI ou empresa.',
          image:
            'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
        {
          id: 2,
          title: 'Receba sempre em dia',
          subtitle:
            'Com a Juno, você emite cobranças e recebe pagamentos sem burocracia e ainda reduz a inadimplência dos seus clientes enviando lembretes automáticos de vencimento.',
          image:
            'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
      ];
    },
  },
};
</script>

<style></style>
