import Vue from "vue";
import Vuex from "vuex";

import IArt from "../interfaces/IArt";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        art: []
    },
    mutations: {
        setArt(state: any, art: IArt): void {
            state.art = art;
        }
    }
});
