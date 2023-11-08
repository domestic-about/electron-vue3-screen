<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
import constData from "./constant";
const props = defineProps({});

const activeIndex = ref(0);

const activeItem = computed(() => constData[activeIndex.value]);
const teachers = computed(() => activeItem.value.teachers);
onMounted(() => {});
</script>
<template>
  <div class="teacher-wrap">
    <div class="swiper-item">
      <div class="title-wrap">
        <div
          class="title"
          :class="{ active: activeIndex === index }"
          @click="activeIndex = index"
          v-for="(item, index) in constData"
          :key="item.title"
        >
          {{ item.title }}
        </div>
      </div>

      <div class="info-wrap">
        <a-card v-for="item in teachers" :key="item.title" hoverable>
          <template #cover>
            <img :src="getImageUrl(item.img)" />
          </template>
          <a-card-meta :title="item.title">
            <template #description>{{ item.job }}</template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
  </div>
  <!-- <div class="wrap">
    <div class="title-wrap">
      <h5>临床兽医学系</h5>
      <span>Department of Clinical Veterinary Medicine</span>
    </div>
    <div class="people-list">
      <div class="people-item" v-for="item in list" :key="item.img">
        <div class="people-img">
          <a-image :src="getImageUrl(item.img)" alt="" />
          <div class="text">
            <h5>{{ item.name }}</h5>
            <span>{{ item.admin }}</span>
          </div>
        </div>
        <p class="people-details">
          {{ item.info }}
        </p>
      </div>
    </div>
  </div> -->
</template>
<style scoped lang="less">
.teacher-wrap {
  padding-top: 30px;

  .swiper-item {
    .flex-row;
    align-items: stretch;
    justify-content: flex-start;
    gap: 40px;

    .title-wrap {
      .flex-col;
      justify-content: flex-start;
      gap: 20px;
      border-right: 1px solid #d9d9d9;

      .title {
        display: flex;
        width: 254px;
        height: 80px;
        padding: 18.425px 18.607px;
        justify-content: center;
        align-items: center;
        gap: 18.425px;
        flex-shrink: 0;
        background: transparent;
        font-family: PingFang SC;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        filter: drop-shadow(
          0px 3.047619104385376px 3.047619104385376px rgba(0, 0, 0, 0.25)
        );
        line-height: normal;

        &.active {
          color: #006b5e;
        }
      }
    }

    .info-wrap {
      flex: 1;
      height: calc(100vh - 340px);
      overflow: auto;

      padding: 24px 24px 0px 24px;

      border-radius: 12px;
      background: #fff;
      color: #000;
      font-size: 24px;
      font-weight: 400;
      .flex-row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 20px;
      align-items: stretch;
      :deep(.ant-card) {
        width: 180px;
      }
    }
  }
}
</style>
