<script setup>
import UserInfo from "@/components/UserInfo.vue";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => { });
const list = [
  {
    img: "intro/clerk/list1.png",
    name: "肖怡茂",
    label: "任职时间：1956.01 - 1958.11",
  },
  {
    img: "intro/clerk/list2.png",
    name: "王恒",
    label: "任职时间：1959.03 - 1961.01",
  },
  {
    img: "intro/clerk/list3.png",
    name: "武枝生",
    label: "任职时间：1961 - 1966",
  },
  {
    img: "intro/clerk/list4.png",
    name: "赵声炳",
    label: "任职时间：1980.02 - 1984.06",
  },
  {
    img: "intro/clerk/list5.png",
    name: "蒋贤文",
    label: "任职时间：1984.06 - 1991.03",
  },
  {
    img: "intro/clerk/list6.png",
    name: "李洪祥",
    label: "任职时间：1991.03 - 1995.09",
  },
  {
    img: "intro/clerk/list7.jpg",
    name: "李名家",
    label: "任职时间：1995.10 - 1998.10",
  },
  {
    img: "intro/clerk/list8.jpg",
    name: "陈焕春",
    label: "任职时间：1998.10 - 2000.08",
  },
  {
    img: "intro/clerk/list9.jpg",
    name: "张金洲",
    label: "任职时间：2000.08 - 2005.08",
  },
  {
    img: "intro/clerk/list10.jpg",
    name: "程国富",
    label: "任职时间：2006.01 - 2014.04",
  },
  {
    img: "intro/clerk/list11.jpg",
    name: "刘兴斌",
    label: "任职时间：2014.05 -",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="user-info">
      <div class="admin-list">
        <div class="admin-item" v-for="item in list" :key="item.name">
          <a-image :src="getImageUrl(item.img)" alt="" />
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
      .flex-row;
      flex-wrap: wrap;
      gap: 20px;

      .admin-item {
        .flex-col;
        gap: 10px;
        width: 250px;

        :deep(.ant-image) {
          width: 150px;
          height: 240px;
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
}</style>
