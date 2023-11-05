<script setup>
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
onMounted(() => { });
const list = [
  {
    img: "talent/condition/list6.png",
    label: "第四综合楼",
  },
  {
    img: "talent/condition/list7.png",
    label: "生猪健康养殖协同创新中心",
  },
  {
    img: "talent/condition/list8.png",
    label: "智慧教室",
  },
  {
    img: "talent/condition/list9.png",
    label: '实验动物中心'
  },
]
</script>
<template>
  <div class="wrap">
    <SwiperPage>

      <SwiperSlide>
        <div class="page1-wrap">
          <div class="zero-img">
            <img :src="getImageUrl('talent/list2.png')" alt="">
            <span class="item1">留学生85</span>
            <span class="item2">本科生1410</span>
            <span class="item3">在校学生人数（截止2017年12月）</span>
            <span class="item4">硕士生 839</span>
            <span class="item5">博士生 292</span>
          </div>
          <p class="label">
            学院具有普通本科，学术型硕、博士研究生，专业型硕士研究生，留学生等全日制学历教育培养体系，并面向社会开设成人教育本专科、自学考试本专科、农业硕士（养殖方向）和兽医硕士在职硕士学位研究生等学历教育。累计培养各类全日制学生20余万人，现有各类全日制在校学生3840人。
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page2-wrap">
          <div class="img-info">
            <img :src="getImageUrl('talent/condition/list1.png')" alt="" />
            <p>农业部种猪质量监督检验测试中心</p>
          </div>
          <div class="img-list">
            <div class="img-item" v-for="item in conList" :key="item.label">
              <img :src="getImageUrl(item.img)" alt="" />
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <swiper-slide>
        <div class="page3-wrap">
          <div class="img-item" v-for="item in list.slice(0, 2)" :key="item.label">
            <a-image :src="getImageUrl(item.img)" alt="" />
            <p>{{ item.label }}</p>
          </div>
          <div class="col-img-item">
            <div class="img-item" v-for="item in list.slice(2, 4)" :key="item.label">
              <a-image :src="getImageUrl(item.img)" alt="" />
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .page1-wrap {
    .flex-row;
    gap: 100px;
    padding-top: 135px;
    padding-left: 200px;
    align-items: center;

    .zero-img {
      position: relative;

      span {
        position: absolute;
        font-size: 24px;
        font-weight: 500;

        &.item1 {
          top: -57px;
          left: 35%;
        }

        &.item2 {
          top: 46%;
          right: -150px;
        }

        &.item3 {
          bottom: -50px;
          left: 20%;
        }

        &.item4 {
          top: 75%;
          left: -140px;
        }

        &.item5 {
          top: 0%;
          left: -50px;
        }
      }
    }

    .label {
      padding: 0 100px;
      font-size: 24px;
    }
  }

  .page2-wrap {
    .flex-row;
    align-items: flex-start;
    gap: 46px;

    .img-info {
      flex: 1;

      img {
        width: 100%;
      }
    }

    p {
      margin-top: 10px;
      font-weight: 600;
      font-size: 24px;
    }

    .img-list {
      width: 40%;
      .flex-row;
      flex-wrap: wrap;
      gap: 40px;

      .img-item {
        flex: 1;
        min-width: 40%;

        img {
          width: 100%;
        }
      }
    }
  }

  .page3-wrap {
    .flex-row;
    align-items: flex-start;
    gap: 40px;

    p {
      font-size: 24px;
      font-weight: 500;
      margin-top: 10px;
    }
  }
}
</style>
