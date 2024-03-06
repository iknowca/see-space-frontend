<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-6 mt-8">
          <v-card-title class="text-center">
            <h1>들어가기</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field :disabled="emailValidation" v-model="email" label="email" required
                            variant="outlined"></v-text-field>
              <v-btn v-if="!emailValidation" color="primary" @click="validateEmail">Login</v-btn>
              <v-text-field type="password" v-if="emailValidation" v-model="password" label="password" required
                            variant="outlined"></v-text-field>
              <v-btn v-if="emailValidation" color="primary" @click="login">Login</v-btn>
              <div class="text-center">
              </div>
            </v-form>
            <v-divider class="my-4"></v-divider>
            <p class="text-center">sns 계정을 사용해 로그인 해보세요</p>
            <v-row class="pa-4 d-flex justify-center">
              <KakaoLoginButton></KakaoLoginButton>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import KakaoLoginButton from "@/components/account/login/oauthLogin/KakaoLoginButton.vue";
import {ref} from "vue";
import serverAxios from "@/util/axiosInstance/serverAxios";
import {useRouter} from "vue-router";
import {useAccountStore} from "@/stores/account";

const email = ref("");
const emailValidation = ref(false);
const password = ref("");

const router = useRouter();
const accountStore = useAccountStore();

const validateEmail = () => {
  serverAxios.post('/account/validate-email', {type: "local", email: email.value})
      .then((res) => {
        if (res.data.message === "NOT_REGISTERED_EMAIL") {
          alert('등록되지 않은 이메일입니다')
        } else {
          emailValidation.value = true
        }
      })
      .catch((err) => {
        if (err.response.data.status === "failure") {
          if (err.response.data.message === "EMAIL_DUPLICATION") {
            alert('중복된 이메일입니다.')
          } else if (err.response.data.message === "INVALID_EMAIL") {
            alert('이메일 형식이 올바르지 않습니다.')
          } else {
            alert('알 수 없는 오류가 발생하였습니다.')
          }
        }
      })
}

const login = () => {
  serverAxios.post('/account/login', {type: "local", email: email.value, password: password.value}, {withCredentials: true})
      .then((res) => {
        if (res.data.status === "success") {
          serverAxios.defaults.headers.common['Authorization'] = `${res.data.message}`
          serverAxios.get('/account')
              .then((res) => {
                accountStore.setAccountInfo(res.data.data)
                accountStore.setLoginState(true)
                router.push('/')
              })
              .catch(() => {
                alert('로그인 실패')
              })
        } else {
          alert('로그인 실패')
        }
      })
      .catch((err) => {
        if (err.response.data.status === "fail") {
          alert('로그인 실패\n이메일 비밀번호를 확인해주세요')
        }
      })
}
</script>
<style lang="">

</style>