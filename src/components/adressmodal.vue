<template>
    <div class="modal-adress" v-if="visible">
        <div class="mask" @click="close()"></div>
        <div class="main">
            <div class="title">
                <Icon type="close-round" @click.native="close"></Icon>
            </div>
            <div class="content">
                <p class="form-title">修改收货地址</p>
                <Form :model="formItem" :label-width="87">
                    <FormItem label="收货人姓名:">
                        <Input v-model="formItem.name" placeholder="请使用真实姓名，不超过八个字"/>
                    </FormItem>
                    <FormItem label="电话:">
                        <Input v-model="formItem.tel" placeholder=""/>
                    </FormItem>
                    <FormItem label="所在地区:">
                        <Select v-model="formItem.province" style="width:132px;height: 32px;">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="formItem.city" style="width:132px;height: 32px;">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="formItem.area" style="width:132px;height: 32px;">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="详细地址:">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 3}" placeholder="详细地址，长度为5～50字" />
                    </FormItem>
                </Form>
            </div>
            <div class="btn">
                <button class="cancel" @click.stop="cancel">取消</button>
                <button class="determine" @click.stop="determine">确定</button>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon, Form, FormItem, Input, Select, Option } from "iview";
export default {
    components: {
        Icon,
        Input,
        FormItem,
        Form,
        Select,
        Option
    },
    watch: {
        a() {}
    },
    data() {
        return {
            formItem: {
                name: "",
                tel: "",
                province: "", //省
                city: "", //市
                area: "", //区
                textarea: "" //详细地址
            },
            cityList: [
                {
                    value: "New York",
                    label: "New York"
                },
                {
                    value: "London",
                    label: "London"
                },
                {
                    value: "Sydney",
                    label: "Sydney"
                },
                {
                    value: "1",
                    label: "1"
                },
                {
                    value: "2",
                    label: "2"
                },
                {
                    value: "Ottawa",
                    label: "Ottawa"
                },
                {
                    value: "Paris",
                    label: "Paris"
                },
                {
                    value: "Canberra",
                    label: "Canberra"
                }
            ]
        };
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: "错误信息"
        }
    },
    methods: {
        close() {
            this.$emit("update:visible", false);
        },
        cancel() {
            this.close();
            this.$emit("cancel");
        },
        determine() {
            this.close();
            this.$emit("determine");
        }
    }
};
</script>
<style lang="less">
.modal-adress {
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 0 5px 0;
    .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    .main {
        width: 630px;
        height: 460px;
        background: #fff;
        position: absolute;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        margin-top: -230px;
        margin-left: -315px;
        .title {
            padding: 15px 15px 0;
            color: #788492;
            overflow: hidden;
            font-size: 14px;
            p {
                float: left;
            }
            i {
                float: right;
                font-size: 16px;
            }
        }
        .content {
            text-align: center;
            font-size: 14px;
            color: #788492;
            padding-top: 20px;
            padding-left: 60px;
            padding-right: 80px;
            .form-title {
                font-size: 18px;
                color: #364049;
                margin-bottom: 20px;
            }
            form {
                font-size: 14px;
                label {
                    color: #788492;
                    font-size: 14px;
                }
            }
        }
        .btn {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 60px;
            button {
                width: 50%;
                height: 100%;
                border: none;
                outline: none;
                font-size: 14px;
                color: #fff;
            }
            .cancel {
                background: #788492;
                float: left;
            }
            .determine {
                float: right;
                background: #49cbcd;
            }
        }
    }
}
</style>

