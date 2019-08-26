<template>
    <div id="top" class="page">
        <h2>Music</h2>

        <section v-for="musicItem in music" :key="musicItem.id" class="page__section">
            <iframe
                :src="musicItem.url"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                :title="`The video for &quot;${musicItem.name}&quot;`"
                class="youtube"
            ></iframe>

            <h3 class="page__title--center">
                {{ musicItem.name }} (
                <a
                    :href="require(`@/assets/music/${musicItem.audioFile}`)"
                    download
                    title="A link to download the file"
                >download</a>
                )
            </h3>
        </section>

        <a href="#top" title="Return to the top of the page" class="page__link">Return to the top</a>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Provide, Prop } from "vue-property-decorator";

import MusicModel from "../models/MusicModel";
import ILink from "@/interfaces/ILink";

@Component({})
export default class Music extends Vue {
    private musicModel: MusicModel = new MusicModel();

    @Provide() private music: ILink[] = this.musicModel.music;
}
</script>