<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/utils'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
const props = defineProps({
  list: {
    default: () => [],
    type: Array
  }
})

const modules = [FreeMode, Navigation, Thumbs, Autoplay]
const thumbsSwiper = ref(null);
const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};


onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class="wrap">
    <swiper :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" @autoplayTimeLeft="onAutoplayTimeLeft" :loop="true" :spaceBetween="10" :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }" :modules="modules" class="mySwiper2">
      <swiper-slide v-for="item in list"><img :src="getImageUrl(item.img)" /></swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
    <swiper :autoPlay="true" :loop="true" @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="5" :freeMode="true"
      :watchSlidesProgress="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="item in list"><img :src="getImageUrl(item.img)" /></swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang='less'>
.wrap {
  height: 100vh
}

.swiper {
  width: 100%;
  height: 100%;

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
  padding: 10px 0;

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