<template>
    <div class="index">
        <div class="head">
            <div class="head-logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="head-search">
                <input type="text" placeholder="请输入">
                <img src="../assets/img/search_nor.png" alt="">
            </div>
        </div>
        <!-- 全部商品分类 -->
        <div class="banner">
            <div class="banner-classify">
                <p>全部商品分类
                    <Icon class="ios-arrow-down" type="ios-arrow-down"></Icon>
                </p>
            </div>
            <div class="banner-menu">
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
        <template>
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
        </template>
        <!-- 家具商品 -->
        
        <div class="goods">
            <div class="goods-title">
                <span class="goods-headline">家居商品</span>
                <div class="goods-more">
                    <span class="goods-added">更多</span>
                    <Icon type="ios-arrow-right"></Icon>
                    <Icon type="ios-arrow-right"></Icon>
                </div>
            </div>

            <div class="goods-list">
                <ul>
                    <li>
                        <div class="good-picture">
                            <img src="../assets/img/houseHold.jpg">
                            <div class="good-genre">
                                <p>家居</p>
                                <span>高品质生活的首选</span>
                            </div>
                        </div>
                    </li>
                </ul>
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
        return {

        }
    }
}
</script>
<style lang="less">
@import "../assets/styles/index.less";
</style>
