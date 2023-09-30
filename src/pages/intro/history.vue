<script setup>
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});

const contentList = [
  {
    time: "1898",
    label: "创办湖北衣务学堂，“研求种植畜牧之学”",
  },
  {
    time: "1902",
    label: "学校更名为湖北高等农业学堂，始设畜医科",
  },
  {
    time: "1950",
    label: "原湖北农学院增设畜牧兽医系，始招兽医专业学生",
  },
  {
    time: "1952",
    label: "组建华中农学院，设畜牧兽医系，增设畜牧专业",
  },
  {
    time: "1984",
    label: "更名华中农业大学畜牧兽医系",
  },
  {
    time: "1995",
    label: "改系建院，成立华中农业大学畜牧兽医学院",
  },
  {
    time: "2002",
    label: "学院更名为动物科学技术学院和动物医学院",
  },
];
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide>
        <div class="content-list">
          <div
            class="content-item"
            v-for="item in contentList"
            :key="item.label"
          >
            <span>{{ item.time }}</span>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="cen-wrap">
          <div class="left-img-list-wrap">
            <a-image src="@/assets/img/intro/list1.png" alt="" />
            <a-image src="@/assets/img/intro/list2.png" alt="" />
          </div>
          <div class="content-list">
            <div
              class="content-item"
              v-for="item in contentList"
              :key="item.label"
            >
              <span>{{ item.time }}</span>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-col;

  .content-list {
    .flex-col;
    align-items: flex-start;
    gap: 28px;
    margin-top: 136px;
    padding: 0 120px;

    .content-item {
      .flex-row;
      justify-content: flex-start;
      gap: 50px;
      color: #000;
      font-size: 32px;
      font-weight: 500;
    }
  }

  .cen-wrap {
    .flex-row;
    gap: 110px;
    margin-top: 120px;

    .left-img-list-wrap {
      .flex-col;
      gap: 40px;
    }
  }
}
</style>
