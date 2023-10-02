<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const show = ref(false);

console.log(route);

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
onMounted(() => {});

const clickItem = (item) => {
  router.push(item.route);
  show.value = false;
};
</script>
<template>
  <div class="wrap">
    <van-floating-bubble
      class="floating-bubble"
      axis="xy"
      magnetic="x"
      @click="show = true"
      gap="40"
    >
      <img src="@img/common/icon-menu.png" alt="" />
      <span>目录</span>
    </van-floating-bubble>
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
  :deep(.van-popup) {
    height: 100%;
    width: 270px;
    .menu-list {
      padding: 20px;
      .flex-col;
      gap: 5px;
      .menu-item {
        cursor: pointer;
        border-radius: 12px;
        background: #fff;
        display: flex;
        padding: 15px 20px;
        justify-content: center;
        align-items: center;
        color: #006e2f;
        text-align: center;
        font-size: 28px;
        font-weight: 500;
        &.active {
          border-radius: 8px;
          background: linear-gradient(180deg, #006e2f 0%, #003a7d 100%);
          color: #fff;
        }
      }
    }
  }
}
</style>
<style lang="less">
.van-floating-bubble.floating-bubble {
  background: linear-gradient(180deg, #f49002 0%, #d15f07 100%);
  .flex-col;
  gap: 5px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  img {
    width: 50px;
  }
  span {
    font-size: 30px;
    font-weight: 500;
  }
}
</style>
