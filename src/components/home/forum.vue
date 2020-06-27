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
      <v-col cols="12" md="6" sm="12">
        <span class="title orange--text">
          {{ item.title }}
        </span>
        <br />
        <span class="overline grey--text">
          {{ item.subtitle }}
        </span>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-img class="rounded" :src="item.image" height="400" />
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
            'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 2,
          title: 'Receba sempre em dia',
          subtitle:
            'Com a Juno, você emite cobranças e recebe pagamentos sem burocracia e ainda reduz a inadimplência dos seus clientes enviando lembretes automáticos de vencimento.',
          image:
            'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 3,
          title: 'Seu boleto com a cara do seu negócio',
          subtitle:
            'Personalize logo e cores em seus boletos, cobranças e notificações.',
          image:
            'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 4,
          title: 'Excelência em atendimento',
          subtitle:
            'Para nós, todos os clientes são igualmente importantes. Nosso atendimento é personalizado e humano: nada de sistemas ou robôs que não entendem as suas necessidades.',
          image:
            'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 5,
          title: 'Preços transparentes',
          subtitle:
            'Não temos taxa de adesão, nem mensalidade. Você só paga a taxa quando a sua cobrança for confirmada.',
          image:
            'https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
      ];
    },
  },
};
</script>

<style></style>
