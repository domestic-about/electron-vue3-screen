<script setup>
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});

const list = [
  {
    time: "1898年",
    label: "创办湖北衣务学堂，“研求种植畜牧之学”",
  },
  {
    time: "1902年",
    label: "学校更名为湖北高等农业学堂，始设畜医科",
  },
  {
    time: "1950年",
    label: "原湖北农学院增设畜牧兽医系，始招兽医专业学生",
  },
  {
    time: "1952年",
    label: "组建华中农学院，设畜牧兽医系，增设畜牧专业",
  },
  {
    time: "1984年",
    label: "更名华中农业大学畜牧兽医系",
  },
  {
    time: "1995年",
    label: "改系建院，成立华中农业大学畜牧兽医学院",
  },
  {
    time: "2002年",
    label: "学院更名为动物科学技术学院和动物医学院",
  },
];
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <div class="history-list">
      <div v-for="item in list" :key="item.time" class="list-item">
        <h4>{{ item.time }}</h4>
        <div class="line-wrap">
          <div class="line"></div>
          <div class="circle"></div>
          <div class="line"></div>
        </div>
        <p class="autoline">{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-col;

  .history-list {
    margin-bottom: 80px;
    .flex-row;
    width: 85%;
    align-items: flex-start;
    .list-item {
      flex: 1;

      .flex-col;
      justify-content: flex-start;
      gap: 30px;
      h4 {
        font-size: 32px;
        font-family:
          PingFangSC-Medium,
          PingFang SC;
        font-weight: 500;
        color: #1d2129;
      }
      .line-wrap {
        width: 100%;
        .flex-row;

        .line {
          flex: 1;
          height: 1px;
          background: #d7dde9;
        }
        .circle {
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background: #b2bccf;
        }
      }
      p {
        font-size: 24px;
        color: #1d2129;
        padding: 0 30px;
        text-align: center;
      }
    }
  }
}
</style>
