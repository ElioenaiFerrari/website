<template>
  <v-parallax
    src="https://images.pexels.com/photos/725255/pexels-photo-725255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    contain
    class="mb-10"
  >
    <v-row align="center" justify="start">
      <v-col cols="6">
        <h1 class="text-left display-1 font-weight-bold mb-4">
          Descomplique sua emissão de cobranças com a Juno
        </h1>
        <h4 class="subheading font-weight-light">
          A Juno é <strong>fácil de usar</strong> e
          <strong>sem burocracia</strong>: você emite e acompanha suas cobranças
          em um só lugar e só paga por cobrança confirmada.
        </h4>
        <br />
        <v-btn :class="$theme.textTheme.button" :color="$theme.accentColor"
          >Comece agora</v-btn
        >
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style></style>
