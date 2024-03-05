import { defineStore } from 'pinia'
import serverAxios from '@/util/axiosInstance/serverAxios'

export const useAccountStore = defineStore('account', {
    state: () => ({
        loginState: false,
        account: {},
    }),
    actions: {
        setLoginState(state) {
            this.loginState = state
            localStorage.setItem('loginState', state)
        },
        getAccountInfo() {
            return serverAxios.get('/account')
            .then(res => {
                this.account = res.data.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        setAccountInfo(accountInfo) {
            this.account = accountInfo
        }
    },
})