<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Subject from './subject.vue'
import Major from './major.vue'

const props = defineProps({})

const tabList = computed(() => ([
  {
    label: '学科介绍',
    component: Subject
  },
  {
    label: '专业介绍',
    component: Major
  },

]))
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <van-tabs v-model:active="active" swipeable>
    <van-tab v-for="tab in tabList" :title="tab.label">
      <component :is="tab.component" />
    </van-tab>
  </van-tabs>
</template>
<style scoped lang='less'></style>