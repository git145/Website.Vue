<template>
    <div id="app">
        <site-header/>

        <div class="content">
            <navigation/>

            <main>
                <router-view :key="$route.fullPath"/>
            </main>
        </div>

        <site-footer/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide } from "vue-property-decorator";

    import SiteHeader from "./views/partials/_siteHeader.vue";
    import Navigation from "./views/partials/_navigation.vue";
    import SiteFooter from "./views/partials/_siteFooter.vue";

    @Component(
        {
            components: {
                SiteHeader,
                Navigation,
                SiteFooter
            }
        }
    )
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "./assets/scss/cork/styles";
</style>