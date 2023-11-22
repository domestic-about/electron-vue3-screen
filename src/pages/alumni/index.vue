<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
import PageTitle from "@/components/PageTitle.vue";

const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>
<template>
  <div class="teacher-wrap">
    <PageTitle title="校友风采" subTitle="Alumni style">
      <template #right="">
        <div class="right-wrap">
          <h4>学院邮箱：myoffice@mail.hzau.edu.cn</h4>
          <p>可向学院邮箱提供校友图片</p>
        </div>
      </template>
    </PageTitle>
    <div class="content-wrap">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped lang="less">
.teacher-wrap {
  height: 100%;
  position: relative;

  .content-wrap {
    width: 100%;
    height: calc(100% - 106px);
  }
  .right-wrap {
    .flex-col;
    align-items: flex-end;
    gap: 10px;
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
}
</style>
