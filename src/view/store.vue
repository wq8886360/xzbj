<template>
    <div class="store">
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
        <!-- 品牌 -->
        <div class="sign">
            <p class="name">斯米克</p>
            <p class="english">cimic</p>
            <p class="major">主营：瓷砖、大理石</p>
        </div>
        <!-- 商品 -->
        <div class="goods-box">
            <div class="good" v-for="item in 2 ">
                <!-- 商品列表 -->
                <div class="ware">
                    <div class="ware-title">
                        <p class="wares">热门商品</p>
                        <p class="more">更多
                            <Icon class="ios-more-right" type="ios-arrow-right"></Icon>
                            <Icon class="ios-right" type="ios-arrow-right"></Icon>
                        </p>
                    </div>
                    <div class="ware-list" v-for="item in 20 ">
                        <div class="item" style="background-image:url(http://hiphotos.baidu.com/feed/pic/item/ac345982b2b7d0a2b7a99b01c0ef76094a369ace.jpg)"> </div>
                        <p class="name">铂晶石理石纹</p>
                        <p class="number">M08080KP-1</p>
                        <p class="price">¥658</p>
                        <div class="ware-mask">
                            <p class="model">型号：YS1D80</p>
                            <span class="shop">简一大理石杭州分店</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon, Carousel, CarouselItem } from "iview";
export default {
    components: {
        Icon,
        Carousel,
        CarouselItem
    },
    data() {
        return {};
    }
};
</script>
<style lang="less">
@import "../assets/styles/store.less";
</style>
