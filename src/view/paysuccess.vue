<template>
    <div class="paysuccess">
        <div class="width-center">
            <Search></Search>
            <!-- 状态显示栏 -->
            <div class="state">
                <div class="state-head">
                    <span>提交订单</span>
                    <span>支付</span>
                    <span>完成订单</span>
                </div>
                <div class="plan">
                    <div class="plan-all plan-first">
                        <span>1</span>
                    </div>
                    <div class="plan-line"></div>
                    <div class="plan-all plan-second">
                        <span>2</span>
                    </div>
                    <div class="plan-line line-second"></div>
                    <div class="plan-all plan-three plancolor">
                        <span>3</span>
                    </div>
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
export default {
    components: {
        Search
    },
    data () {
        return {
            
        }
    }    
}
</script>
<style lang="less">
@import "../assets/styles/paysuccess.less";
</style>

