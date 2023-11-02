<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";

import Student from "./student.vue";
import Teacher from "./teacher.vue";

const swiperRef = ref(null);
const activeIndex = ref(0);
const isAuto = ref(true);
const isNavigation = ref(true);

const tabList = [
  {
    label: "团学活动",
    route: "",
    component: Student,
  },
  {
    label: "团学活动",
    route: "",
    component: Teacher,
  },
];
const onSlideChange = (swiper) => {
  const index = swiper.activeIndex;
  activeIndex.value = index;
  console.log(swiper.activeIndex, "activeIndex");
};
const goToSlide = (index) => {
  console.log(swiperRef.value, index, "value");
  swiperRef.value && swiperRef.value.slideTo(index);
};
</script>
<template>
  <div class="wrap">
    <PageTitle
      title="学院概况"
      subTitle="College Overview"
      :tabList="tabList"
      :activeIndex="activeIndex"
      @changeIndex="goToSlide"
    />

    <div class="content-wrap">
      <SwiperPage
        @onSlideChange="onSlideChange"
        :isAuto="isAuto"
        :isPagination="false"
        :isNavigation="isNavigation"
        ref="swiperRef"
      >
        <template v-for="(item, index) in tabList" :key="index">
          <swiper-slide v-if="item.component">
            <component :is="item.component" />
          </swiper-slide>
        </template>
      </SwiperPage>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  position: relative;

  .content-wrap {
    width: 100%;
    height: calc(100% - 106px);
  }
}
</style>
