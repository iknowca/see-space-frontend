import JoinView from '@/views/account/JoinView'
import OauthCallbackView from '@/views/account/oauth/OauthCallbackView'
import MyPageView from '@/views/account/MyPageView'

const accountRouter = [
    {
        path: '/account/join',
        name: 'join',
        component: JoinView
    },
    {
        path: '/oauth/callback/:provider',
        name: 'oauthCallback',
        component: OauthCallbackView
    },
    {
        path: '/account/mypage',
        name: 'mypage',
        compoenent: MyPageView
    }
]

export default accountRouter