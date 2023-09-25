<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps({});
const route = useRoute();
const isShowHeader = () =>
  !route.meta || (route.meta && route.meta.header !== false);
onMounted(() => {});
</script>
<template>
  <div class="wrap" v-if="isShowHeader">
    <img class="logo" src="@img/common/logo-white.svg" alt="" />
    <img class="thumb" src="@img/common/header-right.png" alt="" />
  </div>
</template>
<style scoped lang="less">
.wrap {
  width: 100%;
  height: 107px;
  background-image: linear-gradient(180deg, #006e2f 0%, #003a7d 100%);
  background-size: 100% 100%;
  .flex-row;
  justify-content: space-between;
  padding-left: 26px;
  .logo {
    height: 68px;
  }
  .thumb {
    height: 100%;
  }
}
</style>
