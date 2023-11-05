<script setup>
import { ref, reactive, onMounted } from 'vue';
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {

});
const column1 = [
  {
    title: "人才类别",
    dataIndex: "title",
    key: "title",
    align: "center",
    width: '50%'
  },
  {
    title: "人数",
    dataIndex: "num",
    key: "num",
    align: "center",
  },
  {
    title: "名单",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
]
const dataSource1 = [
  {
    title: "中国工程院院士",
    num: "1",
    name: "陈焕春",
  },
]
const column2 = [
  {
    title: "人才类别",
    dataIndex: "title",
    key: "title",
    align: "center",
    width: '50%'
  },
  {
    title: "人数",
    dataIndex: "num",
    key: "num",
    align: "center",
  },
  {
    title: "名单",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
]
const dataSource2 = [
  {
    title: "全国创新争先奖章（状）获得者",
    num: "2",
    name: "2017：金梅林 2022：赵书红",
  },
]

</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <SwiperSlide>
        <div class="table-wrap">
          <a-table :columns="column1" :data-source="dataSource1" :pagination="{ defaultPageSize: 8 }"></a-table>
          <a-image :src="getImageUrl('teacher/list1.png')" />
          <p>2023</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="table-wrap">
          <a-table :columns="column2" :data-source="dataSource2" :pagination="{ defaultPageSize: 8 }"></a-table>
          <div class="user-list">
            <p class="user-item">
              <a-image :src="getImageUrl('teacher/list1.png')" />
            <p>2017</p>
            </p>
            <p class="user-item">
              <a-image :src="getImageUrl('teacher/list2.png')" />
            <p>2022</p>
            </p>
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.wrap {

  .table-wrap {
    text-align: center;

    :deep(.ant-image-img) {
      width: 350px;
    }

    .user-list {
      .flex-row;
      gap: 30px;

      .user-item {
        :deep(.ant-image-img) {
          width: 154px;
          height: 200px;
        }

      }
    }

    p {
      font-weight: 500;
      font-size: 24px;
      margin-top: 20px;
    }
  }
}
</style>