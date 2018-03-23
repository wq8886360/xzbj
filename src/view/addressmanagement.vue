<template>
    <div class="addressmanagement">
        <div class="add">
            <button>新增收货地址</button>
            <span>（已添加2条，最多可添加10条）</span>
        </div>
        <div class="address-list">
            <div class="thead">
                <span class="h-name">收货人</span>
                <span class="h-adress">收货地址</span>
                <span class="h-tel">联系电话</span>
                <span class="h-edit">操作</span>
            </div>
            <div class="item" v-for="item in 4">
                <span class="name">坚哥</span>
                <span class="adress">浙江省杭州市滨江区滨安路650号IX-work大厦203</span>
                <span class="tel">15558038093</span>
                <span class="edit">
                    <i>修改</i>
                    <i class="del">删除</i>
                    <i>设为默认地址</i>
                </span>
            </div>
        </div>
        <addressmodal :visible.sync="state"></addressmodal>
    </div>
</template>
<script>
import Addressmodal from "../components/adressmodal.vue";
export default {
    components: {
        Addressmodal
    },
    data() {
        return {
            state: true
        };
    }
};
</script>
<style lang="less">
@import "../assets/styles/addressmanagement.less";
</style>


