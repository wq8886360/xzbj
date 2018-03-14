<template>
    <div class="login">
        <div class="logo"><img src="../assets/img/logo.png" alt=""></div>
        <div class="login-bg">
            <div class="login-form">
                <input class="user" v-model="username" type="text" placeholder="请输入手机号/用户名">
                <input class="pwd" v-model="password" type="password" placeholder="请输入密码">
                <div class="error" v-if="err_message">
                    <Icon type="minus-circled"></Icon>
                    <span>{{err_message}}</span>
                </div>
                <div class="login-time">
                    <Checkbox v-model="single">十天内免登录</Checkbox>
                </div>
                <button class="submit" @click="submit">登录</button>
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
import { submitLogin } from "../http/api";
export default {
    components: {
        Icon,
        Checkbox
    },
    data() {
        return {
            single: false,
            username: "",
            password: "",
            err_message: ""
        };
    },
    methods: {
        submit() {
            let err_arr = [];
            if (!this.username) {
                err_arr.push("请输入账户名！");
            }
            if (!this.password) {
                err_arr.push("请输入密码！");
            }
            if (err_arr.length == 0) {
                this.err_message = "";
                submitLogin({
                    account: this.username,
                    password: this.password
                }).then(response => {
                    console.log(response);
                });
            } else {
                this.err_message = err_arr[0];
            }
        }
    },
    created() {}
};
</script>

<style lang="less">
@import "../assets/styles/login.less";
</style>
