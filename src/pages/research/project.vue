<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const column1 = [
  {
    title: "项目名称",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "项目批准号/项目编号",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "负责人",
    dataIndex: "person",
    key: "person",
  },
  {
    title: "财政经费（万元）",
    dataIndex: "money",
    key: "money",
  },
  {
    title: "立项日期",
    dataIndex: "date",
    key: "date",
  },
];
const dataSource1 = [
  {
    title: "",
    number: "",
    person: "",
    money: "",
    date: "",
  },
];
onMounted(() => {});
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide>
        <a-table :columns="column1" :data-source="dataSource1"></a-table>
      </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide> </swiper-slide>
      <swiper-slide> </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style lang="less" scoped></style>
