import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../components/Home.vue"
import MobileHome from "../components/MobileHome.vue"
import PolicyView from "../components/Policy.vue"
import TosView from "../components/Tos.vue"

const routes = [
    {
        path: '/',
        name: "home",
        component: Home
    },
    {
        path: "/mobileHome",
        name: "mobileHome",
        component: MobileHome,
    },
    {
        path: "/policy",
        name: "policy",
        component: PolicyView,
    },
    {
        path: "/tos",
        name: "tos",
        component: TosView,
    }
]

// 创建路由管理器 模式和路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router