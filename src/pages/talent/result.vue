<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
const props = defineProps({});

import { getImageUrl } from "@/utils";
onMounted(() => {});

const list = [
  "talent/result/list2.png",
  "talent/result/list3.png",
  "talent/result/list4.png",
  "talent/result/list6.png",
];
</script>
<template>
  <div class="result-wrap">
    <h4>
      学院大力推进教育教学改革，成果丰硕，“十三五”以来，主持获得国家级教学成果二等奖3项、国家级实践教学成果一等奖1项，获得湖北省级教学成果特等奖2项、一等奖1项、二等奖2项。
    </h4>
    <SwiperPage :isAuto="false">
      <swiper-slide>
        <div class="text-wrap">
          <a-image :src="getImageUrl('talent/result/list1.png')" alt="" />
          <a-image :src="getImageUrl('talent/result/list5.png')" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="admin-list">
          <a-image
            v-for="imgItem in list"
            :key="imgItem"
            :src="getImageUrl(imgItem)"
            alt=""
          />
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
.result-wrap {
  padding-top: 60px;
  height: 100%;
  text-align: center;
  h4 {
    font-size: 28px;
    font-weight: 500;
    line-height: 60px;
    padding: 0 40px;
  }
  :deep(.ant-image) {
    width: 689px;
    height: 464px;
    margin-top: 34px;
  }
  .admin-list {
    :deep(.ant-image) {
      width: 20%;
    }
  }
}
</style>
