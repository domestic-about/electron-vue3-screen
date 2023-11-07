<script setup>
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "talent/condition/list6.png",
    label: "第四综合楼",
  },
  {
    img: "talent/condition/list7.png",
    label: "生猪健康养殖协同创新中心",
  },
  {
    img: "talent/condition/list8.png",
    label: "智慧教室",
  },
  {
    img: "talent/condition/list9.png",
    label: "实验动物中心",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="page-wrap">
      <div class="zero-img">
        <img :src="getImageUrl('talent/list2.png')" alt="" />
        <span class="item1">留学生85</span>
        <span class="item2">本科生1410</span>
        <span class="item3">在校学生人数（截止2017年12月）</span>
        <span class="item4">硕士生 839</span>
        <span class="item5">博士生 292</span>
      </div>
      <p class="label">
        学院具有普通本科，学术型硕、博士研究生，专业型硕士研究生，留学生等全日制学历教育培养体系，并面向社会开设成人教育本专科、自学考试本专科、农业硕士（养殖方向）和兽医硕士在职硕士学位研究生等学历教育。累计培养各类全日制学生20余万人，现有各类全日制在校学生3840人。
      </p>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .page-wrap {
    .flex-row;
    gap: 100px;
    padding-top: 135px;
    padding-left: 200px;
    align-items: center;

    .zero-img {
      position: relative;

      span {
        position: absolute;
        font-size: 24px;
        font-weight: 500;

        &.item1 {
          top: -57px;
          left: 35%;
        }

        &.item2 {
          top: 46%;
          right: -150px;
        }

        &.item3 {
          bottom: -100px;
          left: 0;
        }

        &.item4 {
          top: 75%;
          left: -140px;
        }

        &.item5 {
          top: 0%;
          left: -50px;
        }
      }
    }

    .label {
      padding: 0 100px;
      font-size: 24px;
      line-height: 45px;
    }
  }
}
</style>
