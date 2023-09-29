<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
onMounted(() => {});
const list = [
  [
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: true,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
    },
  ],
  [
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: true,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: true,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
    },
    {
      img: "",
      name: "农业部种猪质量监督检验测试中心",
      isBig: false,
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
            <img :src="item.img" alt="" />
            <p></p>
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
    }
  }
}
</style>
