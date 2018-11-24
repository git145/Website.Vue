<template>
    <div class="page">
        <h2>
            Hello {{ images[0] }}!
        </h2>
    </div>
</template>

<script lang='ts'>
    import { Vue, Component, Provide } from "vue-property-decorator";

    @Component(
        {
        }
    )
    export default class Temples extends Vue {
        @Provide() private images: string[] = [
            "Temples"
        ]
    }
</script>