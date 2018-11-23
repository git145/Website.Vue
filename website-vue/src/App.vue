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

    import SiteHeader from "./views/partials/_site_header.vue";
    import Navigation from "./views/partials/_navigation.vue";
    import SiteFooter from "./views/partials/_site_footer.vue";

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