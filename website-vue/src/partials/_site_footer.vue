<template>
    <footer>
        &copy; Richard Kneale {{ getYear() }}
    </footer>
</template>

<script lang='ts'>
    import { Vue, Component } from "vue-property-decorator";

    @Component({
    })
    export default class SiteFooter extends Vue {
        private getYear(): number {
            const date = new Date();

            return date.getFullYear();
        }
    }
</script>