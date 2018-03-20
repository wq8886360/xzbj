<template>
    <div class="affirminist">
        <div class="width-center">
            <!-- 头部导航栏 -->
            <search></search>
            <!-- 状态显示栏 -->
            <div class="state">
                <div class="state-head">
                    <span>提交订单</span>
                    <span>支付</span>
                    <span>完成订单</span>
                </div>
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
                        <!-- <div class="plan-green"></div> -->
                    </div>
                </div>
            </div>
            <!-- 订单提交成功 显示金额 -->
            <div class="money-hint">
                <img src="../assets/img/state.png">
                <div class="tjtime">
                    <p class="font-w">订单提交成功，还有一步就完成了！</p>
                    <div class="orange">
                        <div class="xstime">请您在确认订单后<span>24小时</span>内完成支付，否则订单将会自动取消</div>
                        <div class="xsmoney">
                            <span>共4件商品，总计（含运费）</span>
                            <span class="twenty">¥ 480.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 支付类型 -->
            <div class="pay-type" @mouseenter="zfb = false" @mouseleave="zfb = true">
                <img src="../assets/img/alipay_H.png">
                <img src="../assets/img/alipay_N.png" v-if="zfb">
                <span>支付宝支付</span>
            </div>
            <div class="pay-type" @mouseenter="wx = false" @mouseleave="wx = true">
                <img src="../assets/img/WeChat_H.png" >
                <img src="../assets/img/WeChat_N.png" v-if="wx">
                <span>微信支付</span>
            </div>
            <div class="pay-type mar-bott" @mouseenter="wy = false" @mouseleave="wy = true" @click="bankifyclick">
                <img src="../assets/img/bank_H.png" >
                <img src="../assets/img/bank_N.png" v-if="wy">
                <span>网银支付</span>
                <!-- <img src="../assets/img/pullDown_nor.png" class="pulldown"> -->
                <Icon type="chevron-down" class="pulldown" v-if="bankdown"></Icon>
                <Icon type="chevron-up" class="pulldown" v-if="bankup"></Icon>
            </div>
            <div class="bankclassify" v-if="bankify" @mouseenter="wy = false" @mouseleave="wy = true">
                <ul>
                    <li @mouseenter="urcb_N = false" @mouseleave="urcb_N = true">
                        <img src="../assets/img/urcb_H.png">
                        <img src="../assets/img/urcb_N.png" v-if="urcb_N">
                    </li>
                    <li @mouseenter="abc_N = false" @mouseleave="abc_N = true">
                        <img src="../assets/img/abc_H.png">
                        <img src="../assets/img/abc_N.png" v-if="abc_N">
                    </li>
                    <li @mouseenter="icbc_N = false" @mouseleave="icbc_N = true">
                        <img src="../assets/img/icbc_H.png">
                        <img src="../assets/img/icbc_N.png" v-if="icbc_N">
                    </li>
                    <li @mouseenter="boc_N = false" @mouseleave="boc_N = true">
                        <img src="../assets/img/boc_H.png">
                        <img src="../assets/img/boc_N.png" v-if="boc_N">
                    </li>
                    <li @mouseenter="cmbc_N = false" @mouseleave="cmbc_N = true">
                        <img src="../assets/img/cmbc_H.png">
                        <img src="../assets/img/cmbc_N.png" v-if="cmbc_N">
                    </li>
                </ul>
                
            </div>
            <!-- 支付按钮 -->
            <div class="pay-button">
                <div class="cancel" @click="wicketcl = true">取消支付</div>
                <div class="success" @click="affirmimg = true">确认并付款</div>
            </div>
            <!-- 删除弹框 -->
            <div class="wicket-bg" v-if="wicketcl">
                <div class="delzezel">
                    <div class="wicket-head">
                        <span>提示</span>
                        <Icon type="android-close" class="icon-close" @click.native="wicketcl = false"></Icon>
                    </div>
                    <div class="wicket-cen">
                        <img src="../assets/img/attention.png">
                        <span>确认要取消支付吗？</span>
                    </div>
                    <div class="wicket-choose">
                        <div class="choose-calloff" @click="wicketcl = false">取消</div>
                        <div class="choose-confirm">确定</div>
                    </div>
                </div>
            </div>
            <!-- 确认支付 -->
            <div class="affirmpay" v-if="affirmimg">
                <div class="affirmpay-img">
                    <Icon type="android-close" class="affficon" @click.native="affirmimg = false"></Icon>
                    <img src="">
                </div>
            </div>
        </div>
    </div>        
</template>


<script>
import Search from "../components/search"
import {Icon} from "iview"
export default {
    components: {
      Search,
      Icon
    },
    data () {
        return {
            zfb:true,
            wx:true,
            wy:true,
            bankify:false,
            urcb_N:true,
            abc_N:true,
            icbc_N:true,
            boc_N:true,
            cmbc_N:true,
            wicketcl:false,     //删除弹窗
            bankdown:true,
            bankup:false,
            affirmimg:false     //确认支付弹窗
            
        }
    },
    methods: {
        // 点击网银出现选择
        bankifyclick () {
            this.bankify = !this.bankify
            this.bankup = !this.bankup
            this.bankdown = !this.bankdown
        }
    }
}
</script>

<style lang="less">
@import "../assets/styles/affirminist.less";
</style>
