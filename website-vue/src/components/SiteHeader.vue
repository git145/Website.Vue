<template>
    <header class="header">
        <div div class="header__wrapper">
            <div class="header__heading-wrapper">
                <h1 class="header__heading">
                    <router-link
                        to="/"
                        class="header__link"
                        title="RichardKneale@AlterVista.org"
                    >RichardKneale@AlterVista.org</router-link>
                </h1>
            </div>

            <navigation/>
        </div>
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