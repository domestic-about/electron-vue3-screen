<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import { getImageUrl } from "@/utils";
import System from "./system.vue";
import Condition from "./condition.vue";
import Course from "./course.vue";
import Result from "./result.vue";
import Award from "./award.vue";
import PracticeBase from "./practice-base.vue";
import StudentResearch from "./student-research.vue";
import Graduation from "./graduation.vue";

const router = useRouter();
const props = defineProps({});
const route = useRoute();

const swiperRef = ref(null);
const activeIndex = ref(0);

const tabList = computed(() => [
  {
    label: "培养体系",
    route: "/talent/system",
    component: System,
  },
  {
    label: "培养条件",
    route: "/talent/condition",
    component: Condition,
  },
  {
    label: "实习基地",
    component: PracticeBase,
  },

  {
    label: "课程建设",
    route: "/talent/course",
    component: Course,
  },
  {
    label: "教学成果",
    route: "/talent/result",
    component: Result,
  },
  {
    label: "学生科研",
    route: "/talent/result",
    component: StudentResearch,
  },

  {
    label: "竞赛获奖",
    route: "/talent/award",
    component: Award,
  },
  {
    label: "毕业就业",
    route: "/talent/result",
    component: Graduation,
  },
]);

onMounted(() => {});
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
  <div class="talent-wrap">
    <PageTitle
      title="人才培养"
      subTitle="Personnel training"
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
.talent-wrap {
  height: 100%;
  position: relative;

  .flex-col;
  justify-content: flex-start;

  .content-wrap {
    width: 100%;
    padding: 24px;
    height: calc(100% - 106px);
  }
}
</style>
