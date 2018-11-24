<template>
    <nav>
        <ul>
            <li v-for="link in links"
                :key="link.id"
                class="navigation__link">
                <router-link :to="link.path">
                    {{ link.name }}
                </router-link>

                <ul>
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
                        path: "/concepts",
                        name: "concepts"
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
    }
</script>