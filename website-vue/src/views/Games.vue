<template>
    <v-container grid-list-xl>
        <v-layout justify-center>
            <h2>Games</h2>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 sm6 offset-xs3>
                <v-card dark>
                    <v-img
                        :src="require('@/assets/img/games/tip_the_crates.png')"
                        aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">Tip the Crates</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange" href="/#/games/tip_the_crates">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm6 offset-xs3>
                <v-card dark>
                    <v-img
                        :src="require('@/assets/img/games/zombie_battle.png')"
                        aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title>
                        <div>
                            <h3 class="headline mb-0">Zombie Battle</h3>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn flat color="orange" href="/#/games/zombie_battle">Explore</v-btn>
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
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Games extends Vue {}
</script>