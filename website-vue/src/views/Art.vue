<template>
    <div class="page">
        <section v-for="image in artImages"
            :key="image.id"
            class="gallery__section">
            <a :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                class="gallery__link">
                <img v-lazy="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="gallery__image">
            </a>

            <a :href="require(`@/assets/img/${ artDirectory }/${ image.file }`)"
                class="gallery__name">
                {{ image.name }}
            </a>
        </section>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Provide, Prop } from "vue-property-decorator";

    import ArtModel from "../models/ArtModel";
    import IArt from "../interfaces/IArt";

    @Component(
        {
        }
    )
    export default class Art extends Vue {
        @Prop({
            default: 0
        }) artIndex: number;

        mounted() {
            console.log(this.artIndex);
        }

        private artModel: ArtModel = new ArtModel();
        private artModelValue = this.artModel.art;
        private art = this.artModelValue[this.artIndex];

        @Provide() artDirectory = this.art.directory;
        @Provide() artImages = this.art.images;
    }
</script>