<template lang="">
<v-app-bar class="d-flex flex-row justify-center">
    <v-img @click="router.push('/')" class="mx-2" src="@/assets/logo.png"></v-img>
    <v-spacer></v-spacer>
    <v-btn v-if="!loginState" @click="router.push('/account/login')">들어가기</v-btn>
    <v-btn v-if="!loginState" @click="router.push('/account/join')">가입하기</v-btn>
    <LogoutButton v-if="loginState"></LogoutButton>
</v-app-bar>
</template>
<script setup>
import { useAccountStore } from '@/stores/account'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { computed } from 'vue'
import LogoutButton from '@/components/account/login/LogoutButton.vue'
const router = useRouter()

const accountStore = useAccountStore()
const loginState = computed(() => accountStore.loginState)

onMounted(() => {
    accountStore.setLoginState(localStorage.getItem('loginState') === 'true' ? true : false)

    if( loginState.value) {
        accountStore.getAccountInfo()      
    }
})
</script>
<style lang="">
    
</style>