<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ipcRenderer } from "electron";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  CloseOutlined,
} from "@ant-design/icons-vue";
import { useCommonStore } from "@/store";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { getImageUrl } from "@/utils";
const store = useCommonStore();
const isMax = computed(() => store.isMax);
const props = defineProps({});
const router = useRouter();
const modules = [EffectCoverflow, Autoplay];
onMounted(() => {});

const list = computed(() => [
  {
    img: "home/swiper-1.png",
  },
  {
    img: "home/swiper-2.png",
  },
  {
    img: "home/swiper-3.png",
  },
]);
function Navgator() {
  router.push("/intro");
}
const changeMax = () => {
  console.log(window, "window");
  store.changeSize(true);
  ipcRenderer.send("maximize");
};
const changeMin = () => {
  console.log(window, "window");
  store.changeSize(false);
  ipcRenderer.send("unmaximize");
};
const changeClose = () => {
  ipcRenderer.send("window-close");
};
</script>
<template>
  <div class="wrap">
    <div class="logo">
      <img src="@img/common/logo-white.svg" alt="" />
    </div>
    <div class="swiper-wrap">
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="2"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :coverflowEffect="{
          rotate: 0,
          stretch: 100,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in list" :key="index">
          <img :src="getImageUrl(item.img)" />
        </swiper-slide>
      </swiper>
    </div>
    <button class="btn" @click="Navgator()">动科动医欢迎你 ></button>
    <a-float-button-group shape="circle" :style="{ left: '24px' }">
      <a-float-button v-if="isMax" @click="changeMin">
        <template #icon>
          <FullscreenExitOutlined />
        </template>
      </a-float-button>
      <a-float-button v-else @click="changeMax">
        <template #icon>
          <FullscreenOutlined />
        </template>
      </a-float-button>

      <a-float-button @click="changeClose">
        <template #icon>
          <CloseOutlined />
        </template>
      </a-float-button>
    </a-float-button-group>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #006e2f 0%, #003a7d 100%);
  .logo {
    .flex-row;
    padding-top: 80px;
    img {
      height: 150px;
    }
  }
  .swiper-wrap {
    width: 100%;
    margin-top: 20px;
    .flex-row;
    .swiper {
      width: 90%;
      .swiper-slide {
        img {
          width: 100%;
        }
      }
    }
  }
  .btn {
    margin: 0 auto;
  }
}
</style>
