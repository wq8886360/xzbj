<template>
    <div id="app">
        <vheader/>
        <router-view/>
        <vfooter/>
    </div>
</template>

<script>
import Vheader from "./components/header.vue";
import Vfooter from "./components/footer.vue";
export default {
    name: "App",
    components: {
        Vheader,
        Vfooter
    }
};
</script>

<style>
#app {
    overflow: hidden;
}
</style>