<template>
  <v-app app>
    <AppBar></AppBar>
    <v-main>
      <router-view/>
    </v-main>
    <FooterBar></FooterBar>
  </v-app>
</template>

<script setup>
import AppBar from './components/header/HeaderBar.vue'
import FooterBar from './components/footer/FooterBar.vue'

</script>

<style>
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
</style>