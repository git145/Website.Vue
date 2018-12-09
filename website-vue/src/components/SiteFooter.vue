<template>
    <footer>
        <section class="footer-links">
            <ul class="footer-links__list">
                <li v-for="link in links"
                    :key="link.id"
                    class="footer-links__item">
                    <a :href = "link.url"
                        :target = "link.target"
                        class="footer-links__link">
                        <img :src="require(`@/assets/img/links/${ link.imageFile }`)"
                            :alt="link.name"
                            :title="link.name">

                        <span class="footer-links__name">
                            {{ link.name }}
                        </span>
                    </a>
                </li>
            </ul>
        </section>

        <section class="copyright">
            &copy; Richard Kneale {{ getYear() }}
        </section>
    </footer>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    import ILink from "../interfaces/ILink";

    @Component(
        {
        }
    )
    export default class SiteFooter extends Vue {
        @Provide() private links: ILink[] = [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/richardkneale",
                imageFile: "linked_in.png",
                target: "_blank"
            },
            {
                name: "GitHub",
                url: "https://github.com/git145",
                imageFile: "git_hub.png",
                target: "_blank"
            },
            {
                name: "Coroflot",
                url: "http://www.coroflot.com/richardkneale/portfolio",
                imageFile: "coroflot.png",
                target: "_blank"
            },
            {
                name: "Hiive",
                url: "http://www.hiive.co.uk/richardkneale",
                imageFile: "hiive.png",
                target: "_blank"
            },
            {
                name: "Email",
                url: "mailto:richardkneale@hotmail.co.uk",
                imageFile: "email.png",
                target: "_top"
            }
        ]

        private getYear(): number {
            const date = new Date();

            return date.getFullYear();
        }
    }
</script>