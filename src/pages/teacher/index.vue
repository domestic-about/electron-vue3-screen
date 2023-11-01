<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import Academician from "./academician.vue";
import Example from "./example.vue";
import Talent from "./talent.vue";
import Teacher from "./teacher.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const swiperRef = ref(null);
const activeIndex = ref(0);
const isAuto = ref(true);
const tabList = computed(() => [
  {
    label: "院士风采",
    route: "/teacher/agency",
    component: Academician,
  },
  {
    label: "杰出人才",
    route: "/teacher/clerk",
    component: Talent,
  },
  {
    label: "教师风采",
    route: "/teacher/dean",
    component: Teacher,
  },
  {
    label: "全国黄大年式教师团队",
    route: "/teacher/lead",
    component: Example,
  },
]);
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
  <div class="teacher-wrap">
    <PageTitle
      title="师资队伍"
      subTitle="Teaching staff"
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
.teacher-wrap {
  height: 100%;
  position: relative;
  padding: 24px;

  .content-wrap {
    width: 100%;
    height: calc(100% - 106px);
  }
}
</style>
