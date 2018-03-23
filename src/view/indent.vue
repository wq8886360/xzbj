<template>
    <div class="indent">
        <Search></Search>
        <!-- 订单头部 -->
        <div class="three-head">
            <div class="area">
                <span>首页</span>
                <Icon type="ios-arrow-right" class="iconfont"></Icon>
                <span class="co">个人中心</span>
                <Icon type="ios-arrow-right" class="iconfont"></Icon>
                <span>我的订单</span>
                <Icon type="ios-arrow-right" class="iconfont"></Icon>
                <span>订单详情</span>
            </div>
        </div>
        <!-- 订单状态 -->
        <div class="state area">
            <div class="state-conent">
                <div class="state-head">
                    <span>提交订单</span>
                    <span>买家支付</span>
                    <span>商家发货</span>
                    <span>确认收货</span>
                </div>
                <div class="state-body">
                    <div class="plan">
                        <div class="plan-all plan-first">
                            <div class="plan-green"></div>
                        </div>
                        <div class="plan-line"></div>
                        <div class="plan-all plan-second">
                            <div class="plan-green"></div>
                        </div>
                        <div class="plan-line line-second"></div>
                        <div class="plan-all plan-three">
                            <div class="plan-green"></div>
                        </div>
                        <div class="plan-line line-three"></div>
                        <div class="plan-all plan-three">
                            <div class="plan-green"></div>
                        </div>
                    </div>
                </div>
                <div class="state-foot">
                    <span>2018.01.22  12:30</span>
                    <span>2018.01.22  12:30</span>
                    <span>2018.01.22  12:30</span>
                    <span>2018.01.22  12:30</span>
                </div>
            </div>
        </div>
        <!-- 订单信息 -->
        <div class="message">
            <div class="area">
                <div class="mes-title">订单信息</div>
                <div class="mes-img">
                    <img src="../assets/img/state.png">
                    <div class="mesimg-p">
                        <p>交易已完成！</p>
                        <p>售后服务请联系商家！</p>
                    </div>
                </div>
                <div class="mes-xx">
                    <p><span class="mes-ddbh">订单编号：20170220199165478962</span><span>收货人：坚哥</span></p>
                    <p><span class="mes-shr">联系电话：13866668888</span><span>收货人：浙江省  杭州市  滨江区  X-work大厦</span></p>
                    <p><span>买家备注：我要顺丰快递！</span></p>
                </div>
            </div>
        </div>
        <!-- 物流信息 -->
        <div class="logistics">
            <div class="area">
                <h3>物流信息</h3>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "../components/search"
import { Icon } from "iview"
export default {
    components: {
        Search,
        Icon
    },
    data () {
        return {
            
        }
    }
    }
</script>
<style lang="less">
@import "../assets/styles/indent.less";
</style>


