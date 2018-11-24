<template>
    <div class="page">
        <section v-for="image in images"
            :key="image.id"
            class="card">
            <a :href="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                class="gallery__image-link">
                <img v-lazy="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="gallery__image">
            </a>

            <a :href="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                class="gallery__image-name">
                {{ image.name }}
            </a>
        </section>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    import IImage from "../../interfaces/IImage";

    @Component(
        {
        }
    )
    export default class Temples extends Vue {
        @Provide() private imagesDirectory: string = "temples";

        @Provide() private images: IImage[] = [
            {
                name: "Day Temple",
                nameFile: "temple_day.png"
            },
            {
                name: "Night Temple",
                nameFile: "temple_night.png"
            },
            {
                name: "Sunny Temple",
                nameFile: "temple_sunny.png"
            },
            {
                name: "Rainy Temple",
                nameFile: "temple_rainy.png"
            },
            {
                name: "Temple Render",
                nameFile: "temple_render.png"
            },
            {
                name: "Pyramid of Khufu",
                nameFile: "pyramid_of_khufu.png"
            }
        ]
    }
</script>