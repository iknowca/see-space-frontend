<template lang="">
    <div>
        <v-footer>
   
    <v-row justify="center" no-gutters>
      <v-container></v-container>
      <v-col cols="12">
        <div class="footerBanner ma-0 text-center d-flex align-center justify-center">
          <div>
          <h1>절찬리 취업중</h1>
          <h2  @click="router.push('/contact')">연락하러 가기<v-icon>mdi-arrow-right-bold-circle-outline</v-icon></h2>
        </div>
        </div>
      </v-col>
      <v-container></v-container>
      <v-col class="text-center" cols="12">
      이 페이지의 소스코드가 궁금하시다면
      </v-col>
      <div>
      <v-btn flat @click="openInNewTab('https://github.com/iknowca/see-space-frontend')">
        <strong>FRONTEND</strong>
        <v-icon><VueIcon/></v-icon>
      </v-btn>
      <v-btn flat @click="openInNewTab('https://github.com/iknowca/iknow-authentication-server')">
        <strong>AUTH SERVER</strong>
        <v-icon><SpringIcon/></v-icon>
      </v-btn>
      <v-btn flat @click="openInNewTab('https://github.com/iknowca/board-server')">
        <strong>BOARD SERVER</strong>
        <v-icon><SpringIcon/></v-icon>
      </v-btn>
      </div>
    
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>IKNOW</strong>
      </v-col>
    </v-row>
  </v-footer>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import VueIcon from '@/components/customIcon/VueIcon.vue';
import SpringIcon from '@/components/customIcon/SpringIcon.vue';
const router = useRouter()

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
</script>
<style scope>
a {
    color: inherit;
    text-decoration: none;
}

div.footerBanner {
    background-color: aliceblue;
    height: 150px;
    width: 100%;
    display: block;
}
</style>