<template>
    <v-container id="top" grid-list-xl>
        <v-layout justify-center>
            <h2>Art</h2>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs6 v-for="artItem in art" :key="artItem.id">
                <v-card dark>
                    <v-img
                        :src="require(`@/assets/img/${ artItem.directory }/${ artItem.images[0].file }`)"
                        aspect-ratio="2.75"
                        :title="artItem.name"
                        :alt="artItem.name"
                    ></v-img>

                    <v-card-title>
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
            <a href="#top" title="Return to the top of the page">Return to top</a>
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