<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "service/list1.png",
    text: "与罗牛山股份校企合作签约",
  },
  {
    img: "service/list2.png",
    text: "与新希望集团合作签约",
  },
  {
    img: "service/list3.png",
    text: "与扬翔股份研发的集群式楼房智能化猪场",
  },
  {
    img: "service/list4.png",
    text: "孵化校办企业科前生物上市",
  },
  {
    img: "service/list5.png",
    text: "陈焕春院士带队深入湖南非洲猪瘟防控一线进行指导",
  },
  {
    img: "service/list6.png",
    text: "姜勋平教授团队赴羊场指导",
  },
  {
    img: "service/list7.png",
    text: "李家奎教授在藏区开展技术服务",
  },
  {
    img: "service/list8.png",
    text: "21届全国规模化猪场主要疫病防控与净化专题研讨会",
  },
  {
    img: "service/list9.png",
    text: "举办亚洲猪病学会第8次会议",
  },
  {
    img: "service/list10.png",
    text: "蜜蜂文化科普",
  },
  {
    img: "service/list11.png",
    text: "宠物遗传病科普活动",
  },
  {
    img: "service/list12.png",
    text: "宠物美容大赛",
  },
  {
    img: "service/list13.png",
    text: "全国规模化主场兽医技术培训班",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>社会服务</h3>
    </div>

    <SwiperPage>
      <swiper-slide>
        <div class="text-img-wrap">
          <p class="label">
            华中农业大学动物科学技术学院、动物医学院始终坚持“四个面向”，以强农兴农为己任，积极为推动畜牧业高质量发展和农业农村现代化提供人才支撑、智力支持、技术服务。
          </p>
          <p class="label">
            推进协同创新，助力稳产保供；提供科技支撑，解决国家需求；搭建交流平台，促进学术繁荣；开展科普培训，培养行业人才；开展多元服务，护航“一个健康”。
          </p>
          <div class="img-list">
            <div
              class="img-item"
              v-for="item in list.slice(0, 4)"
              :key="item.text"
            >
              <a-image :src="getImageUrl(`${item.img}`)" alt="" />
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-list">
          <div
            class="img-item"
            v-for="item in list.slice(4, 8)"
            :key="item.text"
          >
            <a-image :src="getImageUrl(`${item.img}`)" alt="" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-list">
          <div
            class="img-item"
            v-for="item in list.slice(8, 13)"
            :key="item.text"
          >
            <a-image :src="getImageUrl(`${item.img}`)" alt="" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.wrap {
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
    z-index: -1;
    background: linear-gradient(
      0deg,
      #d9d9d9 -13.91%,
      rgba(217, 217, 217, 0) 83.33%
    );
    background-image: url("@img/intro/bg.png");
    background-size: 100% 100%;
  }

  .title-wrap {
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }
  .text-img-wrap {
    .label {
      padding: 0 100px;
      font-size: 32px;
      font-weight: 500;
      color: #000;
      margin-top: 35px;
    }
  }
  .img-list {
    height: 100%;
    .flex-row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 16px;
    margin-top: 10px;
    .img-item {
      width: 410px;
      height: 321px;
      padding: 12px;
      background-color: #fff;
      :deep(.ant-image) {
        width: 386px;
        height: 217px;
      }
      p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 12px;
      }
    }
  }
}
</style>
