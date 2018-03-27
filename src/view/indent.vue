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
            <div class="plan">
                <Steps :current="current">
                    <Step title="提交订单" content="2018.01.22  12:30"></Step>
                    <Step title="买家支付" content="2018.01.22  12:30"></Step>
                    <Step title="商家发货" content="2018.01.22  12:30"></Step>
                    <Step title="确认收货" content="2018.01.22  12:30" style="width : 160px"></Step>
                </Steps>
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
                <div class="logtime">
                    <p>发货时间：2017-01-16   23:22</p>
                    <p>物流公司：百世汇通</p>
                </div>
                <div class="logcontent">
                    <p class="logbottom">快递单号：3488987214665017</p>
                    <div class="logtail">
                        <span>物流跟踪：</span>
                        <div class="logcont">
                            <div class="stage">
                                <p>·从【浙江杭州分拨中心】出库</p>
                                <p class="logcont-time">2017-12-22 00:40:05</p>
                            </div>
                            <div class="stage">
                                <p>·从【浙江杭州分拨中心】出库，下一站【杭州滨江站】</p>
                                <p class="logcont-time">2017-12-22 00:40:05</p>
                            </div>
                            <div class="stage">
                                <p>·您的包裹已到达【杭州滨江站】分拨中心，正在分配配送员</p>
                                <p class="logcont-time">2017-12-22 00:40:05</p>
                            </div>
                            <div class="stage">
                                <p>·您的订单已到配送站点。详情请联系配送员：小明，电话：13088888888</p>
                                <p class="logcont-time">2017-12-22 00:40:05</p>
                            </div>
                            <div class="stage">
                                <p>·快递已签收</p>
                                <p class="logcont-time">2017-12-22 00:40:05</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品清单 -->
        <div class="inventory">
            <div class="area">
                <div class="inven-head">
                    <h3>商品清单</h3>
                    <div class="inven-title">
                        <span>商品</span>
                        <span>单价(元)</span>
                        <span>数量</span>
                        <span>实付款(元)</span>
                        <span>交易状态</span>
                        <span>操作</span>
                    </div>
                </div>
                <!-- 商品清单详情 -->
                <div class="invencont">
                    <div class="inven-head">
                        <span>订单编号：20170220199165478962</span>
                        <span>2018-3-12   13:56</span>
                        <span>店铺：坚哥一号店</span>
                    </div>
                    <div class="inven-body">
                        <div class="invenbody-left">
                            <img src="../assets/img/logo.png">
                            <div class="describe">
                                <p>西门子开关面板西门子开关面板面板西门子开关面板</p>
                                <p>800*800mm</p>
                            </div>
                            <div class="invenmoney">24.00</div>
                            <div class="invennum">5</div>                      
                        </div>
                        <div class="invenbody-left">
                            <img src="../assets/img/logo.png">
                            <div class="describe">
                                <p>西门子开关面板西门子开关面板面板西门子开关面板</p>
                                <p>800*800mm</p>
                            </div>
                            <div class="invenmoney">24.00</div>
                            <div class="invennum">5</div>                      
                        </div>
                        <div class="invenbody-right">
                            <div class="invenright-money">
                                <p>¥120.00</p>
                                <p>（包邮）</p>
                            </div>
                            <div class="dealstate">快递已签收</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Search from "../components/search"
import { Icon,Steps,Step } from "iview"
export default {
    components: {
        Search,
        Icon,
        Steps,
        Step
    },
    data () {
        return {
            current:2,
        }
    }
}
</script>
<style lang="less">
@import "../assets/styles/indent.less";
</style>


