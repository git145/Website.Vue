import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

/* VIEWS */
import Introduction from "./views/Introduction.vue";
import Temples from "./views/Temples.vue";
import Concepts from "./views/Concepts.vue";
import ComingSoon from "./views/ComingSoon.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);

const routes: any = [
    {
        path: "/",
        redirect: "/introduction"
    },
    {
        path: "/introduction",
        component: Introduction
    },
    {
        path: "/art",
        redirect: "/temples",
    },
    {
        path: "/temples",
        component: Temples
    },
    {
        path: "/concepts",
        component: Concepts
    },
    {
        path: "/games",
        redirect: "/coming_soon"
    },
    {
        path: "/music",
        redirect: "/coming_soon"
    },
    {
        path: "/arduino",
        redirect: "/coming_soon"
    },
    {
        path: "/other_projects",
        redirect: "/coming_soon"
    },
    {
        path: "/coming_soon",
        component: ComingSoon
    },
    {
        path: "*",
        redirect: "/not_found"
    },
    {
        path: "/not_found",
        component: NotFound
    }
];

const router: VueRouter = new VueRouter({
    routes
});

Vue.config.productionTip = false;

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: "#app",
    router,
    render: h => h(App)
});
