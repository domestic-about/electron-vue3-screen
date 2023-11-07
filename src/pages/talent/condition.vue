<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [
  [
    {
      img: "talent/condition/list1.png",
      label: "农业部种猪质量监督检验测试中心",
      gridColumn: "1 / 5",
      gridRow: " 1 / 3",
    },
    {
      img: "talent/condition/list2.png",
      label: "动物医院",
      gridColumn: "5 / 7",
    },
    {
      img: "talent/condition/list3.png",
      label: "实验动物中心",
      gridColumn: "7 / 9",
    },
    {
      img: "talent/condition/list4.png",
      label: "华中农业大学动物疫病诊断中心",
      gridColumn: "5 / 7",
    },
    {
      img: "talent/condition/list5.png",
      label: "标本馆2",
      gridColumn: "7 / 9",
    },
  ],
  [
    {
      img: "talent/condition/list6.png",
      label: "第四综合楼",
      gridColumn: "1 / 4",
      gridRow: " 1 / 3",
    },
    {
      img: "talent/condition/list7.png",
      label: "生猪健康养殖协同创新中心",
      gridColumn: " 4 / 7",
      gridRow: " 1 / 3",
    },
    {
      img: "talent/condition/list8.png",
      label: "智慧教室",
      gridColumn: "7 / 9",
    },
    {
      img: "talent/condition/list9.png",
      label: "实验动物中心",
      gridColumn: "7 / 9",
    },
  ],
  [
    {
      img: "talent/condition/list10.png",
      label: "四综会议室1",
      gridColumn: "1 / 5",
      gridRow: " 1 / 3",
    },
    {
      img: "talent/condition/list11.png",
      label: "四综会议室2",
      gridColumn: "5 / 7",
    },
    {
      img: "talent/condition/list12.png",
      label: "四综会议室3",
      gridColumn: "5 / 7",
    },
    {
      img: "talent/condition/list13.png",
      label: "四综会议室4",
      gridColumn: "7 / 9",
      gridRow: " 1 / 3",
    },
  ],
  [
    {
      img: [
        "talent/condition/list14.jpg",
        // "talent/condition/list15.jpg",
        "talent/condition/list16.jpg",
      ],
      label: "标本馆",
      flex: "col",
      gridColumn: "2 / 4",
      gridRow: " 1 / 3",
    },

    {
      img: ["talent/condition/list17.jpg", "talent/condition/list18.jpg"],
      label: "四综实验室",
      flex: "row",
      gridColumn: "4 / 8",
      gridRow: " 1 / 3",
    },
  ],
];
</script>
<template>
  <div class="wrap">
    <SwiperPage :isAuto="false">
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="admin-list">
          <div
            class="admin-item"
            :style="{ gridColumn: item.gridColumn, gridRow: item.gridRow }"
            v-for="item in group"
            :key="item.name"
          >
            <div
              class="img-list"
              :class="[item.flex]"
              v-if="Array.isArray(item.img)"
            >
              <a-image
                v-for="imgItem in item.img"
                :key="imgItem"
                :src="getImageUrl(imgItem)"
                alt=""
              />
            </div>
            <a-image v-else :src="getImageUrl(item.img)" alt="" />

            <p>{{ item.label }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
.wrap {
  height: 100%;

  .admin-list {
    height: 70%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 100px 100px;

    .admin-item {
      background-color: #fff;
      padding: 10px;
      .flex-col;
      align-items: flex-start;

      :deep(.ant-image) {
        width: 100%;
      }
      .img-list {
        gap: 10px;
        &.row {
          .flex-row;
          align-items: flex-start;
        }

        &.col {
          .flex-col;
        }
      }

      p {
        margin-top: 10px;
        text-align: center;
        color: #000;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
