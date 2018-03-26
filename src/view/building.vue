<template>
    <div class="building">
        <search/>
        <!-- 全部商品分类 -->
        <div class="banner">
            <div class="banner-classify">
                <p class="classify-title">
                    全部商品分类
                    <Icon class="ios-arrow-down" type="ios-arrow-down"></Icon>
                </p>
                <div class="banner-dropdown">
                    <ul>
                        <li>
                            <div class="menu-content">
                                装修主材
                                <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                            </div>
                            <div class="menu-list">
                                <div class="item">
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="menu-content">
                                家具软装
                                <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                            </div>
                            <div class="menu-list">
                                <div class="item" v-for="item in 4">
                                    <p class="title">成套家具</p>
                                    <div class="list">
                                        <span v-for="item in 10">客厅成套餐具</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="menu">
                <ul>
                    <li>首页</li>
                    <li>建材商品</li>
                    <li>家居商品</li>
                    <li>品牌活动</li>
                    <li>整包方案</li>
                    <li>户型</li>
                </ul>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class="ivue-banner">
            <Carousel autoplay v-model="value1" arrow="never" loop>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../assets/img/banner.jpg" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../assets/img/banner.jpg" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../assets/img/banner.jpg" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../assets/img/banner.jpg" alt=""></div>
                </Carousel-item>
                <Carousel-item>
                    <div class="demo-carousel"><img src="../assets/img/banner.jpg" alt=""></div>
                </Carousel-item>
            </Carousel>
        </div>
        <!-- 瓷砖 -->
        <div class="ware-box">
            <div class="ware">
                <div class="category" v-for="item in 4">
                    <div class="title">
                        <p class="title-text">瓷砖</p>
                        <p class="more">更多
                            <Icon class="ios-more-right" type="ios-arrow-right"></Icon>
                            <Icon class="ios-right" type="ios-arrow-right"></Icon>
                        </p>
                    </div>
                    <div class="category-list">
                        <div class="class" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521717059213&di=b724cb462004c0578582b93a6fe72906&imgtype=0&src=http%3A%2F%2Fwww.tianya999.com%2Fuploads%2Fallimg%2F171103%2F2296-1G1030Z436.jpg)">
                            <span>瓷砖</span>
                            <p>行走在时尚的路上</p>
                        </div>
                        <div class="smallclass" v-for="item in 4">
                            <div class="smallclass-picture" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521716939218&di=8a2c1cb85964860ca0f57b34347134d7&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F7%2F70%2F700FFFDAE32D49B434FD008241C61069.gif)"></div>
                            <p class="name">铂晶石理石纹</p>
                            <p class="number">M08080KP-1</p>
                            <p class="price">¥658</p>
                            <div class="smallclass-mask ">
                                <p class="model ">型号：YS1D80</p>
                                <span class="shop ">简一大理石杭州分店</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "../components/search.vue";
import { Icon, Carousel, CarouselItem, } from 'iview';
export default {
    components: {
        Icon,
        Carousel,
        CarouselItem,
        Search
    },
    data() {
        return {
            value1: 0
        };
    }
};
</script>
<style lang="less">
@import "../assets/styles/building.less";
</style>
