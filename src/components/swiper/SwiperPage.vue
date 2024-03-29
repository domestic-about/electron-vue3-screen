<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import WOW from "@/utils/wow";
// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
const props = defineProps({
  isPagination: { default: true },
  isNavigation: { default: true },
  direction: { default: "horizontal" },
  isAuto: { default: false },
});
const emit = defineEmits(["onSlideChange"]);

const wowIndexArr = ref([]);

const modules = [Navigation];
if (props.isPagination) {
  modules.push(Pagination);
}
if (props.isAuto) {
  modules.push(Autoplay);
}
const swiperRef = ref(null);
const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

onMounted(() => {});

const slideTo = (index) => {
  console.log(swiperRef.value, "swiperRef.value");
  swiperRef.value.slideTo(index);
};

const onSwiper = (swiper) => {
  console.log(swiper, "onSwiper");
  swiperRef.value = swiper;
  initWow(swiper.activeIndex);
};
const onSlideChange = (swiper) => {
  emit("onSlideChange", swiper);
  console.log(swiper, "swiper");
  initWow(swiper.activeIndex);
};
const initWow = (activeIndex) => {
  if (!wowIndexArr.value.includes(activeIndex)) {
    new WOW({
      live: true,
      offset: 0,
    }).init();
  }
  wowIndexArr.value.push(activeIndex);
};
console.log(props, "props");

defineExpose({ slideTo });
const pagination = props.isPagination
  ? {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    }
  : null;
</script>
<template>
  <div class="swiper-page">
    <swiper
      :direction="props.direction"
      :pagination="pagination"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :nested="true"
      :spaceBetween="10"
      :modules="modules"
      class="swiper-page-content"
      ref="swiperRef"
    >
      <slot />

      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
  </div>
</template>
<style scoped lang="less">
.swiper-page {
  width: 100%;
  height: 100%;

  :deep(.swiper-page-content) {
    height: 100%;
    .swiper-button-prev,
    .swiper-button-next {
      width: 64px;
      height: 64px;
      border-radius: 32px;
      background-color: #fff;
      filter: drop-shadow(
        0px 3.047619104385376px 3.047619104385376px rgba(0, 0, 0, 0.25)
      );
      &:after {
        font-size: 32px;
        font-weight: 700;
      }
    }
    .swiper-pagination {
      font-size: 16px;
    }
    .swiper-pagination-bullet {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: #000;
      opacity: 1;
      background: #ccc;
    }

    .swiper-pagination-bullet-active {
      color: #fff;
      background: var(--primary-color);
    }
  }

  .autoplay-progress {
    position: absolute;
    right: 16px;
    top: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--primary-color);
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--primary-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
}
</style>
