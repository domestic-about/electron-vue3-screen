<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
onMounted(() => {});

</script>
<template>

    <div class="wrap">
    <p></p>
    <div class="img-list">
      <img src="" alt="">
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap{

}
</style>
