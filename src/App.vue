<template>
    <div id="app">
        <vheader/>
        <router-view/>
    </div>
</template>

<script>
import Vheader from "./components/header.vue";
export default {
    name: "App",
    components: {
        Vheader
    }
};
</script>

<style>

</style>