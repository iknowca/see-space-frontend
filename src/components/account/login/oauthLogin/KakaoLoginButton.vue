<template>
    <v-btn @click="getUrl('kakao')" icon variant="plain">
        <v-avatar>
            <v-img :src="require('../../../../assets/icons/kakao.svg')"></v-img>
        </v-avatar>
    </v-btn>
</template>
<script setup>
import serverAxios from '@/util/axiosInstance/serverAxios'
const getUrl = (provider) => {
    serverAxios.get('/account/oauth/url/' + provider)
    .then((res) => {
        location.href = res.data.url
    })
}

</script>