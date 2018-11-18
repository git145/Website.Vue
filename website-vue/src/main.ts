import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

/* VIEWS */
import HelloWorld from "./views/HelloWorld.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);

const routes: any = [
    {
        path: "/",
        redirect: "hello_world"
    },
    {
        path: "/hello_world",
        name: "hello_world",
        component: HelloWorld
    },
    {
        path: "*",
        redirect: "not_found"
    },
    {
        path: "/not_found",
        name: "not_found",
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
