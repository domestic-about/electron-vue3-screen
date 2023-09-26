<script setup lang="ts">
import MenuFloat from "@/components/MenuFloat.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="app-wrap">
    <AppHeader />
    <div class="app-main-wrap">
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

  .app-main-wrap {
    flex: 1;
    width: 100%;
  }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
