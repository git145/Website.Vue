<template>
    <footer>
        <section>
            <ul>
                <li>
                    <a href="#">
                        LinkedIn
                    </a>
                </li>

                <li>
                    <a href="#">
                        Coroflot
                    </a>
                </li>

                <li>
                    <a href="#">
                        Hiive
                    </a>
                </li>

                <li>
                    <a href="#">
                        GitHub
                    </a>
                </li>

                <li>
                    <a href="#">
                        Email
                    </a>
                </li>
            </ul>
        </section>

        <section>
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