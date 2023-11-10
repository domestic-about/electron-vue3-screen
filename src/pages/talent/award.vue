<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import SwiperThumb from "@/components/swiper/SwiperThumb.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [
  {
    img: "talent/award/list1.jpg",
    text: "武进人才杯”江苏省第十七届大学生职业规划大赛（本科组）-二等奖-杨依晨",
  },
  {
    img: "talent/award/list2.jpg",
    text: "2023年中国（浙江·江山）蜂业博览会暨全国蜂产品市场信息交流会-优秀论文-王振、刘嘉维、方芳等",
    imgList: ["talent/award/list2-1.jpg"],
  },
  {
    img: "talent/award/list3.png",
    text: "中国研究生乡村振兴科技强农+创新大赛“强国杯”第五届牛精英挑战赛-二等奖-李天尊、敖英男、蔡文韬、姜琦",
    imgList: [
      "talent/award/list3-1.jpg",
      "talent/award/list3-2.jpg",
      "talent/award/list3-3.jpg",
    ],
  },
  {
    img: "talent/award/list4.jpg",
    text: "中国研究生乡村振兴科技强农+创新大赛“强国杯”第五届牛精英挑战赛-二等奖-耿阳、张博、杜雯鹃、杜宇峰",
    imgList: ["talent/award/list4-1.jpg"],
  },

  {
    img: "talent/award/list5.png",
    text: "第六届中国大学生5分钟科研英语演讲竞赛-全国一等奖-陶卓琳、欧阳和昊、王天娇、庞雯元",
    imgList: ["talent/award/list5-1.jpg", "talent/award/list5-2.jpg"],
  },
  {
    img: "talent/award/list6.png",
    text: "第六届中国大学生5分钟科研英语演讲竞赛-全国三等奖-李晓燕（研究生）",
  },
  {
    img: "talent/award/list7.png",
    text: "第六届中国大学生5分钟科研英语演讲竞赛-全国三等奖-漆明雨、罗茹雪",
    imgList: ["talent/award/list7-1.jpg"],
  },

  {
    img: "talent/award/list8.png",
    text: "2022年全国农科研究生乡村振兴志愿服务活动优秀成果奖-特等奖-方芳、冯小娟、李鸿屹、吕洁、刘嘉维、王振、黎骏钊、吴家旭",
    imgList: [
      "talent/award/list8-1.jpg",
      "talent/award/list8-2.jpg",
      "talent/award/list8-3.jpg",
    ],
  },
  {
    img: "talent/award/list9.jpg",
    text: "2023年全国大学生英语竞赛（NECCS）-A类二等奖-胡雅文",
    imgList: ["talent/award/list9-1.jpg"],
  },
  {
    img: "talent/award/list10.png",
    text: "中国大学生广告艺术节2023春季征集大赛-入围类-李晓燕",
  },
];
</script>
<template>
  <div class="award-wrap">
    <!-- <SwiperPage>
      <swiper-slide v-for="(group, index) in list" :key="index">
        <div class="card-list">
          <div class="card-item" v-for="item in group" :key="item.text">
            <a-image :src="getImageUrl(item.img)" alt="" />
            <p class="label">{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage> -->
    <SwiperThumb :list="list">
      <template #con="{ record }">
        <div class="con-wrap">
          <h4>{{ record.text }}</h4>
          <div class="img-wrap">
            <div class="img-award">
              <a-image :src="getImageUrl(record.img)" />
            </div>

            <div class="img-list" v-if="record.imgList">
              <a-image
                v-for="itemImg in record.imgList"
                :key="itemImg"
                :src="getImageUrl(itemImg)"
              />
            </div>
          </div>
        </div>
      </template>
      <template #thumb="{ record }">
        <div class="thumb-con">
          <div
            class="bg"
            :style="{ backgroundImage: `url(${getImageUrl(record.img)})` }"
          ></div>
          <span> {{ record.text }}</span>
        </div>
      </template>
    </SwiperThumb>
  </div>
</template>

<style scoped lang="less">
.award-wrap {
  height: 100%;
  .con-wrap {
    height: 100%;
    h4 {
      font-size: 32px;
    }
    .img-wrap {
      margin-top: 40px;
      .flex-row;
      gap: 40px;
      padding: 0 100px;
      .img-award {
        width: 50%;
        padding: 0 40px;
        :deep(.ant-image) {
          img {
            width: auto;
            max-height: 50vh;
          }
        }
      }

      .img-list {
        flex: 1;
        .flex-row;
        gap: 40px;
        flex-wrap: wrap;
        :deep(.ant-image) {
          width: calc(50% - 20px);
          padding: 0;
          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .text-wrap {
        flex: 1;
        text-align: left;
        padding-top: 40px;
        h4 {
          font-size: 32px;
          font-weight: 600;
        }
        h5 {
          margin-top: 10px;
          font-size: 28px;
          font-weight: 500;
        }

        p {
          margin-top: 10px;
          font-size: 24px;
          line-height: 45px;
        }
      }
    }
  }

  :deep(.mySwiper) {
    .swiper-slide {
      background-color: transparent;
      opacity: 1;
      padding: 0;
      .thumb-con {
        padding: 5px 10px;
        width: 100%;
        height: 100%;
        .flex-row;
        position: relative;
        color: #fff;
        font-size: 12px;
        .bg {
          position: absolute;
          bottom: 0;
          left: 0;
          top: 0;
          right: 0;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.4);
          z-index: -1;
        }
      }
    }
    .swiper-slide-thumb-active {
      opacity: 1;
      background-color: var(--primary-color);
      color: #fff;
      .thumb-con {
        padding: 5px 10px;
        width: 100%;
        height: 100%;
        .flex-row;
        position: relative;
        color: #fff;
        font-size: 12px;
        .bg {
          display: none;
        }
      }
    }
  }
}
</style>
