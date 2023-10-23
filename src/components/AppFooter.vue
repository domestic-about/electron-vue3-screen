<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({});
const route = useRoute();
const isShowFooter = computed(
  () => !route.meta || (route.meta && route.meta.footer !== false),
);

onMounted(() => { });
</script>
<template>
  <div class="wrap" v-if="isShowFooter">
    <h5>HUAZHONG AGRICULTURAL UNIVERSITY</h5>
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 64px;
  padding: 0 34px;
  color: rgba(0, 0, 0, 0.10);
  font-size: 24px;
}
</style>
