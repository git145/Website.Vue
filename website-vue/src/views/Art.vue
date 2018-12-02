<template>
    <div class="page">
        <section v-for="image in artImages"
            :key="image.id"
            class="gallery__section"
            v-if="hasArt">
            <a :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                class="gallery__link">
                <img v-lazy="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="gallery__image">
            </a>

            <a :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                class="gallery__name">
                {{ image.name }}
            </a>
        </section>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Provide, Prop } from "vue-property-decorator";

    import ArtModel from "../models/ArtModel";
    import IArt from "../interfaces/IArt";
    import IImage from "../interfaces/IImage";
    import { ArtEnum } from "../enums/ArtEnum";

    @Component(
        {
        }
    )
    export default class Art extends Vue {
        @Prop({
            default: "temples"
        }) artCategory: string;

        @Provide() private hasArt = false;

        private artModel: ArtModel = new ArtModel();
        private artModelValue = this.artModel.art;

        @Provide() artDirectory: string;
        @Provide() artImages: IImage[] = [];

        mounted() {
            //console.log(this.artCategory);
            console.log(this.artModelValue);

            this.setArt();
        }

        setArt() {
            let art: IArt;

            switch(this.artCategory) {
                case "temples":
                    {
                        art = this.artModelValue[ArtEnum.Temples];
                        break;
                    }
                case "miscellaneous":
                    {
                        art = this.artModelValue[ArtEnum.Miscellaneous];
                        break;
                    }
                case "tekken_fan_art":
                    {
                        art = this.artModelValue[ArtEnum.TekkenFanArt];
                        break;
                    }
                case "panic_attack_3d_model":
                    {
                        art = this.artModelValue[ArtEnum.PanicAttack];
                        break;
                    }
                case "mass_effect_fan_art":
                    {
                        art = this.artModelValue[ArtEnum.MassEffect];
                        break;
                    }
                case "concept_art":
                    {
                        art = this.artModelValue[ArtEnum.ConceptArt];
                        break;
                    }
                case "resident_evil_fan_art":
                    {
                        art = this.artModelValue[ArtEnum.ResidentEvil];
                        break;
                    }
                case "toys":
                    {
                        art = this.artModelValue[ArtEnum.Toys];
                        break;
                    }
                case "hammer_troll":
                    {
                        art = this.artModelValue[ArtEnum.HammerTroll];
                        break;
                    }
                case "wrestling_concepts":
                    {
                        art = this.artModelValue[ArtEnum.WrestlingConcepts];
                        break;
                    }
                default:
                    {
                        art = this.artModelValue[ArtEnum.Temples];
                        break;
                    }
            }

            const artDirectory = art.directory;

            if (artDirectory !== undefined) {
                this.artDirectory = artDirectory;
            }

            const artImages = art.images;

            if (artImages !== undefined) {
                this.artImages = artImages;
            }

            this.hasArt = true;
        }
    }
</script>