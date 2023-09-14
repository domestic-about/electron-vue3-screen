<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import History from './history.vue'
import Agency from './agency.vue'
import Dean from './dean.vue'
import Clerk from './clerk.vue'
import Lead from './lead.vue'
import { getImageUrl } from '@/utils'
const props = defineProps({})

const tabList = computed(() => ([
  {
    label: '历史沿革',
    component: History,
    img: 'intro/history.jpg'
  },
  {
    label: '机构设置',
    component: Agency,
    img: 'intro/agency.jpg'
  },
  {
    label: '历任院长',
    component: Dean,
    img: 'intro/dean.jpg'
  },
  {
    label: '历任书记',
    component: Clerk,
    img: 'intro/clerk.jpg'
  },
  {
    label: '现任领导',
    component: Lead,
    img: 'intro/history.jpg'
  },
]))
onMounted(() => { })
let queryParams = computed(() => { })
</script>
<template>
  <van-tabs v-model:active="active" swipeable type="card">
    <van-tab v-for="tab in tabList" :title="tab.label">
      <!-- <component :is="tab.component" /> -->
      <img class="img" :src="getImageUrl(tab.img)" />
    </van-tab>
  </van-tabs>
</template>
<style scoped lang='less'>
.img {
  width: auto;
  height: 100vh;
}
</style>