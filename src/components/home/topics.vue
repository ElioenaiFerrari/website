<template>
  <v-layout fluid wrap>
    <span :class="$theme.textTheme.title">
      Como a Juno <br />
      funciona?
    </span>
    <v-row justify="space-between" class="my-4" no-gutters>
      <v-col
        md="3"
        lg="3"
        sm="3"
        xl="3"
        v-for="item in topics"
        :key="item.id"
        cols="4"
        wrap
      >
        <v-avatar size="50" :color="$theme.accentColor">
          <span class="white--text headline">{{ item.id }}</span>
        </v-avatar>
        <span class="ml-4 subtitle text-justify  grey--text">{{
          item.description
        }}</span>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  computed: {
    topics() {
      return [
        {
          id: 1,
          description:
            'Você se cadastra na Juno e emite cobranças via boleto ou cartão de crédito e pode cobrar juros e multa após o vencimento.',
        },
        {
          id: 2,
          description:
            'Você se cadastra na Juno e emite cobranças via boleto ou cartão de crédito e pode cobrar juros e multa após o vencimento.',
        },
        {
          id: 3,
          description:
            'Você se cadastra na Juno e emite cobranças via boleto ou cartão de crédito e pode cobrar juros e multa após o vencimento.',
        },
      ];
    },
  },
};
</script>

<style></style>
