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
                                <span>成套家具</span>
                                <p>多款风格，多重工艺</p>
                                <p class="goods-price">¥1349起</p>
                            </div>
                        </div>
                        <div class="good-list-right">
                            <div class="good-picture" v-for="(item,index) in 8" :key="index">
                                <!-- v-for="(item,index) in 8" :key="index" -->
                                <img src="../assets/img/bathroom.jpg" alt="">
                                <div class="good-title">
                                    <p>复古式电视柜</p>
                                    <span class="model">YS1D80</span>
                                </div>

                                <div class="good-mask">
                                    <p>型号：YS1D80</p>
                                    <span>解忧杂货铺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 建材商品 -->
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
                                <span>成套家具</span>
                                <p>多款风格，多重工艺</p>
                                <p class="goods-price">¥1349起</p>
                            </div>
                        </div>
                        <div class="good-list-right">
                            <div class="good-picture" v-for="(item,index) in 8" :key="index">
                                <!-- v-for="(item,index) in 8" :key="index" -->
                                <img src="../assets/img/bathroom.jpg" alt="">
                                <div class="good-title">
                                    <p>复古式电视柜</p>
                                    <span class="model">YS1D80</span>
                                </div>

                                <div class="good-mask">
                                    <p>型号：YS1D80</p>
                                    <span>解忧杂货铺</span>
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
