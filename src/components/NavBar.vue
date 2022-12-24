<template>
  <div class="home_box">
    <header class="header_box" :class="{ active: !isTop }">
      <div class="left_box"></div>
      <div class="middle_box"></div>
      <div class="right_box"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isTop: true,
    };
  },
  methods: {
    changeTop() {
      console.log(666);
      let t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 50) {
        // 添加背景色
        this.isTop = false;
      } else {
        // 移除背景色
        this.isTop = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.changeTop);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.changeTop);
  },
};
</script>

<style lang='less' scoped>
.home_box {
  .header_box {
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 200;
    top: 0;
    left: 0;
    .left_box {
      width: 50px;
      flex: none;
      background: rgba(0, 0, 0, 0.2);
    }
    .right_box {
      width: 50px;
      flex: none;
      background: rgba(0, 0, 0, 0.2);
    }
    .middle_box {
      flex: auto;
      background: rgba(255, 255, 0, 0.2);
    }
    &.active {
      background: #1baeae;
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
  padding-bottom: 2000px;
}
</style>