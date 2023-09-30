<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});

import { getImageUrl } from "@/utils";
onMounted(() => {});
</script>
<template>
  <div class="wrap">
    <p>
      学院大力推进教育教学改革，成果丰硕，“十三五”以来，主持获得国家级教学成果二等奖3项、国家级实践教学成果一等奖1项，获得湖北省级教学成果特等奖2项、一等奖1项、二等奖2项。
    </p>
    <a-image :src="getImageUrl('talent/result/list1.png')" alt="" />
  </div>
</template>

<style scoped lang="less">
.wrap {
  padding-top: 110px;
  text-align: center;
  p {
    font-size: 32px;
    font-weight: 500;
    padding: 0 40px;
  }
  img {
    width: 689px;
    height: 464px;
    margin-top: 34px;
  }
}
</style>
