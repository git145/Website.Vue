<template>
    <v-container id="top">
        <v-layout justify-center>
            <h2>Introduction</h2>
        </v-layout>

        <v-layout justify-center>
            <img v-lazy="require('@/assets/img/me.png')" alt="Me" title="Me" class="page__image">
        </v-layout>

        <v-layout>
            <p>
                Welcome to my website. The website serves as my portfolio, and contains examples of work related to
                personal, student, or professional projects I have completed. The links, or images, below can be used
                to view further assets related to the projects. Included are examples of graphic illustration, concept
                designs, games, 3D models, Arduino projects, and music. I will add to the site as I produce more work.
                You are welcome to contact me with professional enquiries through LinkedIn, Coroflot, Hiive, or by
                email.
                <a
                    href="mailto:richardkneale@hotmail.co.uk"
                    target="_top"
                >My CV is available on request.</a>
            </p>
        </v-layout>

        <v-layout justify-center>
            <h3>Profile</h3>
        </v-layout>

        <v-layout column>
            <p>
                I am a hard-working and approachable individual. In my free time I like to complete self-directed
                learning because I enjoy learning new skills, which I develop quickly. I can work both individually and
                in a team. I enjoy encouraging others to make best use of their abilities. I have implemented and
                maintain a website.
            </p>

            <p>
                I play many video games and develop my own in my free time. I am a keen graphic illustrator. I was a
                member of art societies in both primary and secondary school. I have a love of music and taught myself
                to play the electric guitar. I am interested in sports. I enjoy watching football and snooker, as well
                as professional wrestling.
            </p>
        </v-layout>

        <v-layout justify-center>
            <h3>Key Skills</h3>
        </v-layout>

        <v-layout>
            <ul>
                <li
                    class="page__list-item"
                >Degrees in Computer Science (MSc) and Mechanical Engineering (MEng).</li>

                <li
                    class="page__list-item"
                >Programming in Arduino, C#, CSS, HTML5, Java, JavaScript, MATLAB, PHP, Python, RAPID and Sass.</li>

                <li
                    class="page__list-item"
                >Experience implementing an interface, in relation to user experience.</li>

                <li
                    class="page__list-item"
                >Knowledge of OWL, RDF, SPARQL, and XML in relation to the semantic web.</li>

                <li class="page__list-item">Knowledge of the model-view-controller architecture.</li>

                <li
                    class="page__list-item"
                >Experience of content management systems, including Drupal and WordPress.</li>

                <li
                    class="page__list-item"
                >Database design using the relational model, and implementation with MySQL.</li>

                <li class="page__list-item">Knowledge of Git.</li>

                <li
                    class="page__list-item"
                >Graphic illustration, using graphics editors including Fireworks, PaintTool SAI, and Photoshop.</li>

                <li class="page__list-item">Knowledge of Web Content Accessibility Guidelines.</li>

                <li
                    class="page__list-item"
                >Experience developing applications using Android Studio, Eclipse, Notepad++, and Unity.</li>

                <li
                    class="page__list-item"
                >Knowledge of continuous improvement, kanban, and test-driven development.</li>

                <li class="page__list-item">Experience programming for artificial intelligence.</li>

                <li class="page__list-item">Experience leading a design project.</li>

                <li class="page__list-item">Excellent mathematical ability and written English.</li>
            </ul>
        </v-layout>

        <v-layout justify-end>
            <a href="#top" title="Return to the top of the page">Return to the top</a>
        </v-layout>
    </v-container>
</template>