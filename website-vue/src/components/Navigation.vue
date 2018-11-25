<template>
    <nav class="navigation">
        <svg xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            class="navigation__icon"
            @click="showLinks">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>

        <ul class="navigation__list"
            :class="{ 'navigation__list--show': isLinks }">
            <li v-for="link in links"
                :key="link.id"
                class="navigation__link">
                <router-link :to="link.path">
                    {{ link.name }}
                </router-link>

                <ul class="navigation__list"
                    :class="{ 'navigation__list--show': isLinks }">
                    <li v-for="child in link.children"
                        :key="child.id"
                        class="navigation__link">
                        <router-link :to="child.path">
                            {{ child.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    import INavigation from "../interfaces/INavigation";

    @Component(
        {
        }
    )
    export default class Navigation extends Vue {
        @Provide() private isLinks: boolean = false;

        @Provide() private links: INavigation[] = [
            {
                path: "/",
                name: "introduction"
            },
            {
                path: "/art",
                name: "art",
                children: [
                    {
                        path: "/temples",
                        name: "temples"
                    },
                    {
                        path: "/miscellaneous",
                        name: "miscellaneous"
                    },
                    {
                        path: "/tekken",
                        name: "tekken fan art"
                    }
                ]
            },
            {
                path: "/games",
                name: "games",
                children: [
                    {
                        path: "/zombie_battle",
                        name: "zombie battle"
                    }
                ]
            },
            {
                path: "/music",
                name: "music"
            },
            {
                path: "/arduino",
                name: "arduino"
            },
            {
                path: "/other_projects",
                name: "other projects"
            }
        ];

        private showLinks(): void {
            this.isLinks = this.isLinks ? false : true;
        }
    }
</script>