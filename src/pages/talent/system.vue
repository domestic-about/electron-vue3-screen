<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
onMounted(() => {});
</script>
<template>
  <div class="wrap">我是培养体系</div>
</template>

<style scoped lang="less">
.wrap {
}
</style>
