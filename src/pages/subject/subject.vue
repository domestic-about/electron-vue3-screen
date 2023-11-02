<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    title: "动物科学",
    label: "首批国家一流本科专业建设点国家卓越农林人才计划",
    info: "本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。",
    img: "subject/list1.png",
    icon: "subject/list2.png",
    color: "",
  },
  {
    title: "动物医学",
    label: "首批国家一流本科专业建设点",
    info: "本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。",
    img: "subject/list3.png",
    icon: "subject/list4.png",
    color: "",
  },
];
</script>
<template>
  <div class="subject-wrap">
    <div class="animal-item" v-for="item in list" :key="item.title">
      <img class="icon" :src="getImageUrl(item.icon)" alt="" />
      <img class="animal" :src="getImageUrl(item.img)" alt="" />
      <div class="element">
        <p class="title">{{ item.title }}</p>
        <p class="label">{{ item.label }}</p>
        <p class="info">{{ item.info }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.subject-wrap {
  .flex-row;
  .animal-item {
    position: relative;
    .icon {
      position: absolute;
    }
    .animal {
      position: absolute;
    }
    .element {
      padding: 94px 96px 326px 145px;
      .title {
        color: #006b5e;
        font-weight: 600;
        font-size: 48px;
      }
      .label {
        font-size: 24px;
        margin: 24px 0;
        font-weight: 500;
      }
      .info {
        font-size: 24px;
      }
    }
  }
}
</style>
