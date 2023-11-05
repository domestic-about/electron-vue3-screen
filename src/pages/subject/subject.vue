<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => { });
</script>
<template>
  <div class="subject-wrap">
    <div class="subject-item1">
      <div class="text-wrap">
        <img class="icon" :src="getImageUrl('subject/list2.png')" alt="动物">
        <h5>动物科学专业</h5>
        <p class="label">首批国家一流本科专业建设点国家卓越农林人才计划</p>
        <p class="details">
          本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。
        </p>
      </div>
    </div>
    <div class="subject-item2">
      <div class="text-wrap">
        <div class="text-wrap">
          <img class="icon" :src="getImageUrl('subject/list4.png')" alt="动物">
          <h5>动物医学专业</h5>
          <p class="label">首批国家一流本科专业建设点</p>
          <p class="details">
            本专业为国家级特色专业、湖北省品牌专业，培养学生掌握动物遗传育种、动物繁殖、动物营养与饲料加工、动物生产与管理、生态智慧养殖等方面的基本理论、基本知识，接受与动物科学相关的调查分析、评估、设计等方面的基本训练，具备从事动物遗传育种、繁殖、营养、生产与管理、开发与研究的基本能力，能够胜任畜牧行业内动物遗传育种与繁殖、动物营养与饲料、特种经济动物饲养、动物行为与福利、动物生产与管理、养殖环境控制等领域的教研、生产、推广、管理等工作。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.subject-wrap {
  .flex-row;

  .subject-item1 {
    flex: 1;
    height: 875px;
    padding: 95px 46px 0 275px;
    background:
      linear-gradient(rgba(216, 247, 239, 0.9), rgba(216, 247, 239, 0.5)),
      url('@/assets/img/subject/list1.png') 0px -121.5px / 100% 131.959% no-repeat;

    .text-wrap {
      position: relative;
      color: #fff;
      width: 646px;
      background-color: #006B5E;
      padding: 36px;

      .icon {
        position: absolute;
        right: 62px;
        top: -32px;
      }

      h5 {
        font-size: 48px;
        font-weight: 500;
      }

      .label {
        font-weight: 500;
      }

      p {
        margin-top: 24px;
        font-size: 24px;
      }
    }
  }

  .subject-item2 {
    position: relative;
    height: 875px;
    flex: 1;
    padding: 180px 275px 0 46px;
    background:
      linear-gradient(rgba(244, 255, 251, 0.9), rgba(244, 255, 251, 0.5)),
      url('@/assets/img/subject/list3.png') 0px -121.5px / 100% 131.959% no-repeat;

    .text-wrap {
      background-color: #fff;
      padding: 36px;

      .icon {
        position: absolute;
        right: 302px;
        top: 200px;
      }

      h5 {
        font-size: 48px;
        font-weight: 500;
        color: #006B5E;
      }

      .label {
        font-weight: 500;
      }

      p {
        margin-top: 24px;
        font-size: 24px;
      }
    }
  }
}
</style>
