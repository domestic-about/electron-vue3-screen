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
    <div class="title-wrap">
      <div class="title-info">
        <h3>人才培养</h3>
      <span>Personnel training</span>
      </div>
      <div class="tab-list">
        <div class="tab-item"  :class="{ active: route.path === tab.route }"
          v-for="tab in tabList"
          :key="tab.label"
          @click="router.push(tab.route)">
          {{ tab.label }}
        </div>
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
