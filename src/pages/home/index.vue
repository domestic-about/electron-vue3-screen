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
onMounted(() => { });

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
    <div class="school-wrap">
      <img :src="getImageUrl('home/home-logo.png')" alt="">
      <div class="welcome" @click="Navgator">
        <h3>欢迎进入主页</h3>
      </div>
      <p>HUAZHONG AGRICULTURAL UNIVERSITY</p>
    </div>
    <div class="swiper-wrap">
      <img :src="getImageUrl('home/home-swiper.png')" alt="">
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100vw;
  height: 100vh;
  background: #006B5E;
  .flex-row;

  .school-wrap {
    position: relative;
    padding: 345px 113px 345px 76px;
    color: #fff;

    img {
      width: 100%;
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

    p {
      position: absolute;
      bottom: 0px;
      font-size: 24px;
    }
  }

  .swiper-wrap {
    height: 100%;
    width: 40%;
    min-width: 600px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
