<template lang="">
<v-app-bar class="d-flex flex-row justify-center">
    <v-img @click="router.push('/')" class="mx-2" src="@/assets/logo.png"></v-img>
    <v-spacer></v-spacer>
    <v-btn @click="router.push('/account/login')">들어가기</v-btn>
    <v-btn @click="router.push('/account/join')">가입하기</v-btn>
</v-app-bar>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style lang="">
    
</style>