import Vue from "vue";
import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import store from "./store";

/* VIEWS */
import Introduction from "./views/Introduction.vue";
import Gallery from "./views/Gallery.vue";
import Games from "./views/Games.vue";
import TipTheCrates from "./views/games/TipTheCrates.vue";
import ZombieBattle from "./views/games/ZombieBattle.vue";
import Music from "./views/Music.vue";
import Arduino from "./views/Arduino.vue";
import OtherProjects from "./views/OtherProjects.vue";
import HeatedCutlery from "./views/other_projects/HeatedCutlery.vue";
import ComingSoon from "./views/ComingSoon.vue";
import NotFound from "./views/NotFound.vue";
import TrafficLights from "./views/arduino/TrafficLights.vue";
import Art from "./views/Art.vue";

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
        component: ComingSoon
    },
    {
        path: "/art/:artCategory",
        component: Gallery,
        props: true
    },
    {
        path: "/games",
        component: ComingSoon
    },
    {
        path: "/games/tip_the_crates",
        component: TipTheCrates
    },
    {
        path: "/games/zombie_battle",
        component: ZombieBattle
    },
    {
        path: "/music",
        component: ComingSoon
    },
    {
        path: "/arduino",
        component: ComingSoon
    },
    {
        path: "/arduino/traffic_lights",
        component: TrafficLights
    },
    {
        path: "/other_projects",
        component: ComingSoon
    },
    {
        path: "/other_projects/heated_cutlery",
        component: HeatedCutlery
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
    store,
    render: h => h(App)
});
