<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "talent/practice/list6.png",
    label: "四综会议室1",
    gridColumn: "1 / 5",
    gridRow: " 1 / 3",
  },
  {
    img: "talent/practice/list7.png",
    label: "四综会议室2",
    gridColumn: "5 / 7",
  },
  {
    img: "talent/practice/list8.png",
    label: "四综会议室3",
    gridColumn: "5 / 7",
  },
  {
    img: "talent/practice/list9.png",
    label: "四综会议室4",
    gridColumn: "7 / 9",
    gridRow: " 1 / 3",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="img-list">
      我是实习基地
      <!-- <div class="img-item" v-for="item in list.slice(0, 2)" :key="item.label">
        <a-image :src="getImageUrl(item.img)" alt="" />
        <p>{{ item.label }}</p>
      </div>
      <div class="right-img-info">
        <div class="img-item" v-for="i in list.slice(2, 4)" :key="i.label">
          <a-image :src="getImageUrl(i.img)" alt="" />
          <p>{{ i.label }}</p>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  .img-list {
    .flex-row;
    gap: 48px;
    align-items: flex-start;

    .img-item {
      :deep(.ant-image-img) {
        width: 526px;
        height: 468px;
      }
    }

    p {
      font-size: 24px;
      font-weight: 500;
    }

    .right-img-info {
      .flex-col;
      gap: 28px;
      align-items: flex-start;

      .img-item {
        :deep(.ant-image-img) {
          width: 340px;
          height: 204px;
        }
      }
    }
  }
}
</style>
