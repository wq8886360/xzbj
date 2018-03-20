<template>
    <div class="personal">
        <search/>
        <div class="head-content">
            <!-- 个人中心左边 -->
            <div class="head-left">
                <p>个人中心</p>
                <div class="head-bottom">
                    <ul>
                        <li>我的订单</li>
                        <li>地址管理</li>
                        <li>个人信息</li>
                    </ul>
                </div>
            </div>
            <!-- 个人中心右边 -->
            <div class="head-right">
                <Tabs active-key="key1">
                    <Tab-pane label="全部订单" key="key1">全部订单</Tab-pane>
                        
                    <Tab-pane label="待付款" key="key2">待付款</Tab-pane>
                    <Tab-pane label="待发货" key="key3">待发货</Tab-pane>
                    <Tab-pane label="待收货" key="key3">待收货</Tab-pane>
                </Tabs>
                <!-- <div class="heading">
                    <ul>
                        <li class="goods">商品</li>
                        <li class="price">单价(元)</li>
                        <li class="numeber">数量</li>
                        <li class="payment">实付款(元)</li>
                        <li class="state">交易状态</li>
                        <li class="operate">操作</li>
                    </ul>
                </div> -->
                <!-- 订单 -->
                <!-- <div class="order">
                    <div class="order-title">
                        <span>订单编号：20170220199165478962</span>
                        <span>2018-3-12 13:56</span>
                        <span>店铺：坚哥一号店</span>
                    </div>
                    <div class="order-box">
                        <div class="order-left">
                            <ul>
                                <li>
                                    <img src="../assets/img/bathroom.jpg" alt="">
                                </li>
                                <li class="spec">
                                    <span>西门子开关面板西门子开关面板</span>
                                    <p>800*800mm</p>
                                </li>
                                <li class="rate">
                                    <p>24.00</p>
                                </li>
                                <li class="amount">
                                    <p>5</p>
                                </li>
                            </ul>
                        </div>
                        <div class="order-right">
                            <ul>
                                <li class="cost">
                                    <span>¥120.00</span>
                                    <p>（包邮）</p>
                                </li>
                                <li class="details">
                                    <p>买家已付款</p>
                                    <p>订单详情</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->

            </div>

        </div>

    </div>

</template>
<script>
import Search from "../components/search.vue";
import { Icon, Tabs, TabPane } from "iview";
export default {
    components: {
        Search,
        Tabs,
        TabPane

    }
}


</script>
<style lang="less">
@import "../assets/styles/personal.less";
</style>
