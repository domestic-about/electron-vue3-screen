<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SwiperThumb from '@/components/SwiperThumb.vue';
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const list = computed(() => ([
  {
    img: 'talent/1.jpg'
  },
  {
    img: 'talent/2.jpg'
  },
  {
    img: 'talent/3.jpg'
  },

]))
</script>
<template>
  <div class='wrap'>
    <SwiperThumb :list="list" />
  </div>
</template>
<style scoped lang='less'></style>