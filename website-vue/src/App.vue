<template>
    <div id="app">
        <site-header/>

        <div class="content">
            <main>
                <transition>
                    <router-view :key="$route.fullPath"/>
                </transition>
            </main>
        </div>

        <site-footer/>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";

import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

@Component({
    components: {
        SiteHeader,
        SiteFooter
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/scss/default/styles";
</style>