<template>
    <nav class="nav">
        <div class="nav__icon-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="nav__icon"
                @click="showLinks"
            >
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
        </div>

        <div class="nav__box" :class="{ 'nav__box--show': isLinks }">
            <ul class="nav__list nav__list--one">
                <li class="nav__link" v-for="link in navigation" :key="link.id">
                    <router-link
                        :to="link.url"
                        class="nav__router-link"
                        :title="link.name"
                    >{{ link.name }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang='ts'>
import { Vue, Component, Provide } from "vue-property-decorator";

import NavigationModel from "../models/NavigationModel";
import ILink from "../interfaces/ILink";

@Component({})
export default class Navigation extends Vue {
    @Provide() private isLinks: boolean = false;

    private navigationModel: NavigationModel = new NavigationModel();

    @Provide() private navigation: ILink[] = this.navigationModel.navigation;

    private showLinks(): void {
        this.isLinks = this.isLinks ? false : true;
    }
}
</script>