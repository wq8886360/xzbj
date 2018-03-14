<template>
    <div class="footer" v-if="isShow" :style="'background:' + bg + ';color:' + color">
         <div class="list">
            <a href="">卓路科技官网</a>
            <a href="">客户端下载</a>
            <a href="">企业招聘</a>
         </div>
         <div class="record">Copyright© 杭州卓路科技有限公司 浙ICP备17053397号-1</div>
        <div><img class="ghs" src="../assets/img/ghs.png" alt="">浙公网安备33010802008693号</div>
    </div>
</template>
<script>
export default {
    watch: {
        $route(to, from) {
            this.get_foot_state(to.meta.footShow, to.meta.bg);
        }
    },
    data() {
        return {
            isShow: true,
            bg: "#8898ab",
            color: "#fff"
        };
    },
    methods: {
        get_foot_state(state, bg) {
            if (state === false) {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
            if (bg == "#fff") {
                this.bg = "#fff";
                this.color = "#788492";
            } else {
                this.bg = "#8898ab";
                this.color = "#fff";
            }
        }
    },
    created() {
        this.get_foot_state(this.$route.meta.footShow, this.$route.meta.bg);
    }
};
</script>

<style lang="less">
.footer {
    padding: 30px 0 28px;
    background: #8898ab;
    text-align: center;
    font-size: 12px;
    color: #fff;
    width: 100%;
    .list {
        a {
            margin: 0 20px;
        }
    }
    .record {
        margin: 18px 0 2px;
    }
    .ghs {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 14px;
    }
}
</style>
