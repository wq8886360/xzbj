<template>
    <div class="paysuccess">
        <div class="width-center">
            <Search></Search>
            <!-- 状态显示栏 -->
            <div class="state">
                <div class="plan">
                    <Steps :current="current">
                        <Step title="提交订单"></Step>
                        <Step title="支付"></Step>
                        <Step title="完成订单" style="width : 100px"></Step>
                    </Steps>
                </div>  
            </div>
            <!-- 支付成功内容 -->
            <div class="suconent">
                <div class="suconent-img">
                    <img src="../assets/img/state.png">
                    <div class="sucont-font">
                        <strong>订单支付成功！</strong>
                        <p>商家将会尽快安排发货！</p>
                    </div>
                </div>
                <div class="paymoney">
                    <p>支付金额：<span>¥ 360.00</span></p>
                    <p>支付账户：支付宝(13840690396)</p>
                </div>
            </div>
            <!-- 底部按钮 -->
            <div class="pay-button">
                <div class="cancel">返回首页</div>
                <div class="success">查看订单详情</div>
            </div>
        </div>
    </div>       
</template>
<script>
import Search from "../components/search"
import { Steps , Step} from "iview"
export default {
    components: {
        Search,
        Steps,
        Step
    },
    data () {
        return {
            current:3,   //进度条
        }
    }    
}
</script>
<style lang="less">
@import "../assets/styles/paysuccess.less";
</style>

