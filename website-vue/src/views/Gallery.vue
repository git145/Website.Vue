<template>
    <v-container v-if="hasArt" grid-list-xl>
        <v-layout justify-center>
            <h2>{{ artTitle }}</h2>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel light>
                    <v-carousel-item
                        v-for="image in artImages"
                        :key="image.id"
                        :src="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                        :title="image.name"
                        :alt="image.name"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>

            <v-flex xs6 v-for="image in artImages" :key="image.id">
                <v-card dark>
                    <v-img
                        :src="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                        aspect-ratio="2.75"
                        :title="image.name"
                        :alt="image.name"
                    ></v-img>

                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{ image.name }}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn
                            flat
                            color="orange"
                            :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                            target="_blank"
                        >Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout justify-end>
            <a href="#top" title="Return to top">Return to top</a>
        </v-layout>
    </v-container>
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
            case "tekken_fan_art": {
                art = this.artModelValue[ArtEnum.TekkenFanArt];

                break;
            }
            case "three_d": {
                art = this.artModelValue[ArtEnum.ThreeD];

                break;
            }
            case "mass_effect_fan_art": {
                art = this.artModelValue[ArtEnum.MassEffect];

                break;
            }
            case "concept_art": {
                art = this.artModelValue[ArtEnum.ConceptArt];

                break;
            }
            case "resident_evil_fan_art": {
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
            case "wrestling_concepts": {
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