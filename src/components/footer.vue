<template>
    <div class="footer" v-if="isShow">
         <div class="list">
            <a href="">卓路官网</a>
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
            this.get_foot_state(to.meta.footShow);
        }
    },
    data() {
        return {
            isShow: true
        };
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
    created() {
        this.get_foot_state(this.$route.meta.footShow);
    }
};
</script>

<style lang="less">
.footer {
    padding: 34px 0 40px;
    background: #8898ab;
    text-align: center;
    font-size: 14px;
    color: #fff;
    width: 100%;
    .list {
        a {
            margin: 0 20px;
        }
    }
    .record {
        margin: 20px 0 2px;
    }
    .ghs {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 14px;
    }
}
</style>
