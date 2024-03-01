import JoinView from '@/views/account/JoinView'
import OauthCallbackView from '@/views/account/oauth/OauthCallbackView'

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
    }
]

export default accountRouter