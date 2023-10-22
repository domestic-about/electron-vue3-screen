<script setup>
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});

const contentList = [
  {
    time: "1898",
    label: "创办湖北衣务学堂，“研求种植畜牧之学”",
  },
  {
    time: "1902",
    label: "学校更名为湖北高等农业学堂，始设畜医科",
  },
  {
    time: "1950",
    label: "原湖北农学院增设畜牧兽医系，始招兽医专业学生",
  },
  {
    time: "1952",
    label: "组建华中农学院，设畜牧兽医系，增设畜牧专业",
  },
  {
    time: "1984",
    label: "更名华中农业大学畜牧兽医系",
  },
  {
    time: "1995",
    label: "改系建院，成立华中农业大学畜牧兽医学院",
  },
  {
    time: "2002",
    label: "学院更名为动物科学技术学院和动物医学院",
  },
];
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <img  :src="getImageUrl('intro/history.png')" src="" alt="">
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-row;
  img{
    width: 100%;
  }
}
</style>
