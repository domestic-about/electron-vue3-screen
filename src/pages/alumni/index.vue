<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const tabList = computed(() => [
  {
    label: "北区（本部）校友",
    route: "/alumni/north",
  },
  {
    label: "北区（成教）校友",
    route: "/alumni/south",
  },
]);
</script>
<template>
  <div class="teacher-wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>党建与思想政治教育</h3>
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
.teacher-wrap {
  height: 100%;
  position: relative;
  padding: 24px;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.17;
    background: linear-gradient(
      0deg,
      #d9d9d9 -13.91%,
      rgba(217, 217, 217, 0) 83.33%
    );
    background-image: url("@img/intro/bg.png");
    background-size: 100% 100%;
  }
  .title-wrap {
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }
  
}
</style>
