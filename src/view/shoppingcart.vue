<template>
    <div class="shoppingcart">
        <div class="width-center">
            <!-- 头部导航部分 -->
            <Search></Search>
            <!-- 全部商品 -->
            <div class="commodity">
                <span>全部商品</span>
                <span class="numred">3</span>
            </div>
            <!-- 商品内容部分 -->
            <div class="content">
                <!-- 全选，删除 -->
                <div class="addselect">
                    <Checkbox
                        v-model="checkAll"
                        @on-change="handleCheckAll">
                    </Checkbox>
                    <span class="qx">全选</span>
                    <span class="del" @click="delALL">删除</span>
                </div> 
                <!-- 商品 -->
                <div class="merchandise"  v-for="(items,indexs) in good_arr" :key="indexs">
                    <div class="goodsname">
                        <Checkbox class="toptwo"
                        v-model="items.status"
                        @on-change="checksecond(items)"
                        >
                        </Checkbox>
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
                        <div class="false" v-for="(item,index) in items.goods" :key="index">
                            <div class="mer-body">
                                <ul>
                                    <li>
                                        <p class="pi">西门子开关面板西门子{{item.id}}</p>
                                        <Checkbox  class="picthree"
                                        v-model="item.status"
                                        @on-change="checkthree(items,item)"></Checkbox>
                                        <img src="../assets/img/logo.png">
                                    </li>
                                    <li>800*800mm</li>
                                    <li>24.00</li>
                                    <li>5</li>
                                    <li @click="ceshi(item.id,items.id)">¥100.00</li>
                                    <li><span @click="del(item.id,items.id)">删除</span></li>
                                </ul>
                            </div>
                            <!-- <div class="wicket-bg" v-if="wicketcl">
                                <div class="delzezel">
                                    <div class="wicket-head">
                                        <span>提示</span>
                                        <Icon type="android-close" class="icon-close" @click.native="wicketcl = false"></Icon>
                                    </div>
                                    <div class="wicket-cen">
                                        <img src="../assets/img/attention.png">
                                        <span>确认要删除该商品？</span>
                                    </div>
                                    <div class="wicket-choose">
                                        <div class="choose-calloff" @click="wicketcl = false">取消</div>
                                        <div class="choose-confirm" @click="qdscdel(item.id,items.id)">确定</div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>         
                </div>
                <!-- 删除弹框 -->
                <Modal :content="qxmsg" :visible.sync="wicketcl" @determine="qdscdel(itemid,itemsid)"></Modal>
                <!-- 底部合计 -->
                <div class="mer-foot">
                    <div class="mer-total">
                        <div class="coding">
                            <span>推荐销售人员编码（选填）：</span>
                            <Input v-model="tjcode" class="input"></Input>
                        </div>
                        <div class="mer-money">
                            <p>已选商品 <span>{{shopnum}}</span> 件，合计 </p> <span class="fontbig">¥ {{ALLmoney}}</span>
                        </div>
                        <div class="close" @click="jsclose">结算</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon , CheckboxGroup ,Checkbox,Input } from "iview";
import Search from "../components/search"
import Modal from "../components/modal"
export default {
    components:{
        Icon,
        Input,
        CheckboxGroup,
        Checkbox,
        Search, //搜索框
        Modal   //删除弹框
    },
     data() {
        return {
            wicketcl:false,    //弹出框
            checkAll: false,   //全选
            secondArr:[],      //二级商店数组
            threeArr:[],       //三级商店数组
            delArr:[],         //物品删除数组
            tjcode:null,       //推荐人输入的数字
            ALLmoney:0.00,     //结算的钱
            shopnum:0,         // 选择商品件数
            qxmsg:"确认要删除该商品？",
            itemid:null,
            itemsid:null,
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
    methods:{
        // 底部结算按钮
        jsclose () {
            // this.wicketcl = true
        },
        //全选功能
        handleCheckAll () {
            // 点击后，如果全选状态是true，先把两个数组清空，再push所有id
            if(this.checkAll){
                this.secondArr = []  
                this.threeArr = []
                this.ALLmoney = 0
                this.good_arr.map((items,idxs) => {
                    items.status = true
                    this.secondArr.push(items.id)
                    items.goods.map((item) => {
                        item.status = true
                        this.threeArr.push(item.id)
                        this.ALLmoney += item.money  //结算金钱
                    })
                })
                this.shopnum = this.threeArr.length
            }else {
                // 点击后，如果全选是flase,让所有状态变成false，数组清空
                this.good_arr.map((items,idxs) => {
                    items.status = false
                    items.goods.map((item) => {
                        item.status = false
                        this.ALLmoney -= item.money //结算清空
                    })
                })
                this.secondArr = []
                this.threeArr = []
                this.shopnum = 0
            }
            // console.log(this.secondArr)
            // console.log(this.threeArr)
        },
        // 二级联动
        checksecond (items) {
            // 点击后，如果状态是false,取消掉2级数组和3级数组里面的id,状态都变成false
            if(!items.status){
                this.secondArr.splice(this.secondArr.indexOf(items.id),1)
                items.goods.map((item,index) =>{
                    this.threeArr.splice(this.threeArr.indexOf(item.id),1)
                    item.status = false
                    this.ALLmoney -= item.money
                })
                this.checkAll = false
                this.shopnum = this.threeArr.length
            }else{
                // 如果状态是true需要判断
                // 如果2级数组没有这个id的话再push，
                if(this.secondArr.indexOf(items.id)== -1){
                    this.secondArr.push(items.id)
                }
                // 如果二级数组长度等于总数组长度，全选按钮状态为true
                if(this.good_arr.length == this.secondArr.length){
                    this.checkAll = true
                }
                // 遍历后如果三级数组里面没有3级id的时候再push
                items.goods.map((item,index) =>{
                    if(this.threeArr.indexOf(item.id)== -1){
                        this.threeArr.push(item.id)
                    }
                    if(!item.status){
                        this.ALLmoney += item.money
                    }
                    item.status = true
                })
                this.shopnum = this.threeArr.length
            }
            // console.log(this.secondArr)
            // console.log(this.threeArr)           
        },
        // 三级联动
        checkthree (items,item) {
            if(item.status){
                this.threeArr.push(item.id)
                let flag = true
                items.goods.map(el => {
                    if(!el.status){
                        flag = false
                        return
                    }
                })
                items.status = flag
               
                // if(this.secondArr.indexOf(items.id)== -1){
                //     this.secondArr.push(items.id)
                // }
                if(flag){
                    this.secondArr.push(items.id)
                }
                this.ALLmoney += item.money
                this.shopnum = this.threeArr.length
            }else {
                items.status = false
                this.checkAll = false
                this.threeArr.splice(this.threeArr.indexOf(item.id),1)
                this.secondArr.splice(this.secondArr.indexOf(items.id),1)
                let flag = true
                items.goods.map(el => {
                    if(el.status){
                        flag = false
                        return
                    }
                })
                // if(flag) {
                //     this.secondArr.splice(this.secondArr.indexOf(items.id),1)
                // }
                this.ALLmoney -= item.money
                this.shopnum = this.threeArr.length 
            }     
            let  statusnum = 0 
            this.good_arr.map(el => {
                    if(el.status){
                        statusnum++
                    }
                    // console.log(this.good_arr)
                    // console.log(statusnum)
                    if(this.good_arr.length == statusnum){
                        this.checkAll = true
                    } else {
                        this.checkAll = false
                    }
                }) 
                // console.log(this.good_arr)                        
            // console.log(this.secondArr)
            // console.log(this.threeArr)            
        },
        // 整体删除
        delALL () {
            // 到时候把当前的this.threeArr给后台
        },
        // 删除
        del (itemid,itemsid) {
            this.wicketcl = true
            this.itemid = itemid
            this.itemsid = itemsid
        },
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
        }
    }
}
</script>
<style lang="less">
@import "../assets/styles/shoppingcart.less";
</style>
