<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import { getImageUrl } from "@/utils";
import History from "./history.vue";
import Agency from "./agency.vue";
import Clerk from "./clerk.vue";
import Dean from "./dean.vue";
import Lead from "./lead.vue";
const router = useRouter();
const props = defineProps({});
const route = useRoute();
const swiperRef = ref(null);
const activeIndex = ref(0);
const isAuto = ref(true);
const isNavigation = ref(true);

const tabList = computed(() => [
  {
    label: "历史沿革",
    route: "/intro/history",
    component: History,
  },
  {
    label: "组织机构",
    route: "/intro/agency",
    component: Agency,
  },
  {
    label: "历任书记",
    route: "/intro/clerk",
    component: Clerk,
  },
  {
    label: "历任院长",
    route: "/intro/dean",
    component: Dean,
  },
  {
    label: "现任领导",
    route: "/intro/lead",
    component: Lead,
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
  <div class="intro-wrap">
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
.intro-wrap {
  position: relative;

  .content-wrap {
    width: 100%;
    height: calc(100vh - 206px);
  }
}
</style>
