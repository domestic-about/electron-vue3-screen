<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    title: "动物科学",
    label: ["首批国家一流本科专业建设点", "国家卓越农林人才计划"],
    info: "本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。",
  },
  {
    title: "动物医学",
    label: ["首批国家一流本科专业建设点"],
    info: "本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。",
  },
];
</script>
<template>
  <div class="subject-wrap">
    <div class="element-item" v-for="item in list" :key="item.title">
      <div class="title">{{ item.title }}</div>
      <h5 class="label" v-for="op in item.label" :key="op">{{ op }}</h5>
      <p class="info">{{ item.info }}</p>
    </div>
  </div>
</template>
<style scoped lang="less">
.subject-wrap {
  .flex-row;
  gap: 148px;
  padding-top: 91px;

  .element-item {
    width: 598px;
    height: 503px;
    .flex-col;
    justify-content: space-between;
    .title {
      width: 379px;
      font-size: 44px;
      font-weight: 500;
      border-radius: 7.443px;
      background: linear-gradient(180deg, #006e2f 0%, #003a7d 100%);
      color: #fff;
      text-align: center;
      padding: 18px 0;
    }
    .label {
      color: #000;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      margin-top: 10px;
    }
    .info {
      margin-top: 10px;
      color: #000;
      font-size: 24px;
    }
  }
}
</style>
