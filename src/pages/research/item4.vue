<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => { });
</script>

<template>
  <div class="wrap">
        <SwiperPage>
            <swiper-slide>
                我是表格1
            </swiper-slide>
            <swiper-slide>
                我是表格2
            </swiper-slide>
        </SwiperPage>
    </div>
</template>

<style lang="less" scoped></style>