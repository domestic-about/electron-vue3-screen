<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <a-empty description="暂无数据" />
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-row;
}
</style>
