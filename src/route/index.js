import { createRouter, createWebHashHistory } from "vue-router";

const aysnRoutes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () => import("../views/Home/Home.vue"),
        meta: {
            isShowTab: true,
        }
    },
    {
        path: "/cart",
        component: () => import("../views/Cart/Cart.vue"),
        meta: {
            isShowTab: true,
        }
    },
    {
        path: "/category",
        component: () => import("../views/Category/Category.vue"),
        meta: {
            isShowTab: true,
        }
    },
    {
        path: "/user",
        component: () => import("../views/User/User.vue"),
        meta: {
            isShowTab: true,
        }
    },
    {
        path: "/login",
        component: () => import("../views/Login/Login.vue"),
        meta: {
            isShowTab: false,
        }
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...aysnRoutes,
        { path: "/:pathMatch(.*)", redirect: "/" }]
})
router.beforeEach((to, from, next) => {
    next();
});

export default router;

