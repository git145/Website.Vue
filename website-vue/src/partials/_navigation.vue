<template>
    <nav>
        <ul class="navigation-buttons">
            <li v-for="link in links"
                :key="link.id">
              <router-link :to="link.route">
                  {{ link.linkName }}
              </router-link>
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
                linkName: "Introduction",
                route: "/"
            }
        ];
    }
</script>