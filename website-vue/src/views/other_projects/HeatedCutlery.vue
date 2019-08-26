<template>
    <div id="top" class="page">
        <h2>{{ artModel.title }}</h2>

        <p>Completed for a product design and enterprise module at university.</p>

        <section v-for="image in artModel.images" :key="image.id" class="page__section">
            <a
                :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                target="_blank"
                class="page__image-wrapper"
            >
                <img
                    v-lazy="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="page__image"
                />
            </a>

            <h3 class="page__title--center">
                {{ image.name }} (
                <a
                    :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                    target="_blank"
                    title="A link to the image"
                >view</a>
                )
            </h3>
        </section>

        <!--<v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-carousel light>
                        <v-carousel-item
                            v-for="image in artModel.images"
                            :key="image.id"
                            :src="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                            :title="image.name"
                            :alt="image.name"
                        ></v-carousel-item>
                    </v-carousel>
                </v-flex>

                <v-flex xs6 v-for="image in artModel.images" :key="image.id">
                    <v-card dark>
                        <v-img
                            :src="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
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
                                :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                                target="_blank"
                            >Explore</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>-->

        <a href="#top" title="Return to the top of the page" class="page__link">Return to the top</a>
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