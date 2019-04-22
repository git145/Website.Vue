<template>
    <v-container id="top">
        <v-layout justify-center>
            <h2>Music</h2>
        </v-layout>

        <v-layout justify-center>
            <iframe
                src="https://www.youtube.com/embed/Qd9P51-aWJk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="The video for &quot;Daydream&quot;"
                class="youtube"
            ></iframe>
        </v-layout>

        <v-layout justify-center>
            <h3>
                <p>
                    Daydream (
                    <a
                        :href="require('@/assets/music/daydream.mp3')"
                        download
                        title="Link to download the mp3"
                    >download the mp3</a>
                    )
                </p>
            </h3>
        </v-layout>

        <v-layout justify-center>
            <iframe
                src="https://www.youtube.com/embed/fhG2QQ0aAac"
                allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="The video for &quot;Feel It&quot;"
                class="youtube"
            ></iframe>
        </v-layout>

        <v-layout justify-center>
            <h3>
                <p class="music__title">
                    Feel It (
                    <a
                        :href="require('@/assets/music/feel_it.mp3')"
                        download
                        title="Link to download the mp3"
                    >download the mp3</a>
                    )
                </p>
            </h3>
        </v-layout>

        <v-layout justify-end>
            <a href="#top" title="Return to the top of the page">Return to the top</a>
        </v-layout>
    </v-container>
</template>