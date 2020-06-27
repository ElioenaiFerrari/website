<template>
  <v-toolbar :elevation="2" id="header">
    <!-- <v-app-bar-nav-icon /> -->
    <v-toolbar-title>
      <span :class="$theme.textTheme.header">Juno</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn :class="$theme.textTheme.button" :color="$theme.accentColor">
      Comece agora
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style>
#header {
  background: #2b2b2b;
}
</style>
