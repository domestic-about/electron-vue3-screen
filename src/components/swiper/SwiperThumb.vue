<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
const props = defineProps({
  list: {
    default: () => [],
    type: Array,
  },
  num: {
    default: 8,
    type: Number,
  },
});

const modules = [FreeMode, Navigation, Thumbs, Autoplay];
const thumbsSwiper = ref(null);
const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const onSlideChange = (swiper) => {
  const index = swiper.clickedIndex;
  const skipNumber = Math.floor(props.num / 2);
  console.log(skipNumber, props.num);
  const total = props.list.length;
  thumbsSwiper.value.slideTo(index - skipNumber);
  console.log(swiper, "swiper");
};
onMounted(() => {});
</script>
<template>
  <div class="swiper-thumb">
    <swiper
      :style="{
        '--swiper-navigation-color': '#006e2f',
        '--swiper-pagination-color': '#006e2f',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide v-for="item in list" :key="item.img">
        <slot name="con" :record="item"></slot>
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
    <swiper
      :autoPlay="true"
      :loop="true"
      @swiper="setThumbsSwiper"
      @click="onSlideChange"
      :spaceBetween="10"
      :slidesPerView="8"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in list" :key="index">
        <slot name="thumb" :record="item"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="less">
.swiper-thumb {
  height: 100%;
}

.swiper {
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.mySwiper2 {
  height: 85%;
  width: 100%;

  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
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
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
}

.mySwiper {
  height: 15%;
  box-sizing: border-box;

  .swiper-slide {
    width: 20%;
    height: 100%;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
