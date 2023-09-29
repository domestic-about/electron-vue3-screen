<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [
  [
    {
      img: "talent/condition/list2.png",
      label: "动物医院",
    },
    {
      img: "talent/condition/list3.png",
      label: "实验动物中心",
    },
    {
      img: "talent/condition/list4.png",
      label: "华中农业大学动物疫病诊断中心",
    },
    {
      img: "talent/condition/list5.png",
      label: "标本馆2",
    },
  ],
  [
    {
      img: "talent/condition/list6.png",
      label: "第四综合楼",
    },
    {
      img: "talent/condition/list7.png",
      label: "生猪健康养殖协同创新中心",
    },
    {
      img: "talent/condition/list8.png",
      label: "智慧教室",
    },
    {
      img: "talent/condition/list9.png",
      label: "实验动物中心",
    },
  ],
  [
    {
      img: "talent/condition/list10.png",
      label: "四综会议室1",
    },
    {
      img: "talent/condition/list11.png",
      label: "四综会议室2",
    },
    {
      img: "talent/condition/list12.png",
      label: "四综会议室3",
    },
    {
      img: "talent/condition/list13.png",
      label: "四综会议室4",
    },
  ],
  [
    {
      img: "talent/condition/list14.jpg",
      label: "标本馆1",
    },
    {
      img: "talent/condition/list15.jpg",
      label: "标本馆2",
    },
    {
      img: "talent/condition/list16.jpg",
      label: "标本馆3",
    },
    {
      img: "talent/condition/list17.jpg",
      label: "四综实验室1",
    },
    {
      img: "talent/condition/list18.jpg",
      label: "四综实验室2",
    },
  ],
];
</script>
<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="admin-list">
          <div
            class="admin-item"
            :class="{ isBig: item.isBig }"
            v-for="item in group"
            :key="item.name"
          >
            <img :src="getImageUrl(item.img)" alt="" />
            <p>{{ item.label }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
.wrap {
  padding-top: 110px;
  .admin-list {
    .flex-row;
    align-items: flex-start;
    gap: 88px;
    .admin-item {
      background-color: #fff;
      padding: 10px;
      img {
        max-width: 300px;
      }
      p {
        color: #000;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>
