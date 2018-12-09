<template>
    <div class="page"
        id="#top">
        <h2>
            {{ artModel.title }}
        </h2>

        <p>
            Completed as part of a product design and enterprise module at university.
        </p>

        <section v-for="image in artModel.images"
            :key="image.id"
            class="gallery__section">
            <a :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                class="gallery__link">
                <img v-lazy="require(`@/assets/img/${ artModel.directory }/${ image.file }`)"
                    :alt="image.name"
                    :title="image.name"
                    class="gallery__image">
            </a>

            <h3>
                <a :href="require(`@/assets/img/${ artModel.directory }/${ image.file }`)">
                    {{ image.name }}
                </a>
            </h3>
        </section>

        <h4>
            <a href="#top"
                title="Return to the top of the page">
                Return to the top
            </a>
        </h4>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Provide, Prop } from "vue-property-decorator";

    import IArt from "../../interfaces/IArt";

    @Component(
        {
        }
    )
    export default class Art extends Vue {
        @Provide() private artModel: IArt = {
            title: "Heated Cutlery",
            directory: "heated_cutlery",
            images: [
                {
                    name: "Dock",
                    file: "dock.png"
                }
            ]
        }
    }
</script>