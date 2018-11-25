<template>
    <div class="page">
        <section v-for="image in images"
            :key="image.id"
            class="gallery__section">
            <a :href="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                class="gallery__link">
                <img v-lazy="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="gallery__image">
            </a>

            <a :href="require(`@/assets/img/${ imagesDirectory }/${ image.nameFile }`)"
                class="gallery__name">
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
    export default class Miscellaneous extends Vue {
        @Provide() private imagesDirectory: string = "miscellaneous";

        @Provide() private images: IImage[] = [
            {
                name: "Gaige",
                nameFile: "gaige.png"
            },
            {
                name: "Gaige (Lines)",
                nameFile: "gaige_lines.png"
            }
        ]
    }
</script>