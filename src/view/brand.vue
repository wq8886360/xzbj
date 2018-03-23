<template>
    <div class="brand">
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
            <Carousel autoplay arrow="never">
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
        <!-- 品牌商城 -->
        <div class="heading">
            <h4>品牌商城</h4>
            <h6>Brand Mall</h6>
        </div>
        <!-- 家具品牌 -->
        <div class="sign" v-for="item in 2">
            <p class="title">家居品牌</p>
            <div class="sign-brand">
                <div class="item" v-for="item in 4">
                    <img src="../assets/img/buyread.jpg" alt="">
                    <div class="item-mask">
                        <p class="sign-store">美向家居</p>
                        <p class="sign-major">主营：家居</p>
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
        return {};
    }
};
</script>
<style lang="less">
@import "../assets/styles/brand.less";
</style>
