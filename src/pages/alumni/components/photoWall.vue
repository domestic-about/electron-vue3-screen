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
    return 50;
  } else if (props.imgLength > 3) {
    return Math.floor(160 / props.imgLength);
  } else {
    return Math.floor(90 / props.imgLength);
  }
});
const imgHeight = computed(() => {
  if (props.imgLength === 1) {
    return "auto";
  } else if (props.imgLength > 3) {
    return "25vh";
  } else {
    return "auto";
  }
});

console.log(props, "props");
onMounted(() => {});
</script>
<template>
  <div class="photo-wall">
    <div class="img-list">
      <a-image-preview-group>
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
}
</style>
