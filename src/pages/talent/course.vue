<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => { });
const list = [
  {
    img: "talent/course/list1.png",
    title: '家畜育种学',
    name: '刘榜'
  },
  {
    img: "talent/course/list2.png",
    title: '家畜育种学',
    name: '刘榜'
  },
  {
    img: "talent/course/list3.png",
    title: '兽医外科手术学',
    name: '胡长敏'
  },
  {
    img: "talent/course/list4.png",
    title: '兽医外科手术学',
    name: '胡长敏'
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
    <h5 class="title">
      学院注重打造“校-省-国家”三级一流课程体系，“十三五”以来，入选国家级一流课程9门，省级一流课程8门。
    </h5>
    <p class="shu"></p>
    <div class="img-list">
      <div class="img-item" v-for="item in list.slice(0, 4)" :key="item.img">
        <a-image :src="getImageUrl(item.img)" alt="" />
        <div class="text-wrap">
          <span>课程名称</span>
          <p class="cate">{{ item.title }}</p>
          <span>课程负责人</span>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .flex-row;
  align-items: flex-start;
  gap: 30px;
  background-color: #F7FAF8;

  .title {
    width: 256px;
    font-size: 32px;
    font-weight: 500;
    flex: 1;
  }

  .shu {
    width: 6px;
    height: 600px;
    background-color: red;
  }

  .img-list {
    width: 1200px;
    .flex-row;
    flex-wrap: wrap;
    justify-content: flex-start;

    .img-item {
      width: 40%;
      flex: 1;
      .flex-row;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 20px;

      :deep(.ant-image-img) {
        width: 400px;
      }

      .text-wrap {
        padding-top: 20px;
        font-size: 24px;

        p {
          margin-top: 5px;
          margin-bottom: 20px;
          font-weight: 600;
        }
      }
    }
  }

}
</style>
