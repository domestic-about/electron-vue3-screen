<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
// Import Swiper Vue.js components
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
const props = defineProps({});
const list = [1, 2, 3];
const contentList = [
  {
    time: "1902",
    label: "湖北农务学堂设立畜医科",
  },
  {
    time: "1950",
    label: "设立畜牧兽医系，招收兽医专业本科生",
  },
  {
    time: "1902",
    label: "院系调整，组建华中农学院，成立畜牧兽医系，招收畜牧专业本科生",
  },
  {
    time: "1902",
    label: "更名为畜牧兽医学院",
  },
  {
    time: "1902",
    label: "畜牧、兽医、动物营养与饲料科学专业调整为动物科学、动物医学专业",
  },
  {
    time: "1902",
    label: "成立动物科学技术学院和动物医学院",
  },
];
onMounted(() => {});
</script>
<template>
  <div class="agency-wrap">
    <SwiperPage>
      <swiper-slide v-for="item in list" :key="item">
        <div class="content-list">
          <div
            class="content-item"
            v-for="item in contentList"
            :key="item.label"
          >
            <span>{{ item.time }}</span>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
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
