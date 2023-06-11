<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const show1 = ref(false)
const show2 = ref(false)

const handleDialog = () => {
  show1.value = true
}
const handlePopver = () => {
  show2.value = true
}
const list = [
  { route: 'intro', title: '跳转到简介' },
  { route: 'about', title: '跳转到关于我们' },
  { handle: handleDialog, title: '中部弹出内容' },
  { handle: handlePopver, title: '底部弹出内容' },
]
onMounted(() => { })


const goToPage = (item: any) => {
  if (item.route) {
    router.push(item.route)
    return
  }

  if (item.handle) {
    item.handle()
  }
}
</script>
<template>
  <div class='wrap'>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="link-wrap">
      <van-button v-for="(item, index) in list" :key="index" @click="goToPage(item)">{{ item.title }}</van-button>

    </div>

    <van-popup v-model:show="show1" closeable :style="{ padding: '64px' }">给我点内容吧</van-popup>
    <van-popup v-model:show="show2" closeable position="bottom" :style="{ height: '30%' }">给我点内容吧</van-popup>
  </div>
</template>
<style scoped lang='less'>
.wrap {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 70vh;
    text-align: center;
    background-color: #39a9ed;
  }

  .link-wrap {
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>