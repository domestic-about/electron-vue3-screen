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
  <div class="north-wrap">
    <van-tabs v-model:active="active" background="transparent">
      <van-tab v-for="item in list" :key="item" :title="item + '届'">
        <PhotoWall :year="item" :imgLength="southData[item]" type="south" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<style scoped lang="less"></style>
