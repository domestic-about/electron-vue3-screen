<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getImageUrl } from '@/utils'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <div class='wrap'>
    <img :src="getImageUrl('teacher/teacher-1.jpg')" alt="">
  </div>
</template>
<style scoped lang='less'>
.wrap {
  width: 100vw;
  height: 100vh;
  .flex-row;
  justify-content: space-around;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>