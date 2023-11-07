<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
const list = [
  {
    title: "教职工井冈山培训",
    img: "culture/teacher/list1.png",
  },
  {
    title: "教职工赴湖北店子坪革命传统教育",
    img: "culture/teacher/list2.png",
  },
  {
    title: "教师节庆祝大会",
    img: "culture/teacher/list3.png",
  },
  {
    title: "教师荣休仪式",
    img: "culture/teacher/list4.png",
  },
  {
    title: "参加教工排球比赛",
    img: "culture/teacher/list5.png",
  },
  {
    title: "参加教工篮球赛",
    img: "culture/teacher/list6.png",
  },
  {
    title: "校运会出发集合",
    img: "culture/teacher/list7.png",
  },
  {
    title: "参加运动会开幕式",
    img: "culture/teacher/list8.png",
  },
  {
    title: "参观“丹青·岁月”主题画展",
    img: "culture/teacher/list9.png",
  },
  {
    title: "召开学院“双代会”",
    img: "culture/teacher/list10.png",
  },
];
onMounted(() => {});
</script>
<template>
  <div class="teacher-wrap">
    <div class="img-wrap">
      <div class="img-item" v-for="item in list" :key="item.title">
        <a-image :src="getImageUrl(item.img)" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.teacher-wrap {
  height: 100%;
  padding: 40px;
  .img-wrap {
    .flex-row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px 0;
    .img-item {
      width: 19%;

      .flex-col;
      :deep(.ant-image) {
        img {
          height: 28vh;
        }
      }
      p {
        font-size: 24px;
        margin-top: 12px;
        font-weight: 500;
      }
    }
  }
}
</style>
