<template>
    <footer>
        <section class="footer-links">
            <ul class="footer-links__list">
                <li class="footer-links__item">
                    <a href="#">
                        LinkedIn
                    </a>
                </li>

                <li class="footer-links__item">
                    <a href="#">
                        Coroflot
                    </a>
                </li>

                <li class="footer-links__item">
                    <a href="#">
                        Hiive
                    </a>
                </li>

                <li class="footer-links__item">
                    <a href="#">
                        GitHub
                    </a>
                </li>

                <li class="footer-links__item">
                    <a href="#">
                        Email
                    </a>
                </li>
            </ul>
        </section>

        <section class="copyright">
            &copy; Richard Kneale {{ getYear() }}
        </section>
    </footer>
</template>

<script lang='ts'>
    import { Vue, Component } from "vue-property-decorator";

    @Component(
        {
        }
    )
    export default class SiteFooter extends Vue {
        private getYear(): number {
            const date = new Date();

            return date.getFullYear();
        }
    }
</script>