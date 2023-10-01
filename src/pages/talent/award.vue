<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [
  [
    {
      img: "talent/award/list1.png",
      text: "武进人才杯”江苏省第十七届大学生职业规划大赛（本科组）-二等奖-杨依晨",
    },
    {
      img: "talent/award/list2.png",
      text: "2023年中国（浙江·江山）蜂业博览会暨全国蜂产品市场信息交流会-优秀论文-王振、刘嘉维、方芳等",
    },
    {
      img: "talent/award/list3.png",
      text: "中国研究生乡村振兴科技强农+创新大赛“强国杯”第五届牛精英挑战赛-二等奖-李天尊、敖英男、蔡文韬、姜琦",
    },
  ],
  [
    {
      img: "talent/award/list4.png",
      text: "中国研究生乡村振兴科技强农+创新大赛“强国杯”第五届牛精英挑战赛-二等奖-耿阳、张博、杜雯鹃、杜宇峰",
    },
    {
      img: "talent/award/list5.png",
      text: "第六届中国大学生5分钟科研英语演讲竞赛-全国一等奖-陶卓琳、欧阳和昊、王天娇、庞雯元",
    },
    {
      img: "talent/award/list6.png",
      text: "第六届中国大学生5分钟科研英语演讲竞赛-全国三等奖-李晓燕（研究生）",
    },
  ],
  [
    {
      img: "talent/award/list7.png",
      text: "第六届中国大学生5分钟科研英语演讲竞赛-全国三等奖-漆明雨、罗茹雪",
    },
    {
      img: "talent/award/list8.png",
      text: "2022年全国农科研究生乡村振兴志愿服务活动优秀成果奖-特等奖-方芳、冯小娟、李鸿屹、吕洁、刘嘉维、王振、黎骏钊、吴家旭",
    },
    {
      img: "talent/award/list9.png",
      text: "2023年全国大学生英语竞赛（NECCS）-A类二等奖-胡雅文",
    },
  ],
  [
    {
      img: "talent/award/list10.png",
      text: "中国大学生广告艺术节2023春季征集大赛-入围类-李晓燕",
    },
  ],
];
</script>
<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="card-list">
          <div class="card-item" v-for="item in group" :key="item.text">
            <a-image :src="getImageUrl(item.img)" alt="" />
            <p class="label">{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
.wrap {
  padding-top: 60px;
  .card-list {
    .flex-row;
    align-items: flex-start;
    gap: 94px;
    .card-item {
      width: 449px;
      .flex-col;
      gap: 33px;
      img {
        max-height: 50vh;
      }
      p {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
