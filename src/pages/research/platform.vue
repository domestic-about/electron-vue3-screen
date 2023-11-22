<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
import { platformData } from "./constant";

const activeItem = ref({});
const open = ref(false);
onMounted(() => {});
const list = [];
const column = [
  {
    title: "序号",
    key: "index",
    align: "center",
  },
  {
    title: "基地名称",
    dataIndex: "title",
    key: "title",
    align: "left",
    width: "35%",
  },
  {
    title: "批建部门",
    dataIndex: "department",
    key: "department",
    align: "center",
    width: "20%",
  },
  {
    title: "负责人",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "成立年份",
    dataIndex: "year",
    key: "year",
    align: "center",
  },
  {
    title: "级别",
    dataIndex: "level",
    key: "level",
    align: "center",
  },
  {
    title: "操作",
    key: "operation",
    // fixed: "right",
    align: "center",
  },
];
const clickItem = (record) => {
  console.log(record);
  open.value = true;
  activeItem.value = record;
};
</script>

<template>
  <div class="wrap">
    <div class="page-wrap">
      <a-table
        :columns="column"
        :data-source="platformData"
        :pagination="false"
        :scroll="{ y: '70vh' }"
      >
        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === 'index'">
            <span>{{ index + 1 }}</span>
          </template>
          <template v-if="column.key === 'operation' && record.con">
            <a @click="clickItem(record)">查看详情</a>
          </template>
        </template></a-table
      >
    </div>
    <a-modal
      width="70%"
      v-model:open="open"
      :title="activeItem.title"
      wrapClassName="research-platform-modal"
      :footer="null"
    >
      <div class="modal-content">
        <div class="label-wrap">
          <p v-for="opItem in activeItem.con.intro" :key="opItem">
            {{ opItem }}
          </p>
        </div>
        <div class="img-list" v-if="activeItem.con.imgList">
          <a-image
            :src="getImageUrl(imgItem)"
            v-for="imgItem in activeItem.con.imgList"
            :key="imgItem"
          >
          </a-image>
        </div>
        <div class="result-list" v-if="activeItem.con.resultList">
          <h4>研究成果</h4>
          <div
            v-for="(resultItem, resultIndex) in activeItem.con.resultList"
            :key="resultItem.title"
          >
            <h5 v-if="resultItem.title">
              {{ `${resultIndex + 1}:  ${resultItem.title}` }}
            </h5>
            <div class="img-list">
              <a-image
                :src="getImageUrl(imgItem)"
                v-for="imgItem in resultItem.imgList"
                :key="imgItem"
              >
              </a-image>
            </div>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  height: 100%;
  overflow: scroll;

  .page-wrap {
    .flex-col;
    padding-top: 20px;
    :deep(.ant-table-wrapper) {
      width: 80%;

      .ant-table-cell {
        &:nth-child(2) {
          font-weight: bold;
        }
      }
    }
  }
}
</style>

<style lang="less">
.research-platform-modal {
  .ant-modal-content {
    padding: 40px;
  }

  .ant-modal-title {
    font-size: 24px;
    text-align: center;
  }

  .modal-content {
    .flex-col;

    .ant-image {
      width: 45%;
      margin-top: 20px;
      img {
        border-radius: 5px;
      }
    }

    .label-wrap {
      p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 40px;
      }
    }
    .img-list {
      .flex-row;
      flex-wrap: wrap;
      align-items: stretch;
      gap: 20px;
    }
    .result-list {
      h4 {
        margin-top: 30px;
        font-size: 24px;
        font-weight: bold;
      }
      h5 {
        font-size: 20px;
        margin-top: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>
