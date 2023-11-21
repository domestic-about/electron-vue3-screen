<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
import constData from "./constant";
const props = defineProps({});

const open = ref(false);
const activeCard = ref({});
const activeIndex = ref(0);

const activeItem = computed(() => constData[activeIndex.value]);
const teachers = computed(() => activeItem.value.teachers);
onMounted(() => {});
const clickItem = (record) => {
  console.log(record);
  open.value = true;
  activeCard.value = record;
};
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
        <a-card
          v-for="item in teachers"
          :key="item.title"
          hoverable
          @click="clickItem(item)"
        >
          <template #cover>
            <!-- <div
              class="img"
              :style="{ backgroundImage: `url(${getImageUrl(item.img)})` }"
            ></div> -->

            <img class="img" :src="getImageUrl(item.img)" />
          </template>
          <a-card-meta :title="item.title">
            <!-- <template #description>{{ item.job }}</template> -->
          </a-card-meta>
        </a-card>
      </div>
    </div>
    <a-modal
      width="60%"
      v-model:open="open"
      wrapClassName="teacher-teacher-modal"
      :footer="null"
    >
      <div class="admin-list">
        <div class="admin-item">
          <div class="top-admin">
            <a-image :src="getImageUrl(`${activeCard.img}`)" alt="" />
            <div class="admin-info">
              <h4 class="admin-name">{{ activeCard.title }}</h4>
              <p>{{ activeCard.job }}</p>
            </div>
          </div>

          <p class="label">{{ activeCard.label }}</p>
        </div>
      </div>
    </a-modal>
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
    gap: 20px;

    .title-wrap {
      .flex-col;
      justify-content: flex-start;
      border-right: 1px solid #d9d9d9;
      gap: 10px;

      .title {
        padding: 0 12px;
        width: 254px;
        height: 80px;
        text-align: center;
        flex-shrink: 0;
        font-family: PingFang SC;
        font-size: 24px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        filter: drop-shadow(
          0px 3.047619104385376px 3.047619104385376px rgba(0, 0, 0, 0.25)
        );

        &.active {
          color: #006b5e;
        }
      }
    }

    .info-wrap {
      flex: 1;
      height: calc(100vh - 340px);
      overflow: auto;

      padding: 0 12px;

      border-radius: 12px;
      background: #fff;
      color: #000;
      font-size: 24px;
      font-weight: 400;
      .flex-row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 15px;
      align-items: stretch;
      :deep(.ant-card) {
        width: 180px;
        .ant-card-cover {
          background-color: var(--bg);
          .img {
            height: 250px;
            background-color: var(--bg);
            background-size: auto 100%;
            background-position: center;
            background-repeat: no-repeat;
          }
        }
        .ant-card-meta-title {
          font-size: 24px;
          text-align: center;
        }
        .ant-card-meta-description {
          color: #666;
          .ellipsis3;
        }
      }
    }
  }
}
</style>

<style lang="less">
.teacher-teacher-modal {
  .ant-modal-content {
    padding: 0;
    border-radius: 8px;
  }

  .admin-item {
    border-radius: 8px;
    background: #e9f3ef;
    padding: 68px 48px;

    .top-admin {
      .flex-row;

      gap: 33px;
      align-items: flex-start;
      justify-content: flex-start;

      .ant-image {
        width: 150px;
        height: auto;
      }

      .admin-info {
        flex: 1;
        .admin-name {
          font-size: 32px;
          margin-bottom: 20px;
        }

        p {
          color: #000;
          font-size: 20px;
          line-height: 36px;
          font-weight: 500;
          margin-top: 10px;
          margin-bottom: 0;
        }
      }
    }

    .label {
      margin-top: 10px;
      font-size: 18px;
      line-height: 36px;
    }
  }
}
</style>
