import Vue from "vue";
import Router from "vue-router";
import Index from "../view/index"; //首页
import Login from "../view/login"; //登录页
import Regist from "../view/regist"; //注册页
import Forgotpwd from "../view/forgotpwd.vue"; //忘记密码

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Index,
            meta: { title: "首页" }
        },
        {
            path: "/login",
            component: Login,
            meta: { title: "登录" }
        },
        {
            path: "/regist",
            component: Regist,
            meta: { title: "注册" }
        },
        {
            path: "/forgotpwd",
            component: Forgotpwd,
            meta: { title: "忘记密码" }
        }
    ]
});
