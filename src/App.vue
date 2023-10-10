<script setup lang="ts">
import MenuFloat from "@/components/MenuFloat.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div class="app-wrap">
    <AppHeader />
    <div class="app-main-wrap" :class="[route.name]">
      <div class="bg"></div>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <AppFooter />
    <MenuFloat />
  </div>
</template>

<style scoped lang="less">
.app-wrap {
  height: 100vh;
  .flex-col;
  overflow: hidden;
  .app-main-wrap {
    height: calc(100vh - 170px);
    overflow: hidden;
    width: 100%;
    color: #000;
    &::-webkit-scrollbar {
      display: none;
    }
    &.home {
      height: 100%;
    }
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
  }
}
</style>

<style></style>
