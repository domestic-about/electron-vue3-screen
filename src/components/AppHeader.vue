<script setup>
import { getImageUrl } from "@/utils";
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({});
const router = useRouter();
const route = useRoute();
const show = ref(false);

const isShowHeader = computed(
  () => !route.meta || (route.meta && route.meta.header !== false),
);
console.log(isShowHeader.value, route, "isShowHeader");
onMounted(() => {});
const list = computed(() => {
  return [
    {
      label: "首页",
      route: "/home",
    },
    {
      label: "学院概况",
      route: "/intro",
    },
    {
      label: "师资队伍",
      route: "/teacher",
    },
    {
      label: "学科专业",
      route: "/subject",
    },
    {
      label: "人才培养",
      route: "/talent",
    },
    {
      label: "科学研究",
      route: "/research",
    },
    {
      label: "社会服务",
      route: "/service",
    },
    {
      label: "国际合作与交流",
      route: "/contact",
    },
    {
      label: "文化活动",
      route: "/culture",
    },
    {
      label: "党建与思政工作",
      route: "/party",
    },
    {
      label: "校友风采",
      route: "/alumni",
    },
  ];
});
const activeRouteIndex = computed(() => {
  console.log(route.name);
  const moduleName = route.name.split("-")[0];
  return list.value.findIndex((item) => {
    return item.route.replace("/", "") === moduleName;
  });
});
const clickItem = (item) => {
  router.push(item.route);
  show.value = false;
};
</script>
<template>
  <div class="wrap" v-if="isShowHeader">
    <img class="logo" src="@img/common/logo-white.svg" alt="" />
    <div class="right-menu" @click="show = true">
      <img :src="getImageUrl('home/menu.png')" alt="" />
      <span>目录</span>
    </div>
    <van-popup v-model:show="show" position="right">
      <div class="menu-list">
        <div
          class="menu-item"
          :class="{ active: activeRouteIndex === index }"
          v-for="(item, index) in list"
          :key="item.label"
          @click="clickItem(item)"
        >
          {{ item.label }}
        </div>
      </div>
    </van-popup>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100px;
  background: #00a08e;
  .flex-row;
  justify-content: space-between;
  padding: 0px 0 0px 26px;
  .logo {
    height: 68px;
  }
  .right-menu {
    padding: 30px 46px;
    .flex-row;
    gap: 7px;
    height: 100%;
    background: #00bda6;
    cursor: pointer;
    span {
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
<style scoped lang="less">
.wrap {
  :deep(.van-popup) {
    height: 100%;
    width: 270px;
    .menu-list {
      padding: 10px 20px;
      .flex-col;
      gap: 5px;
      .menu-item {
        width: 100%;
        cursor: pointer;
        background: #fff;
        display: flex;
        padding: 15px 0px;
        justify-content: center;
        align-items: center;
        color: #006e2f;
        text-align: center;
        font-size: 32px;
        font-weight: 500;
        &.active {
          background: #006b5e;
          color: #fff;
        }
      }
    }
  }
}
</style>
