<template>
    <div id="top" class="page">
        <h2>Art</h2>

        <section v-for="artItem in art" :key="artItem.id" class="page__section">
            <a :href="`/#/art/${ artItem.directory }`" class="page__image-wrapper">
                <img
                    v-lazy="require(`@/assets/img/${ artItem.directory }/${ artItem.images[0].file }`)"
                    :alt="artItem.title"
                    :title="artItem.title"
                    class="page__image"
                />
            </a>

            <h3 class="page__title--center">
                {{ artItem.title }} (
                <a
                    :href="`/#/art/${ artItem.directory }`"
                    title="A link to the category"
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
export default class Art extends Vue {
    private artModel: ArtModel = new ArtModel();

    @Provide() private art: IArt[] = this.artModel.art;
}
</script>