<template>
    <div class="index">
        <div class="head">
            <div class="head-logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="head-search">
                <input type="text" placeholder="请输入">
                <Icon class="head-ios-search" type="ios-search"></Icon>
            </div>
        </div>
        <!-- 全部商品分类 -->
        <div class="banner">
            <div class="banner-classify">
                <p>
                    全部商品分类
                    <Icon class="ios-arrow-down" type="ios-arrow-down"></Icon>
                </p>
                <div class="banner-dropdown">
                    <ul>
                        <li>装修主材
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                            <div class="menu-list">
                                <div class="item" v-for="item in 8">
                                    <img src="../assets/img/houseHold.jpg" alt=""> 地板
                                </div>
                            </div>
                        </li>
                        <li>家具软装
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                            <div class="menu-list">

                            </div>
                        </li>
                        <li>灯饰照明
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                            <div class="menu-list">

                            </div>
                        </li>
                        <li>家用厨房电器
                            <Icon class="ios-right" type="ios-arrow-right"></Icon>
                            <div class="menu-list">

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
        <div class="effective" v-if="true">
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
            <!-- 家具商品 -->
            <div class="good-box">
                <div class="goods">
                    <div class="goods-title">
                        <span class="goods-headline">家居商品</span>
                        <div class="goods-more">
                            <span class="goods-added">更多</span>
                            <Icon class="goods-added-ios" type="ios-arrow-right"></Icon>
                            <Icon class="goods-added-ios" type="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <div class="goods-list">
                        <div class="good-list-left">
                            <img src="../assets/img/houseHold.jpg" alt="">
                            <div class="goods-list-title">
                                <span>家居</span>
                                <p>高品质生活的首选</p>
                            </div>
                        </div>
                        <div class="good-list-right">
                            <div class="good-picture" v-for="(item,index) in 8" :key="index">
                                <img src="../assets/img/bathroom.jpg" alt="">
                                <div class="good-mask">
                                    <p>家居·床</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 建材商品 -->
                <div class="goods">
                    <div class="goods-title">
                        <span class="goods-headline">建材商品</span>
                        <div class="goods-more">
                            <span class="goods-added">更多</span>
                            <Icon class="goods-added-ios" type="ios-arrow-right"></Icon>
                            <Icon class="goods-added-ios" type="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <div class="goods-list">
                        <div class="good-list-left">
                            <img src="../assets/img/houseHold.jpg" alt="">
                            <div class="goods-list-title">
                                <span>建材</span>
                                <p>绿色、健康、环保</p>
                            </div>
                        </div>
                        <div class="good-list-right">
                            <div class="good-picture" v-for="(item,index) in 8" :key="index">
                                <img src="../assets/img/bathroom.jpg" alt="">
                                <div class="good-mask">
                                    <p>绿色、健康、环保</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="null" v-if="false">
            <!-- 首页搜索为空 -->
            <div class="empty">
                <div class="empty-image">
                    <img src="../assets/img/commoditySearch.png" alt="">
                </div>
                <div class="empty-cue">
                    <p>亲爱的，很抱歉，没有找到与
                        <span>“烟灰色大理石”</span>相关的商品</p>
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
@import "../assets/styles/index.less";
</style>
