<template>
    <div id="top" class="page music">
        <h2>Music</h2>

        <section class="music__video-wrapper">
            <iframe
                src="https://www.youtube.com/embed/Qd9P51-aWJk"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="The video for &quot;Daydream&quot;"
                class="youtube"
            ></iframe>

            <h3>
                Daydream (
                <a
                    :href="require('@/assets/music/daydream.mp3')"
                    download
                    title="A link to download the mp3"
                >download the mp3</a>
                )
            </h3>
        </section>

        <section class="music__video-wrapper">
            <iframe
                src="https://www.youtube.com/embed/fhG2QQ0aAac"
                allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="The video for &quot;Feel It&quot;"
                class="youtube"
            ></iframe>

            <h3>
                Feel It (
                <a
                    :href="require('@/assets/music/feel_it.mp3')"
                    download
                    title="A link to download the mp3"
                >download the mp3</a>
                )
            </h3>
        </section>

        <a href="#top" title="Return to the top of the page" class="page__link">Return to top</a>
    </div>
</template>