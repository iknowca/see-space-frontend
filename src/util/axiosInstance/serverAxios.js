import axios from 'axios';
import router from '@/router';
import { useAccountStore } from '@/stores/account';

const serverAxios = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
});

serverAxios.interceptors.response.use((res) => { return res },
    async (error) => {
        if (serverAxios.refresh === true) {
            return await handleRequest(error);
        }
        if (error.response.status === 401 && error.response?.data.message === "Token is not found" && error.config.url !== '/jwt/refresh') {
            serverAxios.refresh = true;
            return await serverAxios.get('/account/jwt/refresh', { withCredentials: true })
                .then((res) => {
                    serverAxios.defaults.headers.common['Authorization'] = `${res.data.accessToken}`;
                    serverAxios.refresh = false;
                    return serverAxios(error.config)
                })
                .catch(() => {
                    alert('로그인이 만료되었습니다.\n다시 로그인해주세요.');
                    useAccountStore().setLoginStatus(false);
                    router.push('/account/login')
                });
        } else {
            return Promise.reject(error);
        }
    }
)

function waitForRefresh() {
    return new Promise(resolve => {
        const checkInterval = setInterval(() => {
            if (serverAxios.refresh === false) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
    });
}
async function handleRequest(error) {
    await waitForRefresh();
    return serverAxios(error.config);
}
export default serverAxios;