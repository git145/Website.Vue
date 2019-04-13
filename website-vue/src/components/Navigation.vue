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
                <li class="nav__link">
                    <router-link to="/introduction" class="nav__router-link">Introduction</router-link>
                </li>

                <li class="nav__link">
                    <router-link to="/art" class="nav__router-link">Art</router-link>
                </li>

                <li class="nav__link">
                    <router-link to="/games" class="nav__router-link">Games</router-link>
                </li>

                <li class="nav__link">
                    <router-link to="/music" class="nav__router-link">Music</router-link>
                </li>

                <li class="nav__link">
                    <router-link to="/arduino" class="nav__router-link">Arduino</router-link>
                </li>

                <li class="nav__link">
                    <router-link to="/other_projects" class="nav__router-link">Other Projects</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang='ts'>
import { Vue, Component, Provide } from "vue-property-decorator";

@Component({})
export default class Navigation extends Vue {
    @Provide() private isLinks: boolean = false;

    private showLinks(): void {
        this.isLinks = this.isLinks ? false : true;
    }
}
</script>