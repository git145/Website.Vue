import Vue from 'vue';
import VueRouter from 'vue-router';

// Views
import Introduction from "../views/Introduction.vue";
import Gallery from "../views/Gallery.vue";
import Games from "../views/Games.vue";
import TipTheCrates from "../views/games/TipTheCrates.vue";
import ZombieBattle from "../views/games/ZombieBattle.vue";
import Music from "../views/Music.vue";
import HeatedCutlery from "../views/other_projects/HeatedCutlery.vue";
import NotFound from "../views/NotFound.vue";
import TrafficLights from "../views/arduino/TrafficLights.vue";
import Art from "../views/Art.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
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
            component: Art
        },
        {
            path: "/art/:artCategory",
            component: Gallery,
            props: true
        },
        {
            path: "/games",
            component: Games
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
            component: Music
        },
        {
            path: "/arduino",
            redirect: "/arduino/traffic_lights"
        },
        {
            path: "/arduino/traffic_lights",
            component: TrafficLights
        },
        {
            path: "/other_projects",
            redirect: "/other_projects/heated_cutlery"
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
    ]
});
