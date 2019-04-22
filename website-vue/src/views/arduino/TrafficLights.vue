<template>
    <v-container id="top">
        <v-layout justify-center>
            <h2>Traffic Lights</h2>
        </v-layout>

        <v-layout justify-center>
            <iframe
                src="https://www.youtube.com/embed/pm6Rjz3vErU"
                allowfullscreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="An Arduino traffic light system"
                class="youtube"
            ></iframe>
        </v-layout>

        <v-layout justify-center>
            <img
                v-lazy="require('@/assets/img/arduino/traffic_lights.png')"
                alt="Arduino traffic lights diagram"
                title="Arduino traffic lights diagram"
                class="arduino__image"
            >
        </v-layout>

        <v-layout>
            <a
                href="./code/arduino/traffic_lights.ino"
                download
                title="A link to the code for the Arduino traffic light system"
            >Download the code</a>
        </v-layout>

        <v-layout justify-end>
            <a href="#top" title="Return to the top of the page">Return to top</a>
        </v-layout>
    </v-container>
</template>