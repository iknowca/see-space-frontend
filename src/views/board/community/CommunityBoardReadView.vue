<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h2>글읽기</h2>
                    </v-card-title>
                    <v-card-text>
                        <h3>{{ title }}</h3>
                        <p>{{ content }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-btn @click="router.push('/board/community/modify/'+router.currentRoute.value.params.id)">수정</v-btn>
        <v-btn @click="deleteBoard()">삭제</v-btn>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import serverAxios from '@/util/axiosInstance/serverAxios'

const router = useRouter()
const title = ref('')
const content = ref('')
const getPost = () => {
    serverAxios.get('/board/' + router.currentRoute.value.params.id)
        .then((result) => {
            title.value = result.data.data.title
            content.value = result.data.data.content
        })
        .catch((error) => {
            console.log(error)
        })
}
const deleteBoard = () => {
    serverAxios.delete('/board/' + router.currentRoute.value.params.id)
        .then(() => {
            router.push('/board/community/list')
        })
        .catch((error) => {
            console.log(error)
        })
}

onMounted(() => {
    getPost()
})
</script>