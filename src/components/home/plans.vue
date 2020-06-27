<template>
  <v-layout fluid wrap class="my-4">
    <v-row>
      <v-col cols="12" md="4" sm="12" v-for="item in plans" :key="item.id">
        <v-card color="grey lighten-3" :elevation="0" min-height="500">
          <v-img :src="item.image" cover />
          <v-card-title class="headline-3">
            {{ item.title }}
          </v-card-title>
          <v-card-content>
            <v-card-subtitle class="title  orange--text">
              {{ `R$ ${item.price}` }}
            </v-card-subtitle>
            <v-list color="grey lighten-3">
              <v-list-item v-for="topics in item.subtitles" :key="topics">{{
                topics
              }}</v-list-item>
            </v-list>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  computed: {
    plans() {
      return [
        {
          id: 1,
          title: 'Boleto',
          subtitles: ['Parcelamentos em até 24x', 'Boletos registrados'],
          price: 3.9,
          image:
            'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 2,
          title: 'Cartão de crédito',
          subtitles: [''],
          price: 4.9,
          image:
            'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
        {
          id: 3,
          title: 'Transferência',
          subtitles: [
            'Por transferência bancária',
            'Prazo de transferência de 1 dia útil',
          ],
          price: 4.9,
          image:
            'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        },
      ];
    },
  },
};
</script>

<style></style>
