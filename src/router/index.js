import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/navigation/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "*",
        name: "Not Found",
        component: () => import("@/pages/NotFound.vue"),
        meta: {
            title: "app.routes.notFound",
        },
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "app.routes.home",
        },
    },
    {
        path: "/icons",
        name: "Icons",
        component: () => import("@/pages/navigation/Icons.vue"),
        meta: {
            title: "app.routes.icons",
        },
    },
    {
        path: "/docs",
        name: "Documentation",
        component: () => import("@/pages/navigation/Docs.vue"),
        meta: {
            title: "app.routes.docs",
        },
    },
    {
        path: "/icons/:tag/:icon",
        name: "Icon",
        component: () => import("@/pages/IconView.vue"),
        meta: {
            title: "app.routes.icon",
        },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/pages/About.vue"),
        meta: {
            title: "app.routes.about",
        },
    },
    {
        path: "/faq",
        name: "FAQ",
        component: () => import("@/pages/FAQ.vue"),
        meta: {
            title: "app.routes.faq",
        },
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;