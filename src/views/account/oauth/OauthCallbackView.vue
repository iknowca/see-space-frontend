<template>
  <div>

  </div>
</template>
<script setup>
import {useRoute, useRouter} from 'vue-router'
import {onMounted} from 'vue'
import serverAxios from '@/util/axiosInstance/serverAxios'
import {useAccountStore} from '@/stores/account'

const route = useRoute()
const code = route.query.code
const provider = route.params.provider
const router = useRouter()
const accountStore = useAccountStore()

onMounted(() => {
  serverAxios.get(`/account/oauth/callback/${provider}?code=${code}`, {withCredentials: true})
      .then((res) => {
        serverAxios.defaults.headers.common['Authorization'] = `${res.data.accessToken}`
        accountStore.setLoginState(true)
        router.push('/')
      })
      .catch(() => {
        alert('로그인에 실패하였습니다.\n다시 시도해주세요.')
        router.push('/account/login')
      })
})
</script>