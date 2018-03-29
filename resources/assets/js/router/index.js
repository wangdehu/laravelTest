import VueRouter from 'vue-router'
import Vue from 'vue'
import iView from 'iview'

Vue.use(VueRouter)

const LoginPane = () => import('../components/Login.vue')
const NotFoundPage = () => import('../components/NotFoundPage.vue')

const ProblemTable = () => import('../components/ProblemTable.vue')
const UsersTable = () => import('../components/UsersTable.vue')
const StatusTable = () => import('../components/Status.vue')
const DiscussForum = () => import('../components/Discuss.vue')
const AnnouncementTable = () => import('../components/AnnouncementTable.vue')

const Profile = () => import('../components/Profile.vue')

const Practice = () => import('../components/Practice.vue')
const Problem = () => import('../components/Problem.vue')

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Profile
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPane
        },
        {
            path: '/problems',
            name: 'problems',
            component: ProblemTable
        },
        {
            path: '/users',
            name: 'users',
            component: UsersTable
        },
        {
            path: '/user/:username',
            name: 'user',
            component: Profile
        },
        {
            path: '/statuses',
            name: 'statuses',
            component: StatusTable
        },
        {
            path: '/discusses',
            name: 'discusses',
            component: DiscussForum
        },
        {
            path: '/announcements',
            name: 'announcements',
            component: AnnouncementTable
        },
        {
            path: '/practice',
            name: 'practice',
            component: Practice,
            children: [
                {
                    path: ':problemId',
                    component: Problem,
                    name: 'problem',
                    children: [
                        {
                            path: 'topic'
                        }
                    ]
                }
            ]
        },
        { path: '*', component: NotFoundPage }
    ]
})

iView.LoadingBar.config({
    color: '#2dde98',
    failedColor: '#d20962',
    height: 3
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

router.afterEach(() => {
    iView.LoadingBar.finish()
})

export default router
