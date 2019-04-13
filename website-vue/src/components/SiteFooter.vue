<template>
    <footer class="footer">
        <div class="footer__link-wrapper">
            <ul class="footer__list">
                <li v-for="link in links" :key="link.id" class="footer__item">
                    <a :href="link.url" :target="link.target" class="footer__link">
                        <img
                            :src="require(`@/assets/img/links/${ link.imageFile }`)"
                            :alt="link.name"
                            :title="link.name"
                            class="footer__icon"
                        >

                        <span class="footer__name">{{ link.name }}</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="footer__copyright-wrapper">
            <div class="footer__copyright">&copy; Richard Kneale {{ getYear() }}</div>
        </div>
    </footer>
</template>

<script lang='ts'>
import { Vue, Component, Provide } from "vue-property-decorator";

import ILink from "../interfaces/ILink";

@Component({})
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
            name: "ScreenSkills",
            url:
                "https://www.screenskills.com/profile/f4fc871d-b9b3-428f-9eb4-7d4152791f10/",
            imageFile: "screen_skills.png",
            target: "_blank"
        },
        {
            name: "Email",
            url: "mailto:richardkneale@hotmail.co.uk",
            imageFile: "email.png",
            target: "_top"
        }
    ];

    private getYear(): number {
        const date = new Date();

        return date.getFullYear();
    }
}
</script>