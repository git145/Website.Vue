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
    import { Vue, Component, Provide } from "vue-property-decorator";

    @Component(
        {
        }
    )
    export default class Art extends Vue {
        get art() {
            return this.$store.state.art;
        }

        @Provide() artDirectory = this.art.directory;
        @Provide() artImages = this.art.images;
    }
</script>