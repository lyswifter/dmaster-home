import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue"
import MobileHome from "../components/MobileHome.vue"
const routes: RouteRecordRaw[] = [
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
]
const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router