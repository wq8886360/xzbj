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
        <div class="have" v-if="true">
            <!-- 商品图片 -->
            <div class="gooddetail-picture">
                <div class="gooddetail-left">
                    <div class="img-box">
                        <img src="../assets/img/bathroom.jpg" alt="">
                        <div class="gooddetail-left-mask">
                            <p>商品编号：54871</p>
                        </div>
                    </div>

                    <p class="telephone">
                        售后联系电话：13866668888
                    </p>
                </div>

                <div class="gooddetail-right">
                    <p class="good-title">宜家现代日式双人床</p>
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
                    <div class="options">
                        <div class="spec">
                            <div class="label">规格：</div>
                            <div class="item">
                                <ul>
                                    <li :class="{active: index == specs_index}" v-for="(item,index) in 4" :key="index" @click="chosee_specs(index)">1.5*2mm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="distribution">
                            <div class="label">配送至：</div>
                            <div class="item">
                                <Select v-model="model1" style="width:120px;height: 32px;">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="model2" style="width:120px;height: 32px;">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <Select v-model="model3" style="width:120px;height: 32px;">
                                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                        </div>
                        <div class="num">
                            <div class="label">数量：</div>
                            <div class="item">
                                <div class="num-input">
                                    <div class="reduce">
                                        <Icon type="minus-round"></Icon>
                                    </div>
                                    <span>1</span>
                                    <div class="add">
                                        <Icon type="plus-round"></Icon>
                                    </div>
                                </div>
                                <span class="stock">库存1234件</span>
                            </div>
                        </div>
                        <div class="num">
                            <div class="label">收货时间：</div>
                            <div class="item">
                                <Select v-model="model4" style="width:120px;height: 32px;">
                                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                        </div>
                        <div class="operation">
                            <div class="label"></div>
                            <div class="item">
                                <button class="buy">立即购买</button>
                                <button class="join-car">加入购物车</button>
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
                <ul>
                    <li v-for="item in 2" style='background-image: url(http://img5.imgtn.bdimg.com/it/u=2003488071,325628006&fm=27&gp=0.jpg)'>
                        <div class="show-mask">
                            <span>欧式原木大床</span>
                            <div class="show-content">
                                <p>材质：橡木原木</p>
                                <p>尺寸：200*200*60mm</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="un-have" v-if="false">
            <div class="unhave-imgage">
                <img src="../assets/img/pig.png" alt="">
            </div>
            <div class="unhave-warn">
                <p>亲爱的，很抱歉，小猪家的商品已经删除
                    <span class="other">其他商品</span>
                    <Icon type="ios-arrow-right"></Icon>
                    <Icon class="dent" type="ios-arrow-right"></Icon>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "../components/search.vue";
import { Icon, Breadcrumb, BreadcrumbItem, Select, Option } from "iview";
export default {
    components: {
        Search,
        Breadcrumb,
        BreadcrumbItem,
        Select,
        Option,
        Icon
    },
    data() {
        return {
            specs_index: null,
            cityList: [
                {
                    value: "New York",
                    label: "New York"
                },
                {
                    value: "London",
                    label: "London"
                },
                {
                    value: "Sydney",
                    label: "Sydney"
                },
                {
                    value: "1",
                    label: "1"
                },
                {
                    value: "2",
                    label: "2"
                },
                {
                    value: "Ottawa",
                    label: "Ottawa"
                },
                {
                    value: "Paris",
                    label: "Paris"
                },
                {
                    value: "Canberra",
                    label: "Canberra"
                }
            ],
            cityList2: [
                {
                    value: "收货时间不限",
                    label: "收货时间不限"
                },
                {
                    value: "周一至周五",
                    label: "周一至周五"
                },
                {
                    value: "周六日/节假日",
                    label: "周六日/节假日"
                }
            ],
            model1: "",
            model2: "",
            model3: "",
            model4: ""
        };
    },
    methods: {
        chosee_specs(index) {
            this.specs_index = index;
        }
    }
};
</script>
<style lang="less">
@import "../assets/styles/gooddetail.less";
</style>

