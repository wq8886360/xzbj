import Vue from "vue";
import Router from "vue-router";
import Index from "../view/index"; //首页
import Login from "../view/login"; //登录页
import Regist from "../view/regist"; //注册页
import Forgotpwd from "../view/forgotpwd.vue"; //忘记密码
import Gooddetail from "../view/gooddetail.vue"; //商品详情页
import Personal from "../view/personal.vue"; //个人中心

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
            meta: { title: "登录", bg: "#fff", headerShow: false }
        },
        {
            path: "/regist",
            component: Regist,
            meta: { title: "注册", footShow: false, headerShow: false }
        },
        {
            path: "/forgotpwd",
            component: Forgotpwd,
            meta: { title: "忘记密码", footShow: false, headerShow: false }
        },
        {
            path: "/gooddetail",
            component: Gooddetail,
            meta: { title: "商品详情" }
        },
        {
            path: "/personal",
            component: Personal,
            meta: { title: "个人中心" }
        }
    ]
});
