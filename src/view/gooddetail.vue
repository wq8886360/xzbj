<template>
    <div class="gooddetail">
        <search/>
        <div class="goodtail-head">
            <div class="goodtail-title">
                <Breadcrumb>
                    <Breadcrumb-item href="/">首页</Breadcrumb-item>
                    <Breadcrumb-item href="/components/breadcrumb">家居</Breadcrumb-item>
                    <Breadcrumb-item>沙发</Breadcrumb-item>
                    <Breadcrumb-item>宜家现代日式双人床</Breadcrumb-item>
                </Breadcrumb>
            </div>
        </div>
        <!-- 商品图片 -->
        <div class="gooddetail-picture">
            <div class="gooddetail-left">
                <img src="../assets/img/bathroom.jpg" alt="">
                <div class="gooddetail-left-mask">
                    <p>商品编号：54871</p>
                </div>
            </div>

            <div class="telephone">
                <p>售后联系电话：13866668888</p>
            </div>

            <div class="gooddetail-right">
                <p>宜家现代日式双人床</p>
                <div class="gooddetail-right-pirce">
                    <ul class="gooddetail-up">
                        <li class="title">小猪扮家价</li>
                        <li class="price">6788元</li>
                        <li class="icon"><img src="../assets/img/discountPrice.png" alt=""></li>
                    </ul>
                    <ul class="gooddetail-down">
                        <li class="market">市场价</li>
                        <li class="sale">7988元</li>
                    </ul>
                </div>
                <div class="norms">
                    <div class="norms-left label">
                        <p>规格：</p>
                    </div>
                    <div class="norms-right">
                        <ul>
                            <li v-for="item in 4">1.5*2mm</li>
                        </ul>
                    </div>
                </div>

                <div class="dispatching">
                    <div class="norms-left label">
                        <p>配送至：</p>
                    </div>
                </div>

                <div class="number">
                    <div class="number-left label">
                        <p>数量：</p>
                    </div>
                </div>

                <div class="purchase">
                    <div>
                        <div class="purchase-left label">
                            <p>收货时间：</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- 商品详情 -->
        <div class="detaile">
            <h5>商品详情</h5>
            <!-- 表格 -->
            <div class="thead">产品规格参数</div>
            <table class="table">
                <tr>
                    <td>品牌</td>
                    <td>朋杰家居</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">型号</td>
                    <td>A-434461</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">规格</td>
                    <td>1.5*2.0m</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">型号</td>
                    <td>A-434461</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">材质</td>
                    <td>橡树实木</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">工艺</td>
                    <td>机器打磨</td>
                </tr>
                <tr class="alter">
                    <td class="alter-title">类型</td>
                    <td>家居</td>
                </tr>
            </table>

        </div>

        <div class="show">
            <img src="../assets/img/bathroom.jpg" alt="">
            <div class="show-mask">
                <span>欧式原木大床</span>
                <div class="show-content">
                    <p>材质：橡木原木</p>
                    <p>尺寸：200*200*60mm</p>
                </div>
            </div>
            <img src="../assets/img/bathroom.jpg" alt="">
            <div class="show-cover">
                <span>欧式原木大床</span>
                <div class="show-content">
                    <p>手工打磨，机器抛光</p>
                    <p>80后创意工艺设计师原创设计</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Search from "../components/search.vue";
import { Icon, Breadcrumb, BreadcrumbItem, } from "iview";
export default {
    components: {
        Search,
        Breadcrumb,
        BreadcrumbItem
    }
};
</script>
<style lang="less">
@import "../assets/styles/gooddetail.less";
</style>

