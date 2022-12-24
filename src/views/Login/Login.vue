<template>
  <div class="login">
    <van-nav-bar
      :title="isTitle ? '登录' : '注册'"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>
    <img src="../../assets/logo.png" alt="" />
    <van-form @submit="onSubmit">
      <!-- <van-cell-group inset> -->
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- </van-cell-group> -->

      <!-- 验证码 -->
      <div class="verify" style="display: flex; width: 100%; margin-top: 10px">
        <!-- <div class="verify">验证码</div> -->
        <input type="text" placeholder="验证码" v-model="identifyVal" />
        <div class="code" @click="refreshCode" style="width: 112px">
          <verify></verify>
        </div>
      </div>

      <!-- 文本提示 -->
      <div style="margin: 16px">
        <p class="link-register" @click="isTitle = !isTitle">
          {{ isTitle ? "立即注册" : "已有账号，立即登录" }}
        </p>
        <van-button round block type="primary" native-type="submit">{{
          isTitle ? "登录" : "注册"
        }}</van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs } from "vue";
import verify from "../../utils/verify.vue";
import { register, login } from "@/api/index.js";
import { useRouter } from "vue-router";
import { showNotify } from "vant";

let router = useRouter();
let userInfo = reactive({
  username: "17001100999",
  password: "123456",
  isTitle: true, // 控制是登录还是注册
});
let { username, password, isTitle } = toRefs(userInfo);
let back = () => {};
let onSubmit = () => {
  if (userInfo.isTitle) {
    login(userInfo.username, userInfo.password).then((data) => {
      if (data.resultCode == 200) {
        localStorage.setItem("mltoken", data.data);
        router.replace("/home");
        showNotify({
          type: "success",
          message: "登录成功",
        });
      }
    });
  } else {
    register(userInfo.username, userInfo.password).then((data) => {
      if (data.resultCode == 200) {
        showNotify({
          type: "success",
          message: "注册成功",
        });
        userInfo.isTitle = true; // 注册成功后开始登录
      }
    });
  }
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
}
img {
  width: 200px;
  height: 200px;
  display: block;
  margin: 20px 100px;
}
.verify {
  margin: 10px 50px;
}
.link-register {
  float: left;
  font-size: 0.37333rem;
  margin-bottom: 0.53333rem;
  color: #1989fa;
  display: inline-block;
}
</style>