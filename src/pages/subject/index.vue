<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import Subject from "./subject.vue";
import Major from "./major.vue";
const router = useRouter();
const props = defineProps({});
const route = useRoute();
const swiperRef = ref(null);
const activeIndex = ref(0);
const tabList = computed(() => [
  {
    label: "专业介绍",
    route: "/subject/subject",
    component: Subject,
  },
  {
    label: "学科介绍",
    route: "/subject/major",
    component: Major,
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
  <div class="wrap">
    <PageTitle
      title="学科专业"
      subTitle="Subject Specialty"
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
    <!-- <div class="content-wrap">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div> -->
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
