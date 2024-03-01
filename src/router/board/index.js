import CommunityBoardListView from '@/views/board/community/CommunityBoardListView.vue'
import CommunityBoardWriteView from '@/views/board/community/CommunityBoardWriteView.vue'
import CommunityBoardReadView from '@/views/board/community/CommunityBoardReadView.vue'
import CommunityBoardModifyView from '@/views/board/community/CommunityBoardModifyView.vue'

const accountRouter = [
    {
        path: '/board/community/list',
        name: 'communityBoardList',
        component: CommunityBoardListView
    },
    {
        path: '/board/community/write',
        name: 'communityBoardWrite',
        component: CommunityBoardWriteView
    },
    {
        path: '/board/community/:id',
        name: 'communityBoardRead',
        component: CommunityBoardReadView
    },
    {
        path: '/board/community/modify/:id',
        name: 'communityBoardModify',
        component: CommunityBoardModifyView
    }
]

export default accountRouter