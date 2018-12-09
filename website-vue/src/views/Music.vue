<template>
    <div class="page">
        <h2>
            Music
        </h2>

        <iframe src="https://www.youtube.com/embed/Qd9P51-aWJk"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="The video for &quot;Daydream&quot;"
            class="youtube"></iframe>

        <h3>
            <p>
                Daydream (<a :href="require('@/assets/music/daydream.mp3')"
                    download
                    title="Link to download the mp3">
                    download the mp3
                </a>)
            </p>
        </h3>

        <iframe src="https://www.youtube.com/embed/fhG2QQ0aAac"
            allowfullscreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="The video for &quot;Feel It&quot;"
            class="youtube"></iframe>

        <h3>
            <p>
                Feel It (<a :href="require('@/assets/music/feel_it.mp3')"
                    download
                    title="Link to download the mp3">
                    download the mp3
                    </a>)
            </p>
        </h3>
    </div>
</template>