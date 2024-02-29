import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
    state: () => ({
        loginState: false,
    }),
    actions: {
        setLoginState(state) {
            this.loginState = state
        }
    },
    persist: {
        enabled: true,
        strategies: [{ storage: localStorage}]
    }
})