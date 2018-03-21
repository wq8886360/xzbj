import Vue from "vue";
import Router from "vue-router";
import Index from "../view/index"; //首页
import Login from "../view/login"; //登录页
import Regist from "../view/regist"; //注册页
import Forgotpwd from "../view/forgotpwd.vue"; //忘记密码
import Gooddetail from "../view/gooddetail.vue"; //商品详情页
import Personal from "../view/personal.vue"; //个人中心
import ClassificationList from "../view/classificationList.vue"; //分类列表
import Shoppingcart from "../view/Shoppingcart.vue"; //购物车
import Affirminist from "../view/affirminist.vue"; //确认订单
import Paysuccess from "../view/paysuccess.vue"; //支付成功
import Wypayconfirm from "../view/wypayconfirm.vue"; //网银支付确认

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
        },
        {
            path: "/classificationlist",
            component: ClassificationList,
            meta: { title: "分类" }
        },
        {
            path: "/shoppingcart",
            component: Shoppingcart,
            meta: { title: "购物车" }
        },
        {
            path: "/affirminist",
            component: Affirminist,
            meta: { title: "确认订单" }
        },
        {
            path: "/paysuccess",
            component: Paysuccess,
            meta: { title: "支付成功" }
        },
        {
            path: "/wypayconfirm",
            component: Wypayconfirm
        }
    ]
});
