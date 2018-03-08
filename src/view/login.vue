<template>
    <div class="login">
        <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
        <div class="login-bg">
            <div class="login-form">
                <input class="user" type="text" placeholder="请输入手机号/用户名">
                <input class="pwd" type="password" placeholder="请输入密码">
                <div class="error" v-if="false">
                    <Icon type="minus-circled"></Icon>
                    <span>请输入账户名！</span>
                </div>
                <div class="login-time">
                    <Checkbox v-model="single">十天内免登录</Checkbox>
                </div>
                <button class="submit">登录</button>
                <div class="regist-forgot">
                    <router-link to="/regist">注册账号</router-link>
                    <router-link class="forgot" to="/forgotpwd">忘记密码？</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon, Checkbox } from "iview";
export default {
    components: {
        Icon,
        Checkbox
    },
    data() {
        return {
            single: false
        };
    }
};
</script>

<style lang="less">
@import "../assets/styles/login.less";
</style>
