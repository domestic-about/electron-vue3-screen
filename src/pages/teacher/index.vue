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
    img: "teacher/list4.png",
    label: "赵书红教授指导同学们开展科学研究",
  },
  {
    img: "teacher/list5.png",
    label: "陈焕春院士向农业农村部副部长马有祥一行介绍科前股份有限公司情况",
  },
  {
    img: "teacher/list6.png",
    label: "团队教师深入养猪一线开展技术指导",
  },
];
</script>
<template>
  <div class="teacher-wrap">
    <div class="title-wrap">
      <h3>师资队伍</h3>
    </div>

    <SwiperPage>
      <swiper-slide>
        <div class="page1-wrap">
          <h3>全国高校黄大年式教师团队</h3>
          <p class="label">
            华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
          </p>
          <div class="img-list">
            <div class="left-img-text-wrap">
              <a-image :src="getImageUrl('teacher/list1.jpg')" alt="" />
              <p>畜禽健康养殖教师团队合影</p>
            </div>
            <a-image :src="getImageUrl('teacher/list2.jpg')" alt="" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page2-wrap">
          <div class="left-img-text-wrap">
            <a-image :src="getImageUrl('teacher/list3.png')" alt="" />
            <p>
              团队所在党支部获“全国先进基层党组织”称号，何启盖教授作为获奖代表进京受奖（何启盖
              供图）
            </p>
          </div>
          <div class="right-img-text-list">
            <div class="img-text-item" v-for="item in list" :key="item.label">
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
.teacher-wrap {
  height: 100%;
  position: relative;
  padding: 24px;

  .title-wrap {
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }
  .page1-wrap {
    margin-top: 10px;
    padding: 0 100px;
    h3 {
      font-size: 32px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      font-size: 24px;
      font-weight: 500;
      color: #000;
    }
    .img-list {
      .flex-row;
      align-items: stretch;
      .left-img-text-wrap {
        .flex-col;
        gap: 33px;
        :deep(.ant-image) {
          width: 896px;
        }
      }
    }

    :deep(.ant-image) {
      width: 399px;
      height: 522px;
    }
    .label {
      flex: 1;
      padding-left: 23px;
    }
  }
  .page2-wrap {
    .flex-row;
    align-items: flex-start;
    gap: 55px;
    margin-top: 31px;
    padding: 0 120px;
    p {
      font-size: 24px;
      font-weight: 500;
      color: #000;
    }
    .left-img-text-wrap {
      width: 387px;
      .flex-col;
      gap: 17px;
      :deep(.ant-image) {
        width: 391px;
        height: 591px;
      }
    }
    .right-img-text-list {
      .flex-row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      max-width: 900px;
      gap: 35px;
      .img-text-item {
        max-width: 400px;
        .flex-col;
        gap: 13px;
        :deep(.ant-image) {
          width: 391px;
          height: 262px;
        }
      }
    }
  }
}
</style>
