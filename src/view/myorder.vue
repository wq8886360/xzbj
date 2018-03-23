<template>
    <div class="myorder">
        <Tabs value="name1">
            <TabPane label="全部订单" name="name1">
                <div class="order-list">
                    <div class="thead">
                        <div class="good-info">
                            <span class="th-name">商品</span>
                            <span class="th-price">单价(元)</span>
                            <span class="th-num">数量</span>
                        </div>
                        <div class="good-state">
                            <span class="th-payment">实付款(元)</span>
                            <span class="th-state">交易状态</span>
                            <span class="th-operation">操作</span>
                        </div>
                    </div>

                    <div class="store"  v-for="item in 2">
                        <div class="order-info">
                            <div class="info-box">
                                <span class="order-serial">订单编号：20170220199165478962</span>
                                <span class="order-time">2018-3-12 13:56</span>
                                <span class="store-name">店铺：坚哥一号店</span>
                            </div>
                        </div>
                        <div class="goodlist">
                            <div class="left">
                                <div class="item" v-for="(item,index) in 2" :key="index">
                                    <div class="good">
                                        <div class="img" style="background-image:url(http://img15.3lian.com/2015/h1/280/d/9.jpg)"></div>
                                        <div class="good-content">
                                            <p>西门子开关面板西门子开关面板</p>
                                            <p>800*800mm</p>
                                        </div>
                                    </div>
                                    <div class="price">24.00</div>
                                    <div class="num">2</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="r-left">
                                    <p class="price">¥120.00</p>
                                    <p>（包邮）</p>
                                </div>
                                <div class="r-center">
                                    <p class="order-state">待付款</p>
                                    <p class="order-detail">订单详情</p>
                                </div>
                                <div class="r-right">
                                    <p>剩余23时59分</p>
                                    <button>立即付款</button>
                                    <p>取消订单</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane :label="label" name="name2">
                <div class="order-list">
                    <div class="thead">
                        <div class="good-info">
                            <span class="th-name">商品</span>
                            <span class="th-price">单价(元)</span>
                            <span class="th-num">数量</span>
                        </div>
                        <div class="good-state">
                            <span class="th-payment">实付款(元)</span>
                            <span class="th-state">交易状态</span>
                            <span class="th-operation">操作</span>
                        </div>
                    </div>

                    <div class="store"  v-for="item in 2">
                        <div class="order-info">
                            <div class="info-box">
                                <span class="order-serial">订单编号：20170220199165478962</span>
                                <span class="order-time">2018-3-12 13:56</span>
                                <span class="store-name">店铺：坚哥一号店</span>
                            </div>
                        </div>
                        <div class="goodlist">
                            <div class="left">
                                <div class="item" v-for="(item,index) in 2" :key="index">
                                    <div class="good">
                                        <div class="img" style="background-image:url(http://img15.3lian.com/2015/h1/280/d/9.jpg)"></div>
                                        <div class="good-content">
                                            <p>西门子开关面板西门子开关面板</p>
                                            <p>800*800mm</p>
                                        </div>
                                    </div>
                                    <div class="price">24.00</div>
                                    <div class="num">2</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="r-left">
                                    <p class="price">¥120.00</p>
                                    <p>（包邮）</p>
                                </div>
                                <div class="r-center">
                                    <p class="order-state">待付款</p>
                                    <p class="order-detail">订单详情</p>
                                </div>
                                <div class="r-right">
                                    <p>剩余23时59分</p>
                                    <button>立即付款</button>
                                    <p>取消订单</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane label="待发货" name="name3">
                <div class="order-list">
                    <div class="thead">
                        <div class="good-info">
                            <span class="th-name">商品</span>
                            <span class="th-price">单价(元)</span>
                            <span class="th-num">数量</span>
                        </div>
                        <div class="good-state">
                            <span class="th-payment">实付款(元)</span>
                            <span class="th-state">交易状态</span>
                            <span class="th-operation">操作</span>
                        </div>
                    </div>

                    <div class="store"  v-for="item in 2">
                        <div class="order-info">
                            <div class="info-box">
                                <span class="order-serial">订单编号：20170220199165478962</span>
                                <span class="order-time">2018-3-12 13:56</span>
                                <span class="store-name">店铺：坚哥一号店</span>
                            </div>
                        </div>
                        <div class="goodlist">
                            <div class="left">
                                <div class="item" v-for="(item,index) in 2" :key="index">
                                    <div class="good">
                                        <div class="img" style="background-image:url(http://img15.3lian.com/2015/h1/280/d/9.jpg)"></div>
                                        <div class="good-content">
                                            <p>西门子开关面板西门子开关面板</p>
                                            <p>800*800mm</p>
                                        </div>
                                    </div>
                                    <div class="price">24.00</div>
                                    <div class="num">2</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="r-left">
                                    <p class="price">¥120.00</p>
                                    <p>（包邮）</p>
                                </div>
                                <div class="r-center">
                                    <p class="order-state">待付款</p>
                                    <p class="order-detail">订单详情</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
            <TabPane label="待收货" name="name4">
                <div class="order-list">
                    <div class="thead">
                        <div class="good-info">
                            <span class="th-name">商品</span>
                            <span class="th-price">单价(元)</span>
                            <span class="th-num">数量</span>
                        </div>
                        <div class="good-state">
                            <span class="th-payment">实付款(元)</span>
                            <span class="th-state">交易状态</span>
                            <span class="th-operation">操作</span>
                        </div>
                    </div>

                    <div class="store"  v-for="item in 2">
                        <div class="order-info">
                            <div class="info-box">
                                <span class="order-serial">订单编号：20170220199165478962</span>
                                <span class="order-time">2018-3-12 13:56</span>
                                <span class="store-name">店铺：坚哥一号店</span>
                            </div>
                        </div>
                        <div class="goodlist">
                            <div class="left">
                                <div class="item" v-for="(item,index) in 2" :key="index">
                                    <div class="good">
                                        <div class="img" style="background-image:url(http://img15.3lian.com/2015/h1/280/d/9.jpg)"></div>
                                        <div class="good-content">
                                            <p>西门子开关面板西门子开关面板</p>
                                            <p>800*800mm</p>
                                        </div>
                                    </div>
                                    <div class="price">24.00</div>
                                    <div class="num">2</div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="r-left">
                                    <p class="price">¥120.00</p>
                                    <p>（包邮）</p>
                                </div>
                                <div class="r-center">
                                    <p class="order-state">待付款</p>
                                    <p class="order-detail">订单详情</p>
                                </div>
                                <div class="r-right">
                                    <button>确认收货</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPane>
    </Tabs>
    </div>
</template>
<script>
import Vue from "vue";
import { Tabs, TabPane, Badge } from "iview";
Vue.component(Badge.name, Badge);
export default {
    components: {
        Tabs,
        TabPane
    },
    data() {
        return {
            label: h => {
                return h("div", [
                    h("span", "待付款"),
                    h("Badge", {
                        props: {
                            count: 9,
                            overflowCount: "999",
                            className: "dot-num"
                        }
                    })
                ]);
            }
        };
    }
};
</script>

<style lang="less">
@import "../assets/styles/myorder.less";
</style>

