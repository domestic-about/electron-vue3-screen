<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <img src="@img/talent/list1.png" alt="" />
    <p class="label">
      学院具有普通本科，学术型硕、博士研究生，专业型硕士研究生，留学生等全日制学历教育培养体系，并面向社会开设成人教育本专科、自学考试本专科、农业硕士（养殖方向）和兽医硕士在职硕士学位研究生等学历教育。累计培养各类全日制学生20余万人，现有各类全日制在校学生3840人。
    </p>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .flex-row;
  gap: 38px;
  padding-top: 135px;
  align-items: flex-start;
  img {
    width: 847px;
    height: 409px;
  }
  .label {
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
