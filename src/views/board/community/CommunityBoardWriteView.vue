<template lang="">
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        <h2>글쓰기</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="title" label="제목" required></v-text-field>
                            <v-textarea v-model="content" label="내용" required></v-textarea>
                            <v-btn @click="write">작성</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import { ref } from 'vue'
import serverAxios from '@/util/axiosInstance/serverAxios'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const content = ref('')
const write = () => {
    serverAxios.post('/board', {
        title: title.value,
        content: content.value
    })
        .then((res) => {
            router.push('/board/community/' + res.data.data.id)
        })
        .catch((error) => {
            console.log(error)
        })
}
</script>
<style lang="">
    
</style>