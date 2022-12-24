<template>
  <div class="home_box">
    <header class="header_box" :class="{ active: !isTop }">
      <div class="left_box" :class="{ blue: isTop, white: !isTop }">
        <!-- <van-icon name="apps-o" /> -->
        <span class="iconfont icon-gengduo" style="font-size: 0.45rem"></span>
      </div>
      <div class="middle_box">
        <div class="search">
          <span class="search_left">码路严选</span>
          <span class="search_center"></span>
          <span class="search_right">全心全意为学员服务</span>
        </div>
      </div>
      <div class="right_box" :class="{ blue: isTop, white: !isTop }">
        <!-- #1BAEAE -->
        <span class="iconfont icon-wode" style="font-size: 0.45rem"></span>
      </div>
    </header>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in carousels" :key="item.carouselUrl">
        <img :src="item.carouselUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item>
        <span class="text">码路超市</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">码路服饰</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">全球购</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">码路生鲜</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">码路到家</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">充值缴费</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">9.9元拼</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">领券</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">省钱</span>
      </van-grid-item>
      <van-grid-item>
        <span class="text">全部</span>
      </van-grid-item>
    </van-grid>

    <!-- 新品上线 -->
    <Goods title="新品上线" :dataItem="newGoodses"></Goods>
    <!-- 热销产品 -->
    <Goods title="热销产品" :dataItem="recommendGoodses"></Goods>
  </div>
</template>
<script setup>
import { getHomeData } from "@/api/index.js";
import { reactive, toRefs, onMounted, watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Goods from "@/components/Goods.vue";
let route = useRoute();
let router = useRoute();

let isTop = ref(true);
let arr = reactive({
  carousels: [],
  hotGoodses: [],
  newGoodses: [],
  recommendGoodses: [],
});
let { carousels, hotGoodses, newGoodses, recommendGoodses } = toRefs(arr);
getHomeData().then((res) => {
  // console.log(res);
  arr.carousels = res.data.carousels;
  res.data.newGoodses.forEach((element) => {
    arr.newGoodses.push(element);
  });
  res.data.recommendGoodses.forEach((element) => {
    arr.recommendGoodses.push(element);
  });
});
let changeTop = () => {
  let t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 50) {
    isTop.value = false;
  } else {
    isTop.value = true;
  }
};
</script>
<style lang="less" scoped>
.newshopping {
  width: 100%;
  .title {
    width: 100%;
    height: 1.5rem;
    background-color: #f9f9f9;
    font-size: 0.5rem;
    color: #1baeae;
    line-height: 1.5rem;
    text-align: center;
  }
}
.home_box {
  .header_box {
    position: fixed;
    width: 100%;
    height: 1.33333rem;
    display: flex;
    align-items: center;
    z-index: 200;
    top: 0;
    left: 0;
    .left_box {
      width: 50px;
      flex: none;
      display: flex;
      justify-content: center;
      //   background: rgba(0, 0, 0, 0.2);
    }
    .right_box {
      width: 50px;
      flex: none;
      display: flex;
      justify-content: center;
      //   background: rgba(0, 0, 0, 0.2);
    }
    .middle_box {
      flex: auto;
      //   background: rgba(255, 255, 0, 0.2);
      .search {
        width: 100%;
        display: flex;
        height: 0.53333rem;
        line-height: 0.53333rem;
        padding: 0.13333rem 0;
        color: #232326;
        background: hsla(0, 0%, 100%, 0.7);
        border-radius: 0.53333rem;
        .search_left {
          padding: 0 0.26667rem;
          color: #1baeae;
          font-size: 0.53333rem;
          font-weight: 700;
          border-right: 0.02667rem solid #666;
        }
        .search_right {
          font-size: 0.32rem;
          color: #666;
          line-height: 0.56rem;
          margin-left: 0.5rem;
        }
      }
    }
    &.active {
      background: #1baeae;
    }
    .blue {
      color: #1baeae;
    }
    .white {
      color: white;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
}
.van-grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-grid-item .iconfont {
  color: #1baeae;
  font-size: 1.06667rem;
  text-align: center;
  margin-bottom: 0.18667rem;
}
.van-grid-item .text {
  font-size: 0.32rem;
  text-align: center;
}
</style>