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
    title: "",
    label: "",
    smallImg: [
      {
        title: "狮山寻蜜活动",
        img: "culture/list1.png",
      },
    ],
    bigImg: [
      {
        title: "新生开学典礼暨“筑梦青春”导师面对面活动",
        img: "culture/list2.png",
      },
    ],
  },
];
</script>
<template>
  <div class="student-wrap">
    <SwiperPage>
      <SwiperSlide>
        <div class="page2-wrap">
          <div class="left-info">
            <h5>一、两季三节---迎新季</h5>
            <p class="label">
              学院积极响应学校号召，鼓励全院毕业生参加毕业典礼、毕业巡游、毕业荧光跑以及毕业集市等系列活动，同时，学院结合自身专业特色，在毕业巡游队伍中增加了独特的马队，祝福毕业生们在未来的学习中一马当先、马到成功，给学生的大学生涯画上完美句号。
            </p>
            <div class="img-item">
              <a-image :src="getImageUrl('culture/list3.png')" />
              <p>动科动医学院毕业巡游马队</p>
            </div>
          </div>
          <div class="right-info">
            <a-image :src="getImageUrl('culture/list4.png')" />
            <p>高翅书记在毕业典礼上发言</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page1-wrap">
          <div class="left-info">
            <h5>一、两季三节---迎新季</h5>
            <p class="label">
              为了让新生快速了解学校和专业，学院立足于“动科动医，永创第一”口号，在迎新季举办了“狮山寻宝”、“狮山寻蜜”、“狮山寻灵”等一系列融合牧医专业特色学科体验活动，旨在提升新生专业兴趣，感受学科魅力，在更人文、更开放、更自在的校园氛围中提升新生专业兴趣，感受学科魅力。
            </p>
            <div class="img-item">
              <a-image :src="getImageUrl('culture/list1.png')" />
              <p>狮山寻蜜活动</p>
            </div>
          </div>
          <div class="right-info">
            <a-image :src="getImageUrl('culture/list2.png')" />
            <p>新生开学典礼暨“筑梦青春”导师面对面活动</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page2-wrap">
          <div class="left-info">
            <h5>一、两季三节---迎新季</h5>
            <p class="label">
              学院积极响应学校号召，鼓励全院毕业生参加毕业典礼、毕业巡游、毕业荧光跑以及毕业集市等系列活动，同时，学院结合自身专业特色，在毕业巡游队伍中增加了独特的马队，祝福毕业生们在未来的学习中一马当先、马到成功，给学生的大学生涯画上完美句号。
            </p>
            <div class="img-item">
              <a-image :src="getImageUrl('culture/list3.png')" />
              <p>动科动医学院毕业巡游马队</p>
            </div>
          </div>
          <div class="right-info">
            <a-image :src="getImageUrl('culture/list4.png')" />
            <p>高翅书记在毕业典礼上发言</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page3-wrap">
          <div class="left-info">
            <h5>一、两季三节---迎新季</h5>
            <p class="label">
              在“多读书，读好书”良好风气引导下，学院依托于牧医红色读书俱乐部，开展了“串词成章”系列读书活动和“朗读者”知识竞赛，在全院营造一种“立身以立学为先，立学以读书为本”的良好氛围。
            </p>
          </div>
          <div class="right-info">
            <a-image :src="getImageUrl('culture/list5.png')" />
            <p>“朗读者”决赛现场</p>
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.student-wrap {
  padding-top: 40px;
}
p {
  font-size: 24px;
  margin-top: 12px;
  font-weight: 500;
}

.page1-wrap {
  .flex-row;
  gap: 55px;
  align-items: flex-start;
  height: 648px;

  .left-info {
    h5 {
      font-size: 32px;
      font-weight: 500;
    }

    .label {
      margin-top: 20px;
      width: 866px;
      background-color: #f7faf8;
      padding: 12px;
      font-size: 24px;
      font-weight: 400;
    }

    .img-item {
      margin-top: 60px;

      :deep(.ant-image) {
        width: 364px;
        height: 310px;
      }
    }
  }
}

.page2-wrap {
  .flex-row;
  gap: 55px;
  align-items: flex-start;

  .left-info {
    width: 866px;

    h5 {
      font-size: 32px;
      font-weight: 500;
    }

    .label {
      margin-top: 20px;
      width: 866px;
      background-color: #f7faf8;
      padding: 12px;
      font-size: 24px;
      font-weight: 400;
    }

    .img-item {
      margin-top: 68px;
      width: 100%;

      :deep(.ant-image) {
        width: 100%;
        height: 310px;
      }
    }
  }

  .right-info {
    :deep(.ant-image-img) {
      height: 600px;
    }
  }
}

.page3-wrap {
  .flex-row;
  gap: 55px;
  align-items: flex-start;

  .left-info {
    h5 {
      font-size: 32px;
      font-weight: 500;
    }

    .label {
      margin-top: 20px;
      width: 600px;
      background-color: #f7faf8;
      padding: 12px;
      font-size: 24px;
      font-weight: 400;
    }

    .img-item {
      margin-top: 68px;
      width: 100%;

      :deep(.ant-image) {
        width: 100%;
        height: 310px;
      }
    }
  }
}
</style>
