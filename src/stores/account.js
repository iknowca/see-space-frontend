import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
    state: () => ({
        loginState: false,
    }),
    actions: {
        setLoginState(state) {
            this.loginState = state
            localStorage.setItem('loginState', state)
        },
    },
})