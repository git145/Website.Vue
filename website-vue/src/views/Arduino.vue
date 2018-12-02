<template>
    <div class="page">
        <h2>
            Traffic lights
        </h2>

        <iframe src="https://www.youtube.com/embed/pm6Rjz3vErU"
            allowfullscreen
            title = "An Arduino traffic light system">
        </iframe>

        <a href="code/arduino/traffic_lights.ino"
            download
            class = "align-center"
            title = "A link to the code for the Arduino traffic light system">
            Download the code
        </a>

        <img v-lazy="'images/arduino/001Traffic_Lights.png'"
            alt="Arduino traffic lights diagram"
            title="Arduino traffic lights diagram">
    </div>
</template>