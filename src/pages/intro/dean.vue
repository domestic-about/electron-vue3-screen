<script setup>
import UserInfo from "@/components/UserInfo.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "intro/dean/list1.png",
    name: "秦礼让",
    label: "任职时间：1952.09-1984.05",
  },
  {
    img: "intro/dean/list2.png",
    name: "彭宏泽",
    label: "任职时间：1984.06- 1991.03",
  },
  {
    img: "intro/dean/list3.png",
    name: "胡幼初",
    label: "任职时间：1991.03-1995.10",
  },
  {
    img: "intro/dean/list4.png",
    name: "陈焕春",
    label: "任职时间：1995.10-2002.12",
  },
  {
    img: "intro/dean/list5.png",
    name: "毕丁仁",
    label: "任职时间：2003.01 -2010.11",
  },
  {
    img: "intro/dean/list6.png",
    name: "赵俊龙",
    label: "任职时间：2010.12- 2017.04",
  },
  {
    img: "intro/dean/list7.png",
    name: "曹胜波",
    label: "任职时间：2017.04-",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="user-info">
      <div class="admin-list">
        <div class="admin-item" v-for="item in list" :key="item.name">
          <img :src="getImageUrl(item.img)" alt="" />
          <h5>{{ item.name }}</h5>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  .user-info {
    height: 100%;
    .flex-row;
    .admin-list {
      width: 50%;
      .flex-row;
      flex-wrap: wrap;
      gap: 20px;
      .admin-item {
        .flex-col;
        gap: 10px;

        img {
          height: 40%;
        }
        h5 {
          font-size: 24px;
          color: #006e2f;
        }
        p {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
