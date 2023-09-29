<script setup>
import { getImageUrl } from "@/utils";
const list = [
  {
    img: "talent/item2/list2.png",
    label: "动物医院",
  },
  {
    img: "talent/item2/list3.png",
    label: "实验动物中心",
  },
  {
    img: "talent/item2/list4.png",
    label: "华中农业大学动物疫病诊断中心",
  },
  {
    img: "talent/item2/list5.png",
    label: "标本馆2",
  },
];
const pageTwoList = [
  {
    img: "talent/item2/list6.png",
    label: "第四综合楼",
  },
  {
    img: "talent/item2/list7.png",
    label: "生猪健康养殖协同创新中心",
  },
  {
    img: "talent/item2/list8.png",
    label: "智慧教室",
  },
  {
    img: "talent/item2/list9.png",
    label: "实验动物中心",
  },
];
</script>
<template>
  <div class="item2-wrap">
    <!-- <div class="page1">
    <div class="left-wrap">
    <img :src="getImageUrl('talent/item2/list1.png')" alt="">
    <p>农业部种猪质量监督检验测试中心</p>
  </div>
  <div class="right-list">
    <div class="card-item" v-for="item in list" :key="item.label">
    <img :src="getImageUrl(`${item.img}`)" alt="">
    <p class="label">{{ item.label }}</p>
    </div>
  </div>
   </div> -->
    <!-- <div class="page2">
    <div class="left-wrap">
      <div class="card-item" v-for="item in pageTwoList.slice(0,2)">
        <img :src="getImageUrl(`${item.img}`)" alt="">
        <p>{{ item.label }}</p>
      </div>
    </div>
    <div class="right-wrap">
      <div class="card-item" v-for="item in pageTwoList.slice(2,4)"> 
        <img :src="getImageUrl(`${item.img}`)" alt="">
        <p>{{ item.label }}</p>
      </div>
    </div>
   </div> -->
    <div class="page3">
      <div class="left-card-item">
        <img :src="getImageUrl('talent/item2/list10.png')" alt="" />
        <p>四综会议室1</p>
      </div>
      <div class="cen-wrap">
        <div class="card-item">
          <img :src="getImageUrl('talent/item2/list11.png')" alt="" />
          <p>四综会议室2</p>
        </div>
        <div class="card-item">
          <img :src="getImageUrl('talent/item2/list12.png')" alt="" />
          <p>四综会议室3</p>
        </div>
      </div>
      <div class="right-card-item">
        <img :src="getImageUrl('talent/item2/list13.png')" alt="" />
        <p>四综会议室4</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.item2-wrap {
  .flex-row;
  align-items: flex-start;
  gap: 44px;
  padding-top: 111px;
  font-size: 20px;
  color: #000;
  .page1 {
    //  .left-wrap{
    //   padding: 8px;
    //   background-color: #fff;
    //   img{
    //     width: 823px;
    //     height: 434px
    //   }
    //  }
    //  .right-list{
    //   .flex-row;
    //   flex-wrap: wrap;
    //   gap: 28px;
    //   justify-content: flex-start;
    //   .card-item{
    //     padding: 8px;
    //     background-color: #fff;
    //    img{
    //     width: 284px;
    //     height: 178px;
    //    }
    //    .label{

    //    }
    //   }
    //  }
  }
  .page2 {
    .flex-row;
    gap: 36px;
    .left-wrap {
      .flex-row;
      gap: 44px;
      .card-item {
        background-color: #fff;
        img {
          width: 510px;
          height: 433px;
        }
      }
    }
    .right-wrap {
      .flex-col;
      gap: 44px;
      .card-item {
        padding: 8px;
        img {
          width: 284px;
          height: 178px;
        }
      }
    }
  }
  .page3 {
    .flex-row;
    gap: 36px;
    .left-card-item {
      img {
        width: 610px;
        height: 434px;
      }
    }
    .cen-wrap {
      .flex-col;
      gap: 28px;
      .card-item {
        img {
          width: 284px;
          height: 178px;
        }
      }
    }
    .right-card-item {
      img {
        width: 284px;
        height: 434px;
      }
    }
  }
}
</style>
