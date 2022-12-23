import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home.vue")
        },
        {
            path: "/consorcio",
            name: "consorcio",
            component: () => import("../views/Consorcio.vue")
        },
    ]
});

export default router;
