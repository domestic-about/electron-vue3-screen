<script setup>
import UserInfo from '@/components/UserInfo.vue';
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const list =[
{ img:'@img/intro/clerk/list6.png',
    name:'秦礼让',
    label:'任职时间：1952.09-1984.05'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'彭宏泽',
    label:'任职时间：1984.06- 1991.03'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'胡幼初',
    label:'任职时间：1991.03-1995.10'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'陈焕春',
    label:'任职时间：1995.10-2002.12'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'毕丁仁',
    label:'任职时间：2003.01 -2010.11'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'赵俊龙',
    label:'任职时间：2010.12- 2017.04'
  },
  { img:'@img/intro/clerk/list6.png',
    name:'曹胜波',
    label:'任职时间：2017.04-'
  },

]
</script>
<template>
  <div class='wrap'>
    <UserInfo :list="list"/>
  </div>
</template>
<style scoped lang='less'>
.wrap{
  padding-top: 70px;
}
</style>