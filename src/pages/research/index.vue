<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getImageUrl } from "@/utils";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import Project from "./project.vue";
import Area from "./area.vue";
import Platform from "./platform.vue";
import Team from "./team.vue";
import Result from "./result.vue";

const router = useRouter();
const props = defineProps({});
const route = useRoute();

const swiperRef = ref(null);
const activeIndex = ref(0);
const isAuto = ref(true);
const isNavigation = ref(true);

onMounted(() => { });
const tabList = computed(() => [
  {
    label: "科研项目",
    route: "/research/project",
    component: Project,
  },
  {
    label: "科研领域",
    route: "/research/area",
    component: Area,
  },
  {
    label: "基地平台",
    route: "/research/platform",
    component: Platform,
  },
  {
    label: "科研团队",
    route: "/research/team",
    component: Team,
  },
  {
    label: "科研成果",
    route: "/research/result",
    component: Result,
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
  <div class="research-wrap">
    <PageTitle title="科学研究" subTitle="Scientific Research" :tabList="tabList" :activeIndex="activeIndex"
      @changeIndex="goToSlide" />
    <div class="content-wrap">
      <SwiperPage @onSlideChange="onSlideChange" :isAuto="isAuto" :isPagination="false" :isNavigation="isNavigation"
        ref="swiperRef">
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
.research-wrap {
  height: 100%;
  position: relative;
  padding: 24px;
  .flex-col;
  justify-content: flex-start;

  .title-wrap {
    width: 100%;
    .flex-row;
    justify-content: space-between;

    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }

    .tab-list {
      .flex-row;
      gap: 20px;

      .van-button {
        border-radius: 12px;
        background: #fff;
        font-size: 32px;
        font-weight: 500;
        width: 204px;
        height: 80px;
        border: none;

        &.active {
          border-radius: 12px;
          background: linear-gradient(180deg, #f49002 0%, #d15f07 100%);
          color: #fff;
        }
      }
    }
  }

  .content-wrap {
    width: 100%;
    flex: 1;
  }
}
</style>
