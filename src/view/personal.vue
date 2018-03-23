<template>
    <div class="personal">
        <search/>
        <div class="head-content">
            <!-- 个人中心左边 -->
            <div class="head-left">
                <p>个人中心</p>
                <div class="head-bottom">
                    <ul>
                        <li><router-link to="/personal/myorder">我的订单</router-link></li>
                        <li><router-link to="/personal/addressmanagement">地址管理</router-link></li>
                        <li><router-link to="/personal/personalinformation">个人信息</router-link></li>
                    </ul>
                </div>
            </div>
            <!-- 个人中心右边 -->
            <div class="head-right">
                <router-view></router-view>
            </div>

        </div>

    </div>

</template>
<script>
import Search from "../components/search.vue";
export default {
    components: {
        Search
    }
};
</script>
<style lang="less">
@import "../assets/styles/personal.less";
</style>
