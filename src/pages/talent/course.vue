<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "talent/course/list1.png",
  },
  {
    img: "talent/course/list2.png",
  },
  {
    img: "talent/course/list3.png",
  },
  {
    img: "talent/course/list4.png",
  },
  {
    img: "talent/course/list5.png",
  },
  {
    img: "talent/course/list6.png",
  },
  {
    img: "talent/course/list7.png",
  },
  {
    img: "talent/course/list8.png",
  },
];
</script>
<template>
  <div class="wrap">
    <p>
      学院注重打造“校-省-国家”三级一流课程体系，“十三五”以来，入选国家级一流课程9门，省级一流课程8门。
    </p>
    <div class="img-list">
      <a-image
        :src="getImageUrl(item.img)"
        alt=""
        v-for="(item, index) in list"
        :key="index"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  text-align: center;
  p {
    font-size: 32px;
    font-weight: 500;
  }
  .img-list {
    .flex-row;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 34px;
    :deep(.ant-image) {
      width: 380px;
      height: 258px;
    }
  }
}
</style>
