<template>
    <v-container id="top">
        <v-layout justify-center>
            <h2>Art</h2>
        </v-layout>

        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card v-for="artItem in art" :key="artItem.id" class="page__card" dark>
                    <v-img
                        :src="require(`@/assets/img/${ artItem.directory }/${ artItem.images[0].file }`)"
                        aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ artItem.title }}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange" :href="`/#/art/${ artItem.directory }`">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout justify-end>
            <h4>
                <a href="#top" title="Return to the top of the page">Return to the top</a>
            </h4>
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
export default class Art extends Vue {
    private artModel: ArtModel = new ArtModel();

    @Provide() private art: IArt[] = this.artModel.art;
}
</script>