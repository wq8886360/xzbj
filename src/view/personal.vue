<template>
    <div class="personal">
        <search/>
        <!-- 个人中心左边 -->
        <div class="head-left">
            <p>个人中心</p>
            <div class="head-bottom">
                <ul>
                    <li>我的订单</li>
                    <li>地址管理</li>
                    <li>个人信息</li>
                </ul>
            </div>
        </div>
        <!-- 个人中心右边 -->

    </div>

</template>
<script>
import Search from "../components/search.vue";
import { Icon } from "iview";
export default {
    components: {
        Search
    }
}


</script>
<style lang="less">
@import "../assets/styles/personal.less";
</style>
