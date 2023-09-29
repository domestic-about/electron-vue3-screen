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
      img: "research/item5/list1.png",
    },
    {
      img: "research/item5/list2.png",
    },
    {
      img: "research/item5/list3.png",
    },
    {
      img: "research/item5/list4.png",
    },
    {
      img: "research/item5/list5.png",
    },
    {
      img: "research/item5/list6.png",
    },
    {
      img: "research/item5/list7.png",
    },
  ],
  [
    {
      img: "research/item5/list8.png",
    },
    {
      img: "research/item5/list9.png",
    },
    {
      img: "research/item5/list10.png",
    },

    {
      img: "research/item5/list11.png",
    },
    {
      img: "research/item5/list12.png",
    },
  ],
];
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="img-list">
          <img
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
    width: 866px;
    margin: 40px auto 0;
    .flex-row;
    gap: 24px;
    flex-wrap: wrap;
    img {
      width: 196px;
      height: 279px;
    }
  }
}
</style>
