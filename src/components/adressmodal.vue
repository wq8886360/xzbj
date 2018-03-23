<template>
    <div class="modal-adress" v-if="visible">
        <div class="mask" @click="close()"></div>
        <div class="main">
            <div class="title">
                <p>提示</p>
                <Icon type="close-round" @click.native="close"></Icon>
            </div>
            <div class="content">
                <Icon type="ios-information-outline"></Icon>
                {{content}}
            </div>
            <div class="btn">
                <button class="cancel" @click.stop="cancel">取消</button>
                <button class="determine" @click.stop="determine">确定</button>
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
    data() {
        return {};
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
        width: 410px;
        height: 250px;
        background: #fff;
        position: absolute;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        margin-top: -125px;
        margin-left: -205px;
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
            font-size: 16px;
            color: #788492;
            padding-top: 46px;
            i {
                font-size: 28px;
                color: #49cbcd;
                margin-right: 16px;
                vertical-align: middle;
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

