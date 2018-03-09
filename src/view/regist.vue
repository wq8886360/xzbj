<template>
    <div class="regist">
        
        <!-- <Steps :current="current">
            <Step title="设置账号"></Step>
            <Step title="填写账户信息"></Step>
            <Step title="注册完成"></Step>
        </Steps> -->
    </div>
</template>
<script>
import { Steps, Step } from "iview";
export default {
    components: {
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

