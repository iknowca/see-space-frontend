<template>
    <v-container>
        <h1>게시판 목록</h1>
        <ul>
            <li v-for="(post, index) in boards" :key="index" @click="router.push('/board/community/'+post.id)">
                <h2>{{ post.title }}</h2>
            </li>
            <v-btn @click="router.push('/board/community/write')">글 쓰기</v-btn>
        </ul>
    </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import serverAxios from '@/util/axiosInstance/serverAxios'

const router = useRouter()
const boards = ref([])
const getBoards = () => {
    serverAxios.get('/board/list')
        .then((result) => {
            boards.value = result.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}

onMounted(() => {
    getBoards()
})
</script>