import JoinView from '@/views/account/JoinView'
import OauthCallbackView from '@/views/account/oauth/OauthCallbackView'
import MyPageView from '@/views/account/MyPageView'
import LoginView from "@/views/account/LoginView.vue";
import PasswordUpdateView from "@/views/account/PasswordUpdateView.vue";

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
    },
    {
        path: '/account/mypage/password',
        name: 'password',
        component: PasswordUpdateView
    }
]

export default accountRouter