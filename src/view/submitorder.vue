<template>
    <div class="submitorder">
        <search></search>
        <div class="step">
            <Steps :current="current">
                <Step title="提交订单"></Step>
                <Step title="支付"></Step>
                <Step title="完成订单"></Step>
            </Steps>
        </div>
        <div class="address">
            <div class="address-list">
                <div class="item active">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Steps, Step } from "iview";
import Search from "../components/search.vue";
export default {
    components: {
        Search,
        Steps,
        Step
    },
    data() {
        return {
            current: 0
        };
    }
};
</script>
<style lang="less">
@import "../assets/styles/submitorder.less";
</style>


