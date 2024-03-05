<template>
  <v-app-bar class="d-flex flex-row justify-center">
    <v-img @click="router.push('/')" class="mx-2" src="@/assets/logo.png"></v-img>
    <v-spacer></v-spacer>
    <v-btn v-if="!loginState" @click="router.push('/account/login')">들어가기</v-btn>
    <v-btn v-if="!loginState" @click="router.push('/account/join')">가입하기</v-btn>
    <v-btn @click="router.push('/board/community/list')">커뮤니티</v-btn>
    <v-menu v-if="loginState">
      <template v-slot:activator="{ props }">
        <v-btn v-if="loginState" v-bind="props">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="router.push('/account/mypage')">내 정보</v-list-item>
        <v-list-item @click="logout">로그아웃</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script setup>
import {useAccountStore} from '@/stores/account'
import {useRouter} from 'vue-router'
import {onMounted} from 'vue'
import {computed} from 'vue'
import serverAxios from '@/util/axiosInstance/serverAxios'

const router = useRouter()

const accountStore = useAccountStore()
const loginState = computed(() => accountStore.loginState)

onMounted(() => {
  accountStore.setLoginState(localStorage.getItem('loginState') === 'true' ? true : false)

  if (loginState.value) {
    accountStore.getAccountInfo()
  }
})

const logout = () => {
  accountStore.setLoginState(false)
  serverAxios.delete('/account/logout')
      .then(() => {
        delete serverAxios.defaults.headers.common['Authorization']
        accountStore.setLoginState(false)
      })
      .catch(() => {
        alert('로그아웃에 실패하였습니다.')
      })
  router.push('/')
}
</script>
<style lang="">

</style>