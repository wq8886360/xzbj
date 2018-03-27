<template>
    <div class="test">
        <Button type="primary" @click.native="goto('/index')">首页</Button>
        <Button type="primary" @click.native="goto('/regist')">注册页</Button>
        <Button type="primary" @click.native="goto('/login')">登录页</Button>
        <Button type="primary" @click.native="goto('/forgotpwd')">修改密码页</Button>
        <Button type="primary" @click.native="goto('/classificationlist')">类目筛选页</Button>
        <Button type="primary" @click.native="goto('/gooddetail')">商品详情页</Button>
        <Button type="primary" @click.native="goto('/submitorder')">订单结算页</Button>
        <Button type="primary" @click.native="goto('/affirminist')">确认订单页</Button>
        <Button type="primary" @click.native="goto('/wypayconfirm')">网银支付确认页</Button>
        <Button type="primary" @click.native="goto('/paysuccess')">支付成功页</Button>
        <Button type="primary" @click.native="goto('/shoppingcart')">购物车</Button>
        <Button type="primary" @click.native="goto('/personal')">个人中心页</Button>
        <Button type="primary" @click.native="goto('/indent')">订单详情页</Button>
        <Button type="primary" @click.native="goto('/building')">建材商品页</Button>
        <Button type="primary" @click.native="goto('/furniture')">家居商品页</Button>
        <Button type="primary" @click.native="goto('/brand')">品牌活动页</Button>
        <Button type="primary" @click.native="goto('/store')">品牌店铺页</Button>
        
    </div>
</template>
<script>
import { Button } from "iview";
export default {
    components: {
        Button
    },
    data() {
        return {};
    },
    methods: {
        goto(path) {
            this.$router.push({ path: path });
        }
    }
};
</script>
<style lang="less">
.test {
    button {
        margin-bottom: 5px !important;
    }
}
</style>


