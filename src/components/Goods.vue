<template>
  <div class="good">
    <div class="good-header">
      <div class="title">{{ title }}</div>
    </div>
    <ul class="good-box">
      <router-link
        v-for="item in dataItem"
        class="good-item"
        tag="li"
        :to="'/info'"
      >
        <div class="img_box">
          <img :src="item.goodsCoverImg" alt="" />
        </div>
        <div class="good-desc">
          <div class="title">￥{{ item.goodsName }}</div>
          <div class="price">￥{{ item.sellingPrice }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  dataItem: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "默认标题",
  },
});
</script>

<style lang="less">
.good {
  width: 100%;
  background: rgb(243, 243, 243);

  .good-header {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(15, 196, 181);
    .title {
      text-align: center;
    }
  }

  .good-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;

    .good-item {
      width: 49%;
      background: white;
      margin: 2px 0;
      box-sizing: border-box;

      .img_box {
        width: 90%;
        height: 200px;
        margin: 10px auto;
        overflow: hidden;
      }

      .good-desc {
        .title {
          font-size: 0.32rem;
          text-align: center;
          color: black;
        }

        .price {
          text-align: center;
          font-size: 0.32rem;
          color: #1baeae;
        }
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>