<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [
  {
    title: "实习环境",
    gridTemplateColumns: "repeat(6,1fr)",
    gridTemplateRows: "repeat(5,1fr)",
    con: [
      {
        img: "talent/condition/list1.jpg",
        label: "农业部种猪质量监督检验测试中心",
        height: "80%",
        gridColumn: "1 / 4",
        gridRow: " 1 / 4",
      },
      {
        img: "talent/condition/list5.jpg",
        label: "生猪健康养殖协同创新中心",
        height: "80%",
        gridColumn: "4 / 7",
        gridRow: " 1 / 4",
      },
      {
        img: "talent/condition/list2.jpg",
        label: "华中农业大学动物疫病诊断中心",
        gridColumn: "1 / 3",
        gridRow: "4 / 6",
      },
      {
        img: "talent/condition/list3.jpg",
        label: "实验动物中心",
        gridColumn: "3 / 5",
        gridRow: "4 / 6",
      },
      {
        img: "talent/condition/list4.jpg",
        label: "动物医院",
        gridColumn: "5 / 7",
        gridRow: "4 / 6",
      },
    ],
  },
  {
    title: "教学环境",
    con: [
      {
        img: "talent/condition/list6.jpg",
        label: "第四综合楼",
        gridColumn: "1 / 3",
        gridRow: " 1 / 2",
      },
      {
        img: "talent/condition/list13.jpg",
        label: "智慧教室",
        gridColumn: "3 / 5",
        gridRow: " 1 / 2",
      },
      {
        img: [
          "talent/condition/list7.jpg",
          "talent/condition/list8.jpg",
          "talent/condition/list9.jpg",
          "talent/condition/list10.jpg",
        ],
        label: "四综会议室",
        gridColumn: "1 / 5",
        gridRow: " 2 / 3",
      },

      {
        img: ["talent/condition/list11.jpg", "talent/condition/list12.jpg"],
        label: "四综实验室",
        flex: "row",
        gridColumn: "1 / 5",
        gridRow: " 3 / 4",
      },
    ],
  },
  {
    title: "其他",
    con: [
      {
        img: [
          "talent/condition/list14.jpg",
          "talent/condition/list15.jpg",
          "talent/condition/list16.jpg",
        ],

        label: "标本馆",
      },
    ],
  },
];
</script>
<template>
  <div class="condition-wrap">
    <div class="admin-list">
      <div class="admin-item" v-for="group in list" :key="group.title">
        <h3>{{ group.title }}</h3>
        <div
          class="img-list"
          :style="{
            gridTemplateColumns: group.gridTemplateColumns,
            gridTemplateRows: group.gridTemplateRows,
          }"
        >
          <div
            class="img-item"
            v-for="item in group.con"
            :key="item.img"
            :style="{
              gridColumn: item.gridColumn,
              gridRow: item.gridRow,
            }"
          >
            <div class="img-item-list" v-if="Array.isArray(item.img)">
              <a-image
                :src="getImageUrl(imgItem)"
                alt=""
                v-for="imgItem in item.img"
                :key="imgItem"
              />
            </div>
            <a-image v-else :src="getImageUrl(item.img)" alt="" />

            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.condition-wrap {
  height: 100%;
  overflow: scroll;

  .admin-list {
    grid-gap: 20px;
    width: 100%;
    padding: 50px 100px;

    .admin-item {
      background-color: #fff;
      padding: 10px;
      .flex-col;
      h3 {
        text-align: center;
        font-size: 24px;
        margin: 20px 0;
        background: #cbe6ff;
        padding: 10px 20px;
        border-radius: 5px;
      }

      .img-list {
        display: grid;
        grid-row-gap: 40px;
        grid-column-gap: 60px;
        background-color: #f7faf8;
        padding: 40px;
        border-radius: 8px;
        .img-item {
          .flex-col;
          gap: 20px;
          :deep(.ant-image) {
            width: 100%;
            flex: 1;
            .ant-image-img {
              border-radius: 8px;
              height: 100%;
            }
          }
          .img-item-list {
            .flex-row;
            align-items: stretch;
            gap: 20px;
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
  }
}
</style>
