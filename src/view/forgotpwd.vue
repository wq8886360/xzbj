<template>
    <div class="forgotpwd">
        <div class="logo">
            <img src="../assets/img/logo.png" alt="">
            <div class="step">
                <Steps :current="current">
                    <Step title="设置账号"></Step>
                    <Step title="填写账户信息"></Step>
                    <Step title="注册完成"></Step>
                </Steps>
            </div>
        </div>
        <div class="form-box">
            <!-- 设置账号 -->
            <div class="regist-form-0" v-if="current == 0">
                <input v-model="phone" type="text" class="tel" placeholder="请输入手机号">
                <div class="code">
                    <input v-model="code" type="text" class="code-input" placeholder="请输入验证码">
                    <button class="get-code" :disabled="disabled" @click="getCode">{{countdown}}</button>
                </div>
                <div class="error" v-if="err_msg_0">
                    <Icon type="minus-circled"></Icon>
                    <span>{{err_msg_0}}</span>
                </div>
                <button class="submit" @click="next_step">下一步</button>
            </div>

            <!-- 填写账户信息 -->
            <div class="regist-form-1" v-if="current == 1">
                <input type="password" v-model="password" class="password" placeholder="请输入密码，由6~20位字母，数字和符号任意组合">
                <input type="password" v-model="passwordAgain" class="password-again" placeholder="请再次输入密码">
                <div class="error" v-if="err_msg_1">
                    <Icon type="minus-circled"></Icon>
                    <span>{{err_msg_1}}</span>
                </div>
                <div class="btn-box">
                    <button :disabled="dis" class="submit" @click="info_submit()">提交</button>
                </div>
            </div>

            <!-- 注册完成 -->
            <div class="regist-form-2" v-if="current == 2">
                <Icon type="ios-checkmark-outline"></Icon>
                <div>
                    <p class="msg">密码修改成功！</p>
                    <p class="jump">3S后自动跳转到首页</p>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import { Steps, Step, Icon, Checkbox } from "iview";
import { phonecode, amendPassword } from "../http/api";
export default {
    components: {
        Steps,
        Step,
        Icon,
        Checkbox
    },
    vuerify: {
        phone: [
            "required",
            {
                test: /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/,
                message: "手机格式错误"
            }
        ],
        code: ["required"]
    },
    data() {
        return {
            current: 0,
            err_msg_0: "",
            err_msg_1: "",
            phone: "", //手机号
            code: "", //验证码
            time: 0,
            password: "",
            passwordAgain: "",
            dis: false
        };
    },
    computed: {
        countdown: function() {
            return this.time > 0 ? `${this.time}s后重新获取` : "获取验证码";
        },
        disabled: function() {
            return this.time > 0 ? true : false;
        }
    },
    methods: {
        next_step() {
            if (this.$vuerify.check()) {
                this.err_msg_0 = "";
                phonecode({
                    iPhone: this.phone,
                    vcode: this.code
                }).then(response => {
                    console.log(response);
                    if (response.data.status == 1000) {
                        this.current++;
                    } else {
                        this.err_msg_0 = response.data.message;
                    }
                });
            } else {
                let errors = this.$vuerify.$errors;
                console.log(errors);
                let arr = [];
                for (var key in errors) {
                    let msg = errors[key][0];
                    if (msg == "必填项") {
                        if (key == "phone") {
                            this.err_msg_0 = "请输入手机号";
                        } else {
                            this.err_msg_0 = "请输入验证码";
                        }
                    } else {
                        console.log(msg);
                        this.err_msg_0 = msg;
                    }
                    return;
                }
            }
        },
        info_submit() {
            let err_arr = [];
            if (!this.password) {
                err_arr.push("请输入密码");
            }
            if (!this.passwordAgain) {
                err_arr.push("请确认密码");
            }
            if (!/^[0-9a-zA-Z?!_-]{6,30}$/.test(this.password)) {
                err_arr.push("密码格式错误");
            }
            if (this.password !== this.passwordAgain) {
                err_arr.push("密码不一致");
            }
            if (err_arr.length == 0) {
                this.dis = true;
                this.err_msg_1 = "";
                amendPassword({
                    iPhone: this.phone,
                    password: this.password
                }).then(response => {
                    this.dis = false;
                    console.log(response);
                    if (response.data.status == 1000) {
                        this.current++;
                        setTimeout(() => {
                            this.$router.push({ path: "/" });
                        }, 3000);
                    } else {
                        this.err_msg_1 = response.data.message;
                    }
                });
            } else {
                this.err_msg_1 = err_arr[0];
            }
        },
        //获取验证码
        getCode() {
            this.time = 60;
            let timer = null;
            timer = setInterval(() => {
                this.time--;
                if (this.time < 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
    },
    created() {}
};
</script>
<style lang="less">
@import "../assets/styles/forgotpwd.less";
</style>


