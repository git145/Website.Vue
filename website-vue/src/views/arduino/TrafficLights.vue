<template>
    <div id="top" class="page">
        <h2>Traffic Lights</h2>

        <iframe
            src="https://www.youtube.com/embed/pm6Rjz3vErU"
            allowfullscreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="An Arduino traffic light system"
            class="youtube page__image--margin"
        ></iframe>

        <img
            v-lazy="require('@/assets/img/arduino/traffic_lights.png')"
            alt="Arduino traffic lights diagram"
            title="Arduino traffic lights diagram"
            class="arduino__image"
        />

        <a
            href="./code/arduino/traffic_lights.ino"
            download
            title="A link to the code for the Arduino traffic light system"
        >Download the code</a>

        <a href="#top" title="Return to the top of the page" class="page__link">Return to the top</a>
    </div>
</template>