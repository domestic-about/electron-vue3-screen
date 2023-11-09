<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { ipcRenderer } from "electron";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
    <div class="bg"></div>
    <div class="school-wrap">
      <img :src="getImageUrl('home/home-logo.png')" alt="" />
      <div class="welcome" @click="Navgator">
        <h3>欢迎进入主页</h3>
      </div>
      <!-- <p>HUAZHONG AGRICULTURAL UNIVERSITY</p> -->
    </div>
    <div class="swiper-wrap">
      <img :src="getImageUrl('home/thumb-chicken.png')" alt="" />
      <img :src="getImageUrl('home/thumb-dog.png')" alt="" />
      <img :src="getImageUrl('home/thumb-pig.png')" alt="" />
      <img :src="getImageUrl('home/thumb-cow.png')" alt="" />
      <img :src="getImageUrl('home/thumb-sheep.png')" alt="" />
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100vw;
  height: 100vh;
  background: rgba(#006b5e, 0.5);

  background: linear-gradient(to bottom, #006b5e, rgba(#006b5e, 0.3));
  position: relative;

  .bg {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;

    background: url("@img/home/bg.png") lightgray 50% / cover no-repeat;
    background-size: auto 100%;
    z-index: -1;
  }
  .school-wrap {
    color: #fff;
    .flex-col;
    padding-top: 100px;
    img {
      height: 180px;
    }

    .welcome {
      .flex-row;
      justify-content: flex-end;

      h3 {
        color: #fff;
        font-family: PingFang SC;
        font-size: 70px;
        font-weight: 200;
        margin-top: 50px;
        padding-bottom: 10px;
        border-bottom: 1px solid #fff;
        cursor: pointer;
      }
    }
  }

  .swiper-wrap {
    position: absolute;
    bottom: 100px;
    left: 0;
    right: 0;
    width: 100%;
    .flex-row;
    justify-content: space-evenly;
    img {
      width: 200px;
      animation: bounce 10s linear infinite;
      &:nth-child(1) {
        animation-delay: 6s;
      }
      &:nth-child(2) {
        animation-delay: 2s;
      }
      &:nth-child(3) {
        animation-delay: 0;
      }
      &:nth-child(4) {
        animation-delay: 4s;
      }
      &:nth-child(5) {
        animation-delay: 8s;
      }
    }
  }
}
@keyframes bounce {
  80% {
    transform: translateY(0) scale(1);
  }
  85% {
    transform: translateY(-40px) scale(1.2);
  }
  90% {
    transform: translateY(0) scale(1);
  }
  95% {
    transform: translateY(40px) scale(1.2);
  }

  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
