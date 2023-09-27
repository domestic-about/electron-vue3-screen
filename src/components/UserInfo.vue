<template>
  <div class="user-info">
    <div class="admin-list">
      <div class="admin-item" v-for="item in list" :key="item.name">
        <img :src="item.img" alt="">
        <h5>{{ item.name }}</h5>
        <p>{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
defineProps(['list'])
</script>
<style scoped lang='less'>
.user-info{
  .admin-list{
    .flex-row;
    flex-wrap: wrap;
    gap: 64px;
    .admin-item{
      .flex-col;
      gap: 10px;
      img{
        width: 200px;
        height: 275px;
      }
      h5{
        font-size: 24px;
        color: #006e2f;
      }
      p{
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>