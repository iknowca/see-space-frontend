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
              <v-text-field v-model="accountInfo.nickname" label="nickname" required variant="outlined"></v-text-field>
            </v-col>
            <v-col>
              <v-row cols="12">
                <v-col class="d-flex justify-center">
                  <v-btn color="primary" @click="updateAccountInfo">수정</v-btn>
                </v-col>
              </v-row>
              <v-row v-if="accountInfo.type==='local'">
                <v-col class="d-flex justify-center">
                  <v-btn color="primary" @click="router.push('/account/mypage/password')">비밀번호 수정</v-btn>
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

import {useAccountStore} from "@/stores/account";
import {computed} from "vue";
import serverAxios from "@/util/axiosInstance/serverAxios";
import {useRouter} from "vue-router";

const accountStore = useAccountStore()
const accountInfo = computed(() => accountStore.account)
const router = useRouter()

const updateAccountInfo = () => {
  serverAxios.patch('/account', {type: accountInfo.value.type, nickname: accountInfo.value.nickname})
      .then((res) => {
        if (res.data.status === "success") {
          accountStore.setAccountInfo(res.data.data)
          alert('정보 수정에 성공하였습니다.')
        } else {
          alert('정보 수정에 실패하였습니다.')
        }
      })
      .catch(() => {
        alert('정보 수정에 실패하였습니다.')
      })
}

</script>