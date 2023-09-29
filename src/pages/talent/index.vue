<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import { getImageUrl } from "@/utils";
const router = useRouter();
const props = defineProps({});
const route = useRoute();

const tabList = computed(() => [
  {
    label: "培养体系",
    route: "/talent/system",
  },
  {
    label: "培养条件",
    route: "/talent/condition",
  },
  {
    label: "课程建设",
    route: "/talent/course",
  },
  {
    label: "教学成果",
    route: "/talent/result",
  },
  {
    label: "竞赛获奖",
    route: "/talent/award",
  },
]);

onMounted(() => {});
</script>
<template>
  <div class="talent-wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>学院概况</h3>
      <div class="tab-list">
        <van-button
          :class="{ active: route.path === tab.route }"
          v-for="tab in tabList"
          :key="tab.label"
          @click="router.push(tab.route)"
        >
          {{ tab.label }}
        </van-button>
      </div>
    </div>
    <div class="content-wrap">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped lang="less">
.talent-wrap {
  height: 100%;
  position: relative;
  padding: 24px;
  .flex-col;
  justify-content: flex-start;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.17;
    z-index: -1;
    background: linear-gradient(
      0deg,
      #d9d9d9 -13.91%,
      rgba(217, 217, 217, 0) 83.33%
    );
    background-image: url("@img/intro/bg.png");
    background-size: 100% 100%;
  }

  .title-wrap {
    width: 100%;
    .flex-row;
    justify-content: space-between;
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
    .tab-list {
      .flex-row;
      gap: 20px;
      .van-button {
        border-radius: 12px;
        background: #fff;
        font-size: 32px;
        font-weight: 500;
        width: 204px;
        height: 80px;
        border: none;
        &.active {
          border-radius: 12px;
          background: linear-gradient(180deg, #f49002 0%, #d15f07 100%);
          color: #fff;
        }
      }
    }
  }
  .content-wrap {
    width: 100%;
    flex: 1;
  }
}
</style>
