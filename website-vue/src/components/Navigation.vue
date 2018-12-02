<template>
    <nav class="navigation">
        <div class="navigation__icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                class="navigation__icon"
                @click="showLinks">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
        </div>

        <div class="navigation__box"
            :class="{ 'navigation__box--show': isLinks }">
            <ul class="navigation__list">
                <li class="navigation__link">
                    <router-link to="/introduction">
                        Introduction
                    </router-link>
                </li>

                <li class="navigation__link">
                    <router-link to="/art/temples">
                        Art
                    </router-link>
                </li>

                <ul class="navigation__list">
                    <li class="navigation__link">
                        <router-link to="/art/temples">
                            Temples
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/miscellaneous">
                            Miscellaneous
                        </router-link>
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.TekkenFanArt)">
                        <router-link to="/art/tekken_fan_art">
                            Tekken Fan Art
                        </router-link>
                    </li>

                    <li class="navigation__link"
                        @click="showArt(artEnum.PanicAttack)">
                        <router-link to="/art/panic_attack_3d_model">
                            Panic Attack 3D Model
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/mass_effect_fan_art">
                            Mass Effect Fan Art
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/concept_art">
                            Concept Art
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/resident_evil_fan_art">
                            Resident Evil Fan Art
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/toys">
                            Toys
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/hammer_troll">
                            Hammer Troll
                        </router-link>
                    </li>

                    <li class="navigation__link">
                        <router-link to="/art/wrestling_concepts">
                            Wrestling Concepts
                        </router-link>
                    </li>
                </ul>

                <li class="navigation__link">
                    <router-link to="/games/tip_the_crates">
                        Games
                    </router-link>
                </li>

                <li class="navigation__link">
                    <router-link to="/music">
                        Music
                    </router-link>
                </li>

                <li class="navigation__link">
                    <router-link to="/arduino">
                        Arduino
                    </router-link>
                </li>

                <li class="navigation__link">
                    <router-link to="/other_projects/heated_cutlery">
                        Other Projects
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    @Component(
        {
        }
    )
    export default class Navigation extends Vue {
        @Provide() private isLinks: boolean = false;

        private showLinks(): void {
            this.isLinks = this.isLinks ? false : true;
        }
    }
</script>