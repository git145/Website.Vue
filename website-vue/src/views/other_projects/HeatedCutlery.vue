<template>
    <div>
        <v-container id="top">
            <v-layout justify-center>
                <h2>{{ artModel.title }}</h2>
            </v-layout>

            <v-layout column>
                <p>Completed for a product design and enterprise module at university.</p>
            </v-layout>
        </v-container>

        <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-carousel light>
                        <v-carousel-item
                            v-for="image in artModel.images"
                            :key="image.id"
                            :src="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>

                <v-flex xs6 v-for="image in artModel.images" :key="image.id">
                    <v-card dark>
                        <v-img
                            :src="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                            aspect-ratio="2.75"
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
                                :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                                target="_blank"
                            >Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout justify-end>
                <a href="#top" title="Return to the top of the page">Return to the top</a>
            </v-layout>
        </v-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

import IArt from "../../interfaces/IArt";

@Component({})
export default class Art extends Vue {
    @Provide() private artModel: IArt = {
        title: "Heated Cutlery",
        directory: "heated_cutlery",
        images: [
            {
                name: "Heated Cutlery",
                file: "cutlery.png"
            },
            {
                name: "Heated Cutlery",
                file: "cutlery_orthographic.png"
            },
            {
                name: "Heated Cutlery",
                file: "cutlery_animation.gif"
            },
            {
                name: "Dock",
                file: "dock.png"
            },
            {
                name: "Dock",
                file: "dock_orthographic.png"
            },
            {
                name: "Design",
                file: "cutlery_design_001.png"
            },
            {
                name: "Design",
                file: "cutlery_design_002.png"
            },
            {
                name: "Design",
                file: "cutlery_design_003.png"
            },
            {
                name: "Design",
                file: "cutlery_design_004.png"
            }
        ]
    };
}
</script>