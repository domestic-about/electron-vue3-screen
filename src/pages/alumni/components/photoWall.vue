<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";

const props = defineProps({
  type: {
    type: String,
    default: "north",
  },
  year: {
    type: String,
    default: "2023",
  },
  imgLength: {
    type: Number,
    default: 0,
  },
});

const imgWidth = computed(() => {
  if (props.imgLength === 1) {
    return 80;
  } else if (props.imgLength > 3) {
    return Math.floor(160 / props.imgLength);
  } else {
    return Math.floor(90 / props.imgLength);
  }
});
const imgHeight = computed(() => {
  if (props.imgLength === 1) {
    return "60vh";
  } else if (props.imgLength > 3) {
    return "30vh";
  } else {
    return "60vh";
  }
});

console.log(props, "props");
onMounted(() => {});
</script>
<template>
  <div class="photo-wall">
    <div class="img-list">
      <a-image-preview-group v-if="imgLength">
        <div
          class="img-item"
          :style="{ width: `${imgWidth}%`, maxHeight: `${imgHeight}` }"
          v-for="i in imgLength"
          :key="i"
        >
          <a-image
            :src="getImageUrl(`alumni/${props.type}/${props.year}/${i}.jpg`)"
            alt=""
          />
        </div>
      </a-image-preview-group>
      <div class="empty-wrap" v-else>
        <a-empty description="暂无数据" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.photo-wall {
  padding: 20px;
  .img-list {
    .flex-row;
    flex-wrap: wrap;
    gap: 10px;
    .img-item {
      .flex-row;
      align-items: flex-start;
    }
    .ant-image {
    }
  }
  .empty-wrap {
    margin-top: 100px;
    :deep(.ant-empty) {
      font-size: 32px;
      color: #666;
      .ant-empty-image {
        height: 250px;
      }
    }
  }
}
</style>
