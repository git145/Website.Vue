<template>
    <div id="top" class="page">
        <h2>Games</h2>

        <section v-for="gamesItem in games" :key="gamesItem.id" class="page__section">
            <a :href="`/#/games/${ gamesItem.url }`" class="page__image-wrapper">
                <img
                    v-lazy="require(`@/assets/img/games/${ gamesItem.imageFile }`)"
                    :alt="gamesItem.name"
                    :title="gamesItem.name"
                    class="page__image"
                />
            </a>

            <h3 class="page__title--center">
                {{ gamesItem.name }} (
                <a
                    :href="`/#/games/${ gamesItem.url }`"
                    title="A link to the category"
                >view</a>
                )
            </h3>
        </section>

        <!--<v-layout row wrap>
            <v-flex xs12 sm6 offset-xs3 v-for="gamesItem in games" :key="gamesItem.id">
                <v-card dark>
                    <v-img
                        :src="require(`@/assets/img/games/${ gamesItem.imageFile }`)"
                        aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">{{ gamesItem.name }}</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange" :href="`/#/games/${ gamesItem.url }`">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>-->

        <a href="#top" title="Return to the top of the page" class="page__link">Return to the top</a>
    </div>
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