<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
onMounted(() => { })
</script>
<template>
  <div class='wrap'>
    我是简介页面
    <van-button type="primary" @click="router.back()">返回</van-button>
  </div>
</template>
<style scoped lang='less'>
.wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
</style>