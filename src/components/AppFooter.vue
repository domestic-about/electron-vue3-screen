<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({});
const route = useRoute();
const isShowFooter = () =>
  !route.meta || (route.meta && route.meta.footer !== false);
onMounted(() => {});
</script>
<template>
  <div class="wrap" v-if="isShowFooter">
    <img src="@img/common/footer-bg.svg" alt="" />
  </div>
</template>
<style scoped lang="less">
.wrap {
  img {
    width: 100%;
  }
}
</style>
