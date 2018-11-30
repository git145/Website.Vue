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

        <div class="navigation__box"
            :class="{ 'navigation__box--show': isLinks }">
            <ul class="navigation__list">
                <li class="navigation__link"
                    @click="showPage(pageEnum.Introduction)">
                    Introduction
                </li>

                <li class="navigation__link">
                    <router-link :to="`/art/${artEnum.Temples}`">
                        Art
                    </router-link>
                </li>

                <ul class="navigation__list">
                    <li class="navigation__link">
                        <router-link :to="`/art/${artEnum.Temples}`">
                            Temples
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link :to="`/art/${artEnum.Miscellaneous}`">
                            Miscellaneous
                        </router-link>
                    </li>

                    <!--<li class="navigation__link"
                        @click="showArt(artEnum.TekkenFanArt)">
                        Tekken Fan Art
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.PanicAttack)">
                        Panic Attack 3D Model
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.MassEffect)">
                        Mass Effect Fan Art
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.ConceptArt)">
                        Concept Art
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.ResidentEvil)">
                        Resident Evil Fan Art
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.Toys)">
                        Toys
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.HammerTroll)">
                        Hammer Troll
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.WrestlingConcepts)">
                        Wrestling Concepts
                    </li>-->
                </ul>

                <li class="navigation__link"
                    @click="showPage(pageEnum.ZombieBattle)">
                    Games
                </li>

                <li class="navigation__link"
                    @click="showPage(pageEnum.Music)">
                    Music
                </li>

                <li class="navigation__link"
                    @click="showPage(pageEnum.Arduino)">
                    Arduino
                </li>

                <li class="navigation__link"
                    @click="showPage(pageEnum.OtherProjects)">
                    Other Projects
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    import ArtModel from "../../models/ArtModel";

    import { PageEnum } from "../../enums/PageEnum";
    import { ArtEnum } from "../../enums/ArtEnum";

    @Component(
        {
        }
    )
    export default class Navigation extends Vue {
        @Provide() private isLinks: boolean = false;

        @Provide() private pageEnum = PageEnum;
        @Provide() private artEnum = ArtEnum;

        private artModel: ArtModel = new ArtModel();
        private art = this.artModel.art;

        private showLinks(): void {
            this.isLinks = this.isLinks ? false : true;
        }

        private showPage(pageIndex: number) {
            switch(pageIndex) {
                case this.pageEnum.Introduction:
                    {
                        this.$router.push("/introduction");
                        break;
                    }
                case this.pageEnum.ZombieBattle:
                    {
                        this.$router.push("/zombie_battle");
                        break;
                    }
                case this.pageEnum.Music:
                    {
                        this.$router.push("/music");
                        break;
                    }
                case this.pageEnum.Arduino:
                    {
                        this.$router.push("/arduino");
                        break;
                    }
                case this.pageEnum.OtherProjects:
                    {
                        this.$router.push("/other_projects");
                        break;
                    }
                default:
                    {
                        this.$router.push("/introduction");
                        break;
                    }
            }
        }
    }
</script>