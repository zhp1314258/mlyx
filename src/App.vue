<template>
  <div id="app">
    <router-view></router-view>
    <!-- <TabBar v-if="$route.meta.isShowTab"></TabBar> -->
    <TabBar v-if="isShowTab"></TabBar>
  </div>
</template>
<script setup>
import TabBar from "./components/TabBar.vue";
import { watch, ref } from "vue";
import { useRoute } from "vue-router";

let route = useRoute();
let isShowTab = ref(false);
watch(
  route,
  (newVal) => {
    isShowTab.value = newVal.meta.isShowTab;
  },
  {
    immediate: true,
  }
);
</script>
<style scoped>
</style>
