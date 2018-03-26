<template>
    <div class="classificationList">
        <search></search>
        <!-- 三级类目头部 -->
        <div class="goodsclass">
            <div class="goodsclass-head area">
                <span class="mar-right">首页</span>
                <Icon type="ios-arrow-right" class="mar-right"></Icon>
                <span class="mar-right">家具商品</span>
                <Icon type="ios-arrow-right" class="mar-right"></Icon>
                <span class="mar-right">成套家具</span>
                <Icon type="ios-arrow-right" class="mar-right"></Icon>
                <span>客厅成套家具</span>
            </div>
        </div>
        <!-- 物品选择 -->
        <div class="goodschoose">
            <div class="goodsch-conent">
                <div class="leimu">
                    <span class="ml gray bpfl">品牌：</span>
                    <div class="bp">
                        <span class="green">全部</span>
                        <span class="green" v-for="(item,index) in 10" :key="index">明杰家具</span>
                    </div>
                    <div class="down-up" @click="updown">
                        <Icon type="ios-arrow-down" v-if="down"></Icon>
                        <Icon type="ios-arrow-up" v-if="up"></Icon>
                    </div>          
                </div>
                <div class="leimu">
                    <span class="ml gray">风格：</span>
                    <span>全部</span>
                    <span>简约现代</span>
                    <span>北欧风格</span>
                    <span>地中海</span>
                    <span>现代中式</span>
                    <span>现代中式</span>
                </div>
                <div class="leimu">
                    <span class="gray">设计风格：</span>
                    <span>全部</span>
                    <span>简约现代</span>
                    <span>北欧风格</span>
                    <span>地中海</span>
                    <span>现代中式</span>
                    <span>现代中式</span>
                </div>
            </div>
        </div>
        <!-- 中间产品部分 -->
        <div class="class-mian">
            <div class="area">
                <!-- 选择价格 -->
                <div class="price-choose">
                    <ul>
                        <li class="px">排序</li>
                        <li>默认排序</li>
                        <li class="price-updown">
                            <span>价格</span>
                            <Icon type="ios-arrow-up" class="price-up"></Icon>
                            <Icon type="ios-arrow-down" class="price-down"></Icon>             
                        </li>
                        <li class="money-section mdl">
                            <Icon type="social-yen" class="greh"></Icon>
                            <input type="text">
                        </li>
                        <li class="mdl">
                            <span>—</span>
                        </li>
                        <li class="money-section">
                            <Icon type="social-yen" class="greh"></Icon>
                            <input type="text">
                        </li>
                        <li class="make-sure">
                            确定
                        </li>
                    </ul>
                </div>
                <!-- 商品 -->
                <div class="goodslist">
                    <div class="good-picture" v-for="(item,index) in 10" :key="index">
                        <img src="../assets/img/bathroom.jpg" alt="">
                        <div class="good-title">
                            <p>复古式电视柜</p>
                            <span class="model">YS1D80</span>
                        </div>
                        <!-- 悬浮 -->
                        <div class="good-mask">
                            <p>型号：YS1D80</p>
                            <span>解忧杂货铺</span>
                        </div>
                    </div>
                </div>
                <!-- 分页 -->
                <div class="page">
                    <Page :total="100" :page-size="5" show-elevator show-total class="page-fy"></Page>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "../components/search.vue";
import {Icon,Page} from "iview"
export default {
    components: {
        Search,
        Icon,
        Page
    },
    data() {
        return {
            down:true,
            up:false,
        };
    },
    methods: {
        updown () {
            if(this.down){
                this.down = false
                this.up = true
            }else{
                this.down = true
                this.up = false
            }
        }
    }
};
</script>
<style lang="less">
@import "../assets/styles/classificationList.less";
</style>

