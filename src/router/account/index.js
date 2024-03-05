import JoinView from '@/views/account/JoinView'
import OauthCallbackView from '@/views/account/oauth/OauthCallbackView'
import MyPageView from '@/views/account/MyPageView'
import LoginView from "@/views/account/LoginView.vue";

const accountRouter = [
    {
        path: '/account/join',
        name: 'join',
        component: JoinView
    },
    {
        path: '/account/oauth/callback/:provider',
        name: 'oauthCallback',
        component: OauthCallbackView
    },
    {
        path: '/account/mypage',
        name: 'mypage',
        component: MyPageView
    },
    {
        path: '/account/login',
        name: 'login',
        component: LoginView
    }
]

export default accountRouter