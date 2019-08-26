import Vue from "vue";
import App from "./App.vue";
import router from './router/router';
import store from './store/store';

import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";

Vue.use(VueRouter);
Vue.use(VueLazyload);

Vue.config.productionTip = false;

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
