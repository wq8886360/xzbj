<template>
    <div class="wypayconfirm">
        <Search></Search>
        <div class="wypaysuccess">
            <img src="../assets/img/state.png">
            <p>网银支付界面链接该支付银行方！</p>
        </div>
    </div>       
</template>
<script>
import Search from "../components/search"
export default {
    components: {
        Search,
    },
    data () {
        return {
        }
    },
    methods: {

    }   
}
</script>
<style lang="less">
@import "../assets/styles/wypayconfirm.less";
</style>