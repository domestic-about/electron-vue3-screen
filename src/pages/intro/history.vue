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
onMounted(() => { });
</script>
<template>
  <div class="wrap">
    <SwiperPage>
      <SwiperSlide>
        <div class="show-time">
          <div class="history-list">
            <div class="history-item" v-for="item in list.slice(0, 4)" :key="item.time">
              <h5 class="title">{{ item.label }}</h5>
              <span class="shu"></span>
              <span class="xian"></span>
              <h5> {{ item.time }}</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="show-time">
          <div class="history-list">
            <div class="history-item" v-for="item in list.slice(4, 8)" :key="item.time">
              <h5 class="title">{{ item.label }}</h5>
              <span class="shu"></span>
              <span class="xian"></span>
              <h5> {{ item.time }}</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.wrap {
  .show-time {
    .history-list {
      .flex-row;

      .history-item {
        flex: 1;
        .flex-col;

        h5 {
          font-size: 32px;
          font-weight: 500;
          margin-top: 10px;

        }

        .title {
          width: 260px;

        }

        .shu {
          width: 4px;
          height: 18px;
          background-color: #006B5E;
          margin-top: 10px;
        }

        .xian {
          width: 100%;
          height: 5px;
          background: #006B5E;
        }
      }
    }
  }
}
</style>

