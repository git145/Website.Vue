<template>
    <v-container grid-list-xl>
        <v-layout justify-center>
            <h2>Games</h2>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 sm6 offset-xs3 v-for="gamesItem in games" :key="gamesItem.id">
                <v-card dark>
                    <v-img
                        :src="require(`@/assets/img${ gamesItem.imageFile }`)"
                        aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{ gamesItem.name }}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange" :href="`/#${ gamesItem.url }`">Explore</v-btn>
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
import GamesModel from "@/models/GamesModel";
import ILink from "@/interfaces/ILink";

@Component({})
export default class Games extends Vue {
    private gamesModel: GamesModel = new GamesModel();

    @Provide() private games: ILink[] = this.gamesModel.games;
}
</script>