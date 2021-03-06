<template>
    <div id="top" class="page">
        <h2>{{ artTitle }}</h2>

        <section v-for="image in artImages" :key="image.id" class="page__section">
            <a
                :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                target="_blank"
                class="page__image-wrapper"
            >
                <img
                    v-lazy="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="page__image"
                />
            </a>

            <h3 class="page__title--center">
                {{ image.name }} (
                <a
                    :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                    target="_blank"
                    title="A link to the image"
                >view</a>
                )
            </h3>
        </section>

        <a href="#top" title="Return to the top of the page" class="page__link">Return to the top</a>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

import ArtModel from "../models/ArtModel";
import IArt from "../interfaces/IArt";
import IImage from "../interfaces/IImage";
import { ArtEnum } from "../enums/ArtEnum";

@Component({})
export default class Gallery extends Vue {
    @Prop({
        default: "temples"
    })
    artCategory?: string;

    @Provide() private hasArt = false;

    private artModel: ArtModel = new ArtModel();
    private artModelValue = this.artModel.art;

    @Provide() artTitle: string = "";
    @Provide() artDirectory: string = "";
    @Provide() artImages: IImage[] = [];

    mounted() {
        this.setArt();
    }

    setArt() {
        let art: IArt;

        switch (this.artCategory) {
            case "temples": {
                art = this.artModelValue[ArtEnum.Temples];

                break;
            }
            case "miscellaneous": {
                art = this.artModelValue[ArtEnum.Miscellaneous];

                break;
            }
            case "tekken": {
                art = this.artModelValue[ArtEnum.TekkenFanArt];

                break;
            }
            case "three_d": {
                art = this.artModelValue[ArtEnum.ThreeD];

                break;
            }
            case "mass_effect": {
                art = this.artModelValue[ArtEnum.MassEffect];

                break;
            }
            case "traditional": {
                art = this.artModelValue[ArtEnum.Traditional];

                break;
            }
            case "concepts": {
                art = this.artModelValue[ArtEnum.ConceptArt];

                break;
            }
            case "resident_evil": {
                art = this.artModelValue[ArtEnum.ResidentEvil];

                break;
            }
            case "toys": {
                art = this.artModelValue[ArtEnum.Toys];

                break;
            }
            case "hammer_troll": {
                art = this.artModelValue[ArtEnum.HammerTroll];

                break;
            }
            case "wrestling": {
                art = this.artModelValue[ArtEnum.WrestlingConcepts];

                break;
            }
            default: {
                art = this.artModelValue[ArtEnum.Temples];

                break;
            }
        }

        this.setArtTitle(art);
        this.setArtDirectory(art);
        this.setArtImages(art);

        this.hasArt = true;
    }

    setArtTitle(art: IArt) {
        const artTitle = art.title;

        if (artTitle !== undefined) {
            this.artTitle = artTitle;
        }
    }

    setArtDirectory(art: IArt) {
        const artDirectory = art.directory;

        if (artDirectory !== undefined) {
            this.artDirectory = artDirectory;
        }
    }

    setArtImages(art: IArt) {
        const artImages = art.images;

        if (artImages !== undefined) {
            this.artImages = artImages;
        }
    }
}
</script>