<template>
  <v-row justify="center" class="ma-4">
    <v-col cols="12" sm="10" md="8">
      <v-card class="pa-6 mt-8">
        <v-card-title>
          <h1>내 정보</h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="accountInfo.email" label="email" required variant="outlined"
                            disabled></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="accountInfo.nickname" label="nickname" required variant="outlined" disabled></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="password" label="password" required variant="outlined" type="password"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="passwordValidation" label="password validate" required variant="outlined" type="password"></v-text-field>
            </v-col>
            <v-col>
              <v-row cols="12">
                <v-col class="d-flex justify-center">
                  <v-btn color="primary" @click="updatePassword">수정</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex justify-center">
                  <v-btn color="primary" @click="router.push('/account/mypage')">취소</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>

import {computed, ref} from "vue";
import { useRouter } from 'vue-router';
import {useAccountStore} from "@/stores/account";
import serverAxios from "@/util/axiosInstance/serverAxios";

const accountStore = useAccountStore()
const accountInfo = computed(() => accountStore.account)

const password = ref('')
const passwordValidation = ref('')
const router = useRouter()

const updatePassword = () => {
  if (password.value !== passwordValidation.value) {
    alert('비밀번호가 일치하지 않습니다.')
    return
  }

  serverAxios.patch('/account/password', {type: "local", password: password.value})
      .then((res) => {
        if (res.data.status === "success") {
          alert('비밀번호 수정에 성공하였습니다.')
          router.push('/account/mypage')
        } else {
          alert('비밀번호 수정에 실패하였습니다.')
        }
      })
      .catch(() => {
        alert('비밀번호 수정에 실패하였습니다.')
      })
}

</script>