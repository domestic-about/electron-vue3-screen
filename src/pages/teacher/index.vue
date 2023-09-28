<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({})
onMounted(() => { })
let queryParams = computed(() => { })
const list = [
  {
    img:'@img/teacher/list4.png',
    label:'赵书红教授指导同学们开展科学研究'
  },
  {
    img:'@img/teacher/list5.png',
    label:'陈焕春院士向农业农村部副部长马有祥一行介绍科前股份有限公司情况'
  },
  {
    img:'@img/teacher/list6.png',
    label:'团队教师深入养猪一线开展技术指导'
  },
]
</script>
<template>
  <div class="teacher-wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>师资队伍</h3>
    </div>
    <div class="page1-wrap">
      <div class="left-img-text-wrap">
        <img src="@img/teacher/list1.png" alt="">
        <p>畜禽健康养殖教师团队合影</p>
      </div>
      <img src="@img/teacher/list2.png" alt="">
      <p class="label">华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。</p>
    </div>
    <!-- <div class="page2-wrap">
       <div class="left-img-text-wrap">
        <img src="@img/teacher/list3.png" alt="">
        <p>团队所在党支部获“全国先进基层党组织”称号，何启盖教授作为获奖代表进京受奖（何启盖 供图）</p>
       </div>
       <div class="right-img-text-list">
        <div class="img-text-item" v-for="item in list" :key="item.label">
          <img :src="item.img" alt="">
        <p>{{ item.label }}</p>
        </div>
       </div>
    </div> -->
  </div>
</template>
<style scoped lang='less'>
.teacher-wrap{
  height: 100%;
  position: relative;
  padding: 24px;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.17;
    background: linear-gradient(
      0deg,
      #d9d9d9 -13.91%,
      rgba(217, 217, 217, 0) 83.33%
    );
    background-image: url("@img/intro/bg.png");
    background-size: 100% 100%;
  }
  .title-wrap{
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }
  .page1-wrap{
    .flex-row;
    align-items: flex-start;
    p{
        font-size: 24px;
        font-weight: 500;
        color: #000
      }
    .left-img-text-wrap{
      .flex-col;
      gap: 33px;
      img{
        width: 896px;
      }
    }
    img{
      width: 399px;
      height: 522px;
    }
    .label{
      padding-left: 23px;
    }
  }
  .page2-wrap{
   .flex-row;
   align-items: flex-start;
   gap: 55px;
   p{
        font-size: 24px;
        font-weight: 500;
        color: #000
      }
   .left-img-text-wrap{
    width: 387px;
    .flex-col;
    gap: 17px;
    img{
      width: 100%;
      height: 591px
    }
   }
   .right-img-text-list{
    .flex-row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;
    .img-text-item{
      width: 398px;
      .flex-col;
      gap: 13px;
      &:last-child{
      margin-right: auto;
    }
      img{
        width: 100%;
        height: 262px;
      }
    }
   }
  }
}
</style>