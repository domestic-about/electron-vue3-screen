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
      img: "research/item5/1.jpg",
    },
    {
      img: "research/item5/2.png",
    },
    {
      img: "research/item5/3.jpg",
    },
    {
      img: "research/item5/4.png",
    },
    {
      img: "research/item5/5.jpg",
    },
    {
      img: "research/item5/6.jpg",
    },
    {
      img: "research/item5/7.jpg",
    },
  ],
  [
    {
      img: "research/item5/8.png",
    },
    {
      img: "research/item5/9.jpg",
    },
    {
      img: "research/item5/10.jpg",
    },

    {
      img: "research/item5/11.png",
    },
    {
      img: "research/item5/12.png",
    },
  ],
];
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="img-list">
          <a-image
            v-for="item in group"
            :key="item.name"
            :src="getImageUrl(`${item.img}`)"
            alt=""
          />
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  .img-list {
    width: 1200px;
    margin: 40px auto 0;
    .flex-row;
    gap: 24px;
    flex-wrap: wrap;
    :deep(.ant-image) {
      width: 20%;
      height: auto;
    }
  }
}
</style>
