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
                <p>
                   全部商品分类 
                   <Icon class="ios-arrow-down" type="ios-arrow-down"></Icon>
                </p>
                <div class="banner-dropdown">
                    <ul>
                        <li>装修主材 
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                        </li>
                         <li>家具软装
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                        </li>
                         <li>灯饰照明
                            <Icon class="ios-arrow-right" type="ios-arrow-right"></Icon>
                        </li>
                         <li>家用厨房电器
                            <Icon class="ios-right" type="ios-arrow-right"></Icon>
                        </li>
                    </ul>
                </div>
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
        <div class="good-box">
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
                    <div class="good-list-left">
                        <img src="../assets/img/houseHold.jpg" alt="">
                        <div class="goods-list-title">
                            <span>家居</span>
                            <p>高品质生活的首选</p>
                        </div>
                    </div>
                    <div class="good-list-right">
                        <div class="good-picture" v-for="item in 8">
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
                        <Icon type="ios-arrow-right"></Icon>
                        <Icon type="ios-arrow-right"></Icon>
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
                        <div class="good-picture" v-for="item in 8">
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
