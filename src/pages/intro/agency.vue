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
    <img class="wow fadeInUp" :src="getImageUrl('intro/agency.png')" />
  </div>
</template>
<style scoped lang="less">
.agency-wrap {
  width: 100%;
  height: 100%;
  .flex-col;
  img {
    width: 100%;
  }
}
</style>
