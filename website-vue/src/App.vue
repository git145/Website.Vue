<template>
    <div id="app">
        <site-header/>

        <navigation/>

        <main>
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide } from "vue-property-decorator";

    import SiteHeader from "./partials/_site_header.vue";
    import Navigation from "./partials/_navigation.vue";

    @Component({
        components: {
            SiteHeader,
            Navigation
        }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import "./assets/scss/cork/styles";
</style>