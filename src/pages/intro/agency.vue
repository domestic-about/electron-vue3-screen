<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
// Import Swiper Vue.js components
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});

onMounted(() => {});
</script>
<template>
  <div class="agency-wrap">
    <img :src="getImageUrl('intro/agency.svg')" />
  </div>
</template>
<style scoped lang="less">
.agency-wrap {
  width: 100%;
  height: 100%;
  .flex-col;
  .content-list {
    .flex-col;
    align-items: flex-start;

    gap: 28px;
    .content-item {
      .flex-row;
      justify-content: flex-start;
      gap: 50px;
      color: #000;
      font-size: 32px;
      font-weight: 500;
    }
  }
}
</style>
