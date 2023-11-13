<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "talent/course/list1.png",
    title: "家畜育种学",
    name: "刘榜",
  },
  {
    img: "talent/course/list2.png",
    title: "兽医外科手术学",
    name: "胡长敏",
  },
  {
    img: "talent/course/list3.png",
    title: "动物组织胚胎学",
    name: "曹罡、刘华珍",
  },

  {
    img: "talent/course/list4.png",
    title: "宠物犬鉴赏",
    name: "熊家军",
  },
  {
    img: "talent/course/list5.png",
    title: "畜牧学概论",
    name: "左波",
  },
  {
    img: "talent/course/list6.png",
    title: "动物繁殖学",
    name: "杨利国",
  },
  {
    img: "talent/course/list7.png",
    title: "猪遗传育种关键技能虚拟仿真综合训练",
    name: "蒋思文",
  },
  {
    img: "talent/course/list8.png",
    title: "动物科学专业核心技能综合训练虚拟仿真项目",
    name: "齐智利",
  },
  {
    img: "talent/course/list8.png",
    title: "单克隆抗体制备及应用",
    name: "石德时",
  },
];
</script>
<template>
  <div class="wrap">
    <h5 class="title">
      学院注重打造“校-省-国家”三级一流课程体系，“十三五”以来，入选国家级一流课程9门，省级一流课程8门。
    </h5>
    <p class="line"></p>
    <div class="right-wrap">
      <div class="img-list">
        <div class="img-item" v-for="item in list" :key="item.img">
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
  </div>
</template>

<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-row;
  gap: 30px;
  background-color: #f7faf8;

  .title {
    width: 500px;
    font-size: 28px;
    font-weight: 500;
    padding: 50px;
    line-height: 60px;
  }

  .line {
    width: 2px;
    height: 600px;
    background-color: #d9d9d9;
  }

  .right-wrap {
    width: calc(100% - 500px);
    height: 100%;
    overflow: scroll;
    padding: 50px 0;
  }
  .img-list {
    flex: 1;
    .flex-row;
    flex-wrap: wrap;
    height: 100%;
    justify-content: flex-start;
    padding: 0 20px;
    gap: 30px;

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
