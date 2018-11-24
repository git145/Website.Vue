<template>
    <div id="app">
        <site-header/>

        <div class="content">
            <navigation/>

            <main>
                <router-view/>
            </main>
        </div>

        <site-footer/>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide } from "vue-property-decorator";

    import SiteHeader from "./components/SiteHeader.vue";
    import Navigation from "./components/Navigation.vue";
    import SiteFooter from "./components/SiteFooter.vue";

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