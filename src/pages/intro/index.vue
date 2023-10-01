<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

import { getImageUrl } from "@/utils";
const router = useRouter();
const props = defineProps({});
const route = useRoute();

const tabList = computed(() => [
  {
    label: "历史沿革",
    route: "/intro/history",
  },
  {
    label: "组织机构",
    route: "/intro/agency",
  },
  {
    label: "历任书记",
    route: "/intro/clerk",
  },
  {
    label: "历任院长",
    route: "/intro/dean",
  },
  {
    label: "现任领导",
    route: "/intro/lead",
  },
]);

onMounted(() => {});
</script>
<template>
  <div class="intro-wrap">
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
.intro-wrap {
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
