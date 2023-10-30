<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({
  title: String,
  subTitle: String,
  tabList: Object,
  activeIndex: Number,
});
const emit = defineEmits(["changeIndex"]);
onMounted(() => {});
const clickItem = (index) => {
  console.log(index, "index");
  emit("changeIndex", index);
};
</script>
<template>
  <div class="title-wrap">
    <div class="title-info">
      <h3>{{ props.title }}</h3>
      <span>{{ props.subTitle }}</span>
    </div>
    <div class="tab-list">
      <div
        class="tab-item"
        :class="{ active: index === props.activeIndex }"
        v-for="(tab, index) in props.tabList"
        :key="tab.label"
        @click="clickItem(index)"
      >
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.title-wrap {
  width: 100%;
  .flex-row;
  justify-content: space-between;
  padding: 0 34px;
  height: 106px;

  .title-info {
    h3 {
      font-size: 40px;
      font-weight: 600;
      color: #000;
    }

    span {
      font-size: 18px;
      font-weight: 500;
    }
  }
  .tab-list {
    .flex-row;
    gap: 20px;

    .tab-item {
      display: flex;
      gap: 20px;
      font-size: 30px;
      font-weight: 600;
      cursor: pointer;

      &::after {
        display: block;
        content: "/";
        color: #000;
      }

      &:last-child::after {
        content: "";
      }

      &.active {
        border-radius: 12px;
        color: #006b5e;
      }
    }
  }
}
</style>
