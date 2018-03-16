<template>
    <div class="header" v-if="isShow">
        <div class="content">
            <div class="content-left">
                <div class="region">
                    杭州<Icon type="ios-arrow-down"></Icon>
                    <div class="dropdown">
                        <ul>
                            <li>杭州</li>
                            <li>丽水</li>
                        </ul>
                    </div>
                </div>
                <div class="line">|</div>
                <div class="download"><a href="">下载小猪扮家客户端</a></div>
            </div>
            <div class="content-right">
                <!-- <div class="not-login">
                    <span><router-link to="/login">登录</router-link></span>
                    <i class="line">|</i>
                    <span><router-link to="/regist">注册</router-link></span>
                </div> -->
                <div class="is-login">
                    <div class="person-list">
                        <span>18358205737</span>
                        <Icon type="ios-arrow-down"></Icon>
                        <div class="dropdown">
                            <ul>
                                <li>我的订单</li>
                                <li>地址管理</li>
                                <li>个人中心</li>
                                <li>退出</li>
                            </ul>
                        </div>
                    </div>

                    <div class="buycar">
                        <Icon type="ios-cart-outline"></Icon>
                        <span>购物车 （2）</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from "iview";
export default {
    components: {
        Icon
    },
    watch: {
        $route(to, from) {
            this.get_foot_state(to.meta.headerShow);
        }
    },
    methods: {
        get_foot_state(state) {
            if (state === false) {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        }
    },
    data() {
        return {
            region: "杭州",
            isShow: true
        };
    },
    created() {
        this.get_foot_state(this.$route.meta.headerShow);
    }
};
</script>
<style lang="less">
@import "../assets/public/public.less";
@import "../assets/public/theme.less";
.header {
    height: 50px;
    background: #364049;
    color: #8898ab;
    .content {
        height: 100%;
        .width-1260-center;
        .content-left {
            float: left;
            height: 100%;
            > div {
                display: inline-block;
                height: 100%;
                line-height: 50px;
                vertical-align: middle;
            }
            .line {
                margin: 0 16px;
            }
            .region {
                width: 72px;
                height: 100%;
                text-align: center;
                line-height: 50px;
                position: relative;
                i {
                    margin-left: 8px;
                    font-size: 16px;
                    vertical-align: middle;
                }
                .dropdown {
                    width: 100%;
                    background: #fff;
                    display: none;
                    position: absolute;
                    z-index: 10;
                    left: 0;
                    top: 50px;
                    box-shadow: 0 0 2px 0;
                    ul {
                        li {
                            height: 36px;
                            line-height: 36px;
                        }
                        li:hover {
                            background: @activeColor;
                            color: #fff;
                        }
                    }
                }
            }
            .region:hover {
                background: #fff;
                .dropdown {
                    display: block;
                }
            }
            .download {
                a {
                    color: #8898ab;
                }
            }
            .download:hover {
                a {
                    color: #fff;
                }
            }
        }
        .content-right {
            float: right;
            height: 100%;
            line-height: 50px;
            .line {
                margin: 0 8px;
            }
            a {
                color: #8898ab;
            }
            a:hover {
                color: #fff;
            }
            .is-login {
                .buycar {
                    height: 100%;
                    width: 120px;
                    background: #485460;
                    text-align: center;
                    display: inline-block;
                    cursor: pointer;
                    i {
                        font-size: 16px;
                        margin-right: 8px;
                        position: relative;
                        top: 1px;
                    }
                }
                .buycar:hover {
                    background: #fff;
                    color: #788492;
                }
                .person-list {
                    display: inline-block;
                    width: 130px;
                    height: 100%;
                    margin-right: 40px;
                    text-align: center;
                    position: relative;
                    i {
                        font-size: 16px;
                        vertical-align: middle;
                        margin-left: 10px;
                    }
                    .dropdown {
                        width: 100%;
                        background: #fff;
                        display: none;
                        position: absolute;
                        z-index: 10;
                        left: 0;
                        top: 50px;
                        box-shadow: 0 0 2px 0;
                        ul {
                            li {
                                height: 36px;
                                line-height: 36px;
                            }
                            li:hover {
                                background: @activeColor;
                                color: #fff;
                            }
                        }
                    }
                }
                .person-list:hover {
                    background: #fff;
                    color: #788492;
                    .dropdown {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>


