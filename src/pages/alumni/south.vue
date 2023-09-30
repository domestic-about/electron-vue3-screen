<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import constData from "./constant";
import PhotoWall from "./components/photoWall.vue";
const southData = constData.south;

const list = Object.keys(southData);

const props = defineProps({});
onMounted(() => {});
</script>
<template>
  <div class="south-wrap">
    <van-tabs
      v-model:active="active"
      background="transparent"
      :animated="true"
      title-active-color="#006E2F"
      title-inactive-color="#000"
      color="#006E2F"
      swipeable
      lazy-render
      scrollspy
      line-width="80"
    >
      <van-tab v-for="item in list" :key="item" :title="item + '届'">
        <PhotoWall :year="item" :imgLength="southData[item]" type="south" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped lang="less">
.south-wrap {
  padding-top: 30px;
  :deep(.van-tabs) {
    .van-tab {
      padding: 0 20px;
    }
    .van-tab__text {
      font-size: 32px;
      font-weight: 500;
    }
  }
}
</style>
