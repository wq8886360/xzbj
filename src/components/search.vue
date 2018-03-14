<template>
  <!-- 搜索组件 -->
  <div class="search">
    <div class="head">
      <img src="../assets/img/logo.png" alt="">
      <div class="meau">
        <ul>
          <li>首页</li>
          <li>建材商品</li>
          <li>家居商品</li>
          <li>品牌活动</li>
          <li>整包方案</li>
          <li>户型</li>
        </ul>
      </div>
      <div class="find">
        <input type="text" placeholder="请输入">
        <Icon class="search-ios-search" type="ios-search"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "iview";
export default {
  components: {
    Icon
  }
}
</script>

<style lang="less">
// @import "../public/public.less";
// @import "../public/theme.less";
@import "../assets/public/public.less";
@import "../assets/public/theme.less";

.search {
  .head {
    .width-1260-center;
    position: relative;
    overflow: hidden;
    margin-top: 34.1px;
    img {
      width: 92px;
      height: 92px;
    }
    .meau {
      position: relative;
      font-size: 16px;
      color: #364049;
      cursor: pointer;
      ul {
        overflow: hidden;
        position: absolute;
        left: 145px;
        top: -68px;
        li {
          float: left;
          padding-left: 36px;
        }
      }
    }
    li:hover {
      color: #49cbcd;
    }
    .find {
      position: absolute;
      left: 860px;
      top: 15px;
      width: 400px;
      height: 36px;
      //   float: right;
      border: 1px solid #788492;
      border-radius: 100px;

      input {
        width: 100%;
        height: 100%;
        display: inline-block;
        border: none;
        outline: none;
        background: transparent;
        margin: 0 20px;
      }
      .search-ios-search {
        font-size: 21px;
        position: absolute;
        right: 17px;
        top: 7px;
      }
    }
  }
}
</style>

