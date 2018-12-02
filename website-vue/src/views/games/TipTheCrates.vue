<template>
    <div class="page">
        <h2>
            Hello Tip the Crates!
        </h2>

        <router-view :key="$route.fullPath"/>
    </div>
</template>