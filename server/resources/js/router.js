import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポートする
import PhotoList from './components/pages/PhotoList.vue'
import Login from './components/pages/Login.vue'
import PhotoDetail from './components/pages/PhotoDetail.vue'

import store from './store'

import SystemError from './components/pages/errors/System.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
    {
        path: '/',
        component: PhotoList
    },
    {
        path: '/photos/:id',
        component: PhotoDetail,
        props: true
    },
    {
        path: '/login',
        component: Login,
        beforeEnter(to, from, next) {
            if (store.getters['auth/check']) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/500',
        component: SystemError
    }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: 'history',//URL にハッシュ # がついてしまうのを解消
    routes
})

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router
