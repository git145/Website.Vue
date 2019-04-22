import Vue from "vue";
import App from "./App.vue";
import router from './router/router';
import store from './store/store';
import 'vuetify/dist/vuetify.min.css';

import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";
import Vuetify from 'vuetify';

Vue.use(VueRouter);
Vue.use(VueLazyload);
Vue.use(Vuetify);

Vue.config.productionTip = false;

// tslint:disable-next-line:no-unused-expression
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
