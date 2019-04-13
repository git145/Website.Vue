<template>
    <header class="header">
        <div class="header__heading-wrapper">
            <h1 class="header__heading">
                <router-link to="/" class="header__link">RichardKneale@AlterVista.org</router-link>
            </h1>
        </div>

        <navigation/>
    </header>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

import Navigation from "../components/Navigation.vue";

@Component({
    components: {
        Navigation
    }
})
export default class SiteHeader extends Vue {}
</script>