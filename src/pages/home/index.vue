<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import SwiperThumb from '@/components/SwiperThumb.vue'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const list = computed(() => ([
  {
    img: 'home/1.jpg'
  },
  {
    img: 'home/2.jpg'
  },


]))
</script>
<template>
  <div class='wrap'>
    <SwiperThumb :list="list" />
  </div>
</template>
<style scoped lang='less'></style>