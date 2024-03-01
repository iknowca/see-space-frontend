<template lang="">
    <v-btn @click="logout">로그아웃</v-btn>
</template>
<script setup>
import { useAccountStore } from '@/stores/account'
import serverAxios from '@/util/axiosInstance/serverAxios'
import { useRouter } from 'vue-router'

const router = useRouter()
const accountStore = useAccountStore()
const logout = () => {
    accountStore.setLoginState(false)
    serverAxios.delete('/account/logout')
    .then(() => {
        delete serverAxios.defaults.headers.common['Authorization']
    })
    .catch(() => {
        alert('로그아웃에 실패하였습니다.')
    })
    router.push('/')
}
</script>
<style lang="">
    
</style>