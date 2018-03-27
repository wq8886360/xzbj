<template>
    <div class="submitorder">
        <search></search>
        <!-- 状态显示栏 -->
        <div class="state">
            <div class="plan">
                <Steps :current="current">
                    <Step title="提交订单"></Step>
                    <Step title="支付"></Step>
                    <Step title="完成订单" style="width : 100px"></Step>
                </Steps>
            </div> 
        </div>
        <!-- 收货地址 -->
        <div class="goodsaddress">
            <div class="bpother">
                <div class="addressshow" v-for="(item,index) in 4" :key="index">
                    <img src="../assets/img/addBorder_H.png">
                    <div class="addressconent">
                        <p class="p">坚哥</p>
                        <p class="tower">浙江省杭州市滨江区滨安路650号IX-work大厦12楼301室</p>
                        <p class="tower">15558038093</p>
                    </div>
                    <!-- 默认地址 -->
                    <div class="default">默认地址</div>
                    <!-- 编辑 -->
                    <Icon type="compose" class="bj"></Icon>
                </div>
            </div>
            <!-- 管理收货地址 -->
            <div class="manage">
                <span class="green">管理收货地址</span>
                <span>新增收货地址</span>
            </div>
        </div>
        <h2>确认订单信息</h2>
        <!-- 商品 -->
        <div class="merchandise"  v-for="(items,indexs) in good_arr" :key="indexs">
            <div class="goodsname">
                <span>{{items.name}}</span>
            </div>
            <!-- 商品详情 -->
            <div class="mer-conter">
                <div class="mer-head">
                    <ul class="distance">
                        <li>商品</li>
                        <li>规格／型号</li>
                        <li>单价(元)</li>
                        <li>数量</li>
                        <li>小计(元)</li>
                    </ul>
                </div>
                <!-- <div class="false" v-for="(item,index) in items.goods" :key="index"> -->
                    <div class="mer-body" v-for="(item,index) in items.goods" :key="index">
                        <ul>
                            <li>
                                <p class="pi">西门子开关面板西门子板西门子板西门子</p>
                                <img src="../assets/img/logo.png">
                            </li>
                            <li>800*800mm</li>
                            <li>24.00</li>
                            <li>5</li>
                            <li>¥100.00</li>
                            <li><span @click="wicketcl = true">删除</span></li>
                        </ul>
                    </div>
                    <!-- 删除弹框 -->
                    <Modal :content="qxmsg" :visible.sync="wicketcl" @determine="qdscdel(item.id,items.id)"></Modal>
                    <!-- 备注部分 -->
                    <div class="mer-body remark">
                        <div class="remark-content">
                            <span>备注：</span>
                            <Input placeholder="字数不超过20字" class="input"></Input>
                            <span class="dphj">店铺合计：</span>
                            <span class="hj-mo">¥ 240.00</span>
                        </div>
                    </div>
                <!-- </div> -->
            </div>         
        </div>
        <!-- 底部合计 -->
        <div class="mer-foot">
            <div class="mer-total">
                <div class="coding">
                    <span>推荐销售人员编码（选填）：</span>
                    <Input class="inputt"></Input>
                </div>
                <div class="mer-money">
                    <p>共<span>{{shopnum}}</span>件商品，总计（含运费） </p> <span class="fontbig">¥ {{ALLmoney}}</span>
                </div>
                <div class="close" @click="jsclose">结算</div>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon,Input,Steps,Step } from "iview";
import Search from "../components/search.vue";
import Modal from "../components/modal";
export default {
    components: {
        Search,
        Input,
        Steps,
        Step,
        Icon,
        Modal   //删除弹框
    },
    data() {
        return {
            qxmsg:"确认要删除该商品？",
            wicketcl:false, 
            current:1,
            tjcode:null,       //推荐人输入的数字
            shopnum:0,         // 选择商品件数
            ALLmoney:0.00,     //结算的钱
            good_arr: [
                {
                    name: "商店1",
                    id : 1,
                    status: false,
                    goods: [{
                        id: "4",
                        status: false,
                        money:100,
                    },{
                        id: "5",
                        status: false,
                        money:100,
                        
                    }]
                },
                {
                    name: "商店2",
                    id : 2,
                    status: false,
                    goods: [{
                        status: false,
                        id: "6",
                        money:100,
                        
                    },{
                        status: false,
                        id: "7",
                        money:100,
                        
                    }]
                },
                {
                    name: "商店3",
                    id : 3,
                    status: false,
                    goods: [{
                        status: false,
                        id: "8",
                        money:100,
                        
                    },{
                        status: false,
                        id: "9",
                        money:100,
                    }]
                },
            ],
        };
    },
    methods: {
        // 删除选项
        qdscdel (delid, id) {
             for (let j = 0; j<this.good_arr.length; j++) {
                if(this.good_arr[j].id == id) {
                    for (let i = 0; i<this.good_arr[j].goods.length;i++) {
                        if(this.good_arr[j].goods[i].id == delid) {
                            if(this.good_arr[j].goods[i].status){
                                this.ALLmoney -= this.good_arr[j].goods[i].money
                            }
                            this.good_arr[j].goods.splice(i,1)
                        }      
                    }
                }
                if(this.good_arr[j].goods.length == 0){
                    this.good_arr.splice(j,1)
                }    
            }
            this.wicketcl = false
            console.log(delid,id)
        },
        // 底部结算按钮
        jsclose () {
            // this.wicketcl = true
        },
    }
};
</script>
<style lang="less">
@import "../assets/styles/submitorder.less";
</style>


