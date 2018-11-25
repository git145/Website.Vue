import Vue from "vue";
import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";

/* VIEWS */
import Introduction from "./views/Introduction.vue";
import Temples from "./views/galleries/Temples.vue";
import Miscellaneous from "./views/galleries/Miscellaneous.vue";
import Tekken from "./views/galleries/Tekken.vue";
import ZombieBattle from "./views/games/ZombieBattle.vue";
import Music from "./views/Music.vue";
import Arduino from "./views/Arduino.vue";
import ComingSoon from "./views/ComingSoon.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);
Vue.use(VueLazyload);

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
        path: "/miscellaneous",
        component: Miscellaneous
    },
    {
        path: "/tekken",
        component: Tekken
    },
    {
        path: "/games",
        redirect: "/zombie_battle"
    },
    {
        path: "/zombie_battle",
        component: ZombieBattle
    },
    {
        path: "/music",
        component: Music
    },
    {
        path: "/arduino",
        component: Arduino
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
