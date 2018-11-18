<template>
    <nav class="navigation">
        <h2 class="navigation__title">
            *** Dev navigation - remove from build ***
        </h2>

        <ul class="navigation-buttons">
            <li v-for="link in links"
                :key="link.id"
                class="navigation-buttons__item">
                <button class="navigation-buttons__button">
                    <router-link :to="link.route">
                        {{ link.linkName }}
                    </router-link>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";
    import INavigation from "../interfaces/INavigation";

    @Component({
    })
    export default class Navigation extends Vue {
        @Provide() private links: INavigation[] = [
            {
                linkName: "Hello World",
                route: "/"
            }
        ];
    }
</script>