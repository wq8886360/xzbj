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
                    <Steps :current="current" class="plan-steps">
                        <Step class="plan-first" style="width : 240px"></Step>
                        <Step style="width : 236px"></Step>
                        <Step style="width : 30px"></Step>
                    </Steps>
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
            <div class="pay-type" @mouseenter="zfb = false,zfbf = true" @mouseleave="zfb = true,zfbf = false">
                <img src="../assets/img/alipay_H.png" v-if="zfbf">
                <img src="../assets/img/alipay_N.png" v-if="zfb">
                <span>支付宝支付</span>
            </div>
            <div class="pay-type" @mouseenter="wx = false,wxf = true" @mouseleave="wx = true,wxf = false">
                <img src="../assets/img/WeChat_H.png" v-if="wxf">
                <img src="../assets/img/WeChat_N.png" v-if="wx">
                <span>微信支付</span>
            </div>
            <div class="pay-type mar-bott" @mouseenter="wy = false,wyf = true" @mouseleave="wy = true,wyf = false" @click="bankifyclick">
                <img src="../assets/img/bank_H.png" v-if="wyf">
                <img src="../assets/img/bank_N.png" v-if="wy">
                <span>网银支付</span>
                <!-- <img src="../assets/img/pullDown_nor.png" class="pulldown"> -->
                <Icon type="chevron-down" class="pulldown" v-if="bankdown"></Icon>
                <Icon type="chevron-up" class="pulldown" v-if="bankup"></Icon>
            </div>
            <div class="bankclassify" v-if="bankify" @mouseenter="wy = false" @mouseleave="wy = true">
                <ul>
                    <li @mouseenter="urcb_N = false,urcb_F = true" @mouseleave="urcb_N = true,urcb_F = false">
                        <img src="../assets/img/urcb_H.png" v-if="urcb_F">
                        <img src="../assets/img/urcb_N.png" v-if="urcb_N">
                    </li>
                    <li @mouseenter="abc_N = false,abc_F = true" @mouseleave="abc_N = true,abc_F = false">
                        <img src="../assets/img/abc_H.png" v-if="abc_F">
                        <img src="../assets/img/abc_N.png" v-if="abc_N">
                    </li>
                    <li @mouseenter="icbc_N = false,icbc_F = true" @mouseleave="icbc_N = true,icbc_F = false">
                        <img src="../assets/img/icbc_H.png" v-if="icbc_F">
                        <img src="../assets/img/icbc_N.png" v-if="icbc_N">
                    </li>
                    <li @mouseenter="boc_N = false,boc_F = true" @mouseleave="boc_N = true,boc_F = false">
                        <img src="../assets/img/boc_H.png" v-if="boc_F">
                        <img src="../assets/img/boc_N.png" v-if="boc_N">
                    </li>
                    <li @mouseenter="cmbc_N = false,cmbc_F = true" @mouseleave="cmbc_N = true,cmbc_F = false">
                        <img src="../assets/img/cmbc_H.png" v-if="cmbc_F">
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
            <Modal :visible.sync="wicketcl" :content="qxmsg" @determine="affirmpay"></Modal>
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
import Modal from "../components/modal"
import {Icon,Steps,Step} from "iview"
export default {
    components: {
      Search,
      Modal,
      Icon,
      Steps,
      Step
    },
    data () {
        return {
            zfb:true,
            zfbf:false,
            wxf:false,
            wx:true,
            wyf:false,
            wy:true,
            bankify:false,
            urcb_N:true,
            urcb_F:false,
            abc_N:true,
            abc_F:false,
            icbc_N:true,
            icbc_F:false,
            boc_N:true,
            boc_F:false,
            cmbc_N:true,
            cmbc_F:false,
            wicketcl:false,     //删除弹窗
            bankdown:true,
            bankup:false,
            affirmimg:false,     //确认支付弹窗
            qxmsg:"确定要取消支付吗？",
            current:2,      //进度条
            
        }
    },
    methods: {
        // 点击网银出现选择
        bankifyclick () {
            this.bankify = !this.bankify
            this.bankup = !this.bankup
            this.bankdown = !this.bankdown
        },
        affirmpay () {
            console.log(666)
        }
    }
}
</script>

<style lang="less">
@import "../assets/styles/affirminist.less";
</style>
