import Vue from "vue";
import Router from "vue-router";
import Index from "../view/index"; //首页
import Login from "../view/login"; //登录页
import Regist from "../view/regist"; //注册页
import Forgotpwd from "../view/forgotpwd.vue"; //忘记密码
import Gooddetail from "../view/gooddetail.vue"; //商品详情页
import Personal from "../view/personal.vue"; //个人中心
import Myorder from "../view/myorder.vue"; //我的订单
import Addressmanagement from "../view/addressmanagement.vue"; //地址管理
import Personalinformation from "../view/personalinformation.vue"; //个人信息
import ClassificationList from "../view/classificationList.vue"; //分类列表
import Submitorder from "../view/submitorder.vue"; //确认订单
import Shoppingcart from "../view/Shoppingcart.vue"; //购物车
import Affirminist from "../view/affirminist.vue"; //选择支付方式
import Paysuccess from "../view/paysuccess.vue"; //支付成功
import Wypayconfirm from "../view/wypayconfirm.vue"; //网银支付确认
import Building from "../view/building.vue"; //建材商品
import Furniture from "../view/furniture.vue"; //家具商品
import Brand from "../view/brand.vue"; //品牌活动
import Store from "../view/store.vue"; //品牌店铺
import Indent from "../view/indent.vue"; //订单详情
import Agreement from "../view/agreement.vue"; //用户协议

import Test from "../view/test.vue"; //测试页面

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Test,
            meta: { title: "测试页", footShow: false, headerShow: false }
        },
        {
            path: "/index",
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
            meta: { title: "个人中心" },
            redirect: "/personal/myorder",
            children: [
                {
                    path: "myorder",
                    component: Myorder
                },
                {
                    path: "addressmanagement",
                    component: Addressmanagement
                },
                {
                    path: "personalinformation",
                    component: Personalinformation
                }
            ]
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
        },
        {
            path: "/submitorder",
            component: Submitorder,
            meta: { title: "订单结算" }
        },
        {
            path: "/building",
            component: Building,
            mate: { title: "建材商品" }
        },
        {
            path: "/furniture",
            component: Furniture,
            mate: { title: "家具商品" }
        },
        {
            path: "/brand",
            component: Brand,
            mate: { title: "商品活动" }
        },
        {
            path: "/store",
            component: Store,
            mate: { title: "品牌店铺" }
        },
        {
            path: "/indent",
            component: Indent,
            meta: { title: "订单详情" }
        },
        {
            path: "/agreement",
            component: Agreement,
            meta: { title: "用户协议" }
        }
    ]
});
