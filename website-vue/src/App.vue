<template>
    <div id="app">
        <navigation v-if="isNavigation"/>

        <router-view/>
    </div>
</template>

<script lang="ts">
    import Navigation from "./components/Navigation.vue";
    import { Vue, Component, Provide } from "vue-property-decorator";

    @Component({
        components: {
            Navigation
        }
    })
    export default class App extends Vue {
        @Provide() private isNavigation: boolean = false;
    }
</script>

<style lang="scss">
    @import "./assets/scss/brand/styles";
</style>