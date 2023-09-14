<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Talent from './talent.vue'
import Dean from './dean.vue'
import Teacher from './teacher.vue'
import Example from './example.vue'
const props = defineProps({})

const tabList = computed(() => ([
  {
    label: '院士风采',
    component: Dean,

  },
  {
    label: '杰出人才',
    component: Talent,
  },
  {
    label: '教师风采',
    component: Teacher,
  },
  {
    label: '全国黄大年式教师团队',
    component: Example,
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