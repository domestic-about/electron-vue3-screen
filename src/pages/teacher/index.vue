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
      <div class="title-info">
        <h3>学院概况</h3>
        <span>Teaching staff</span>
      </div>
    </div>
    <div class="content-wrap">
      <SwiperPage>
        <swiper-slide>
          <div class="page1-wrap">
            <div class="img-list">
              <div class="left-img-text-wrap">
                <a-image :src="getImageUrl('teacher/list1.jpg')" alt="" />
                <p>畜禽健康养殖教师团队合影</p>
              </div>
              <p class="label">
                华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
              </p>
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
              <h5>坚定信念铸师魂</h5>
              <p>
                华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
              </p>
              <p>
                近五年来，团队涌现了一批师德师风先进典型，1人获评全国三八红旗手，1人获评湖北省优秀共产党员，1人获评湖北省新冠疫情防控先进个人，1人获评湖北省师德先进个人，5人获得校师德师风表彰；团队所在学院和党支部分获“全国教育系统先进集体”“全国先进基层党组织"
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="page3-wrap">
            <div class="left-img-text-wrap">
              <a-image :src="getImageUrl('teacher/list4.png')" alt="" />
              <p>赵书红教授指导同学们开展科学研究</p>
            </div>
            <div class="right-img-text-list">
              <h5>立德树人育英才</h5>
              <p>
                团队坚持以立德树人为根本，践行陈焕春院士“三创”（创新、创造、创业）育人理念，不断创新人才培养模式和“三全育人”机制，推进课程思政建设，深化科教产教融合和实践育人，着力培养政治思想过硬、专业知识扎实、引领农牧行业健康发展的时代新人。
              </p>
              <p>
                近五年来，团队在人才培养上成效卓著，荣获国家教学成果二等奖等教学奖励4项，入选国家级一流课程9门，建成国家级虚拟仿真教学项目3项，主持和完成中国工程院高等农业人才培养战略咨询项目等30余项，发表教研论文26篇。
              </p>
              <p>
                培养的学生以第一作者在Nature Genetics、Cell Host &
                Microbe等刊物发表科研论文600余篇，荣获iGEM、“互联网+”“挑战杯”“创青春”等国内外重要竞赛金奖等81项，1人获评全国百名研究生党员标兵，1人获评中国青年志愿者优秀个人奖等。
              </p>
              <p>
                团队开创的“三创”人才培养的模式被光明日报、人民日报（海外版）等媒体报道，引起强烈社会反响；团队支撑的动物科学、动物医学专业入选首批国家一流专业建设点。
              </p>
            </div>
          </div>
        </swiper-slide>
      </SwiperPage>
    </div>
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

  .content-wrap {
    height: calc(100% - 60px);
  }

  .page1-wrap {
    margin-top: 10px;
    padding: 0 100px;

    .label {
      font-size: 24px;
      font-weight: 500;
      color: #000;
    }

    .img-list {
      margin-top: 20px;
      .flex-row;
      align-items: stretch;

      .left-img-text-wrap {
        .flex-col;
        align-items: flex-start;
        gap: 33px;

        :deep(.ant-image-img) {
          width: 813px;
          height: 30vh;
        }

        p {
          font-size: 24px;
          font-weight: 500;
        }
      }
    }

    :deep(.ant-image-img) {
      width: auto;
      height: 30vh;
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
    margin-top: 20px;
    padding: 0 120px;
    .left-img-text-wrap {
      width: 387px;
      .flex-col;
      gap: 17px;

      :deep(.ant-image) {
        width: 380px;
        height: 560px;
      }
      p {
        font-weight: 500;
        margin-top: 10px;
      }
    }

    .right-img-text-list {
      h5 {
        background-color: #cbe6ff;
        font-size: 32px;
        font-weight: 500;
        padding: 5px 0;
      }
      p {
        margin: 20px 0;
        font-size: 24px;
      }
    }
  }
  .page3-wrap {
    .flex-row;
    align-items: flex-start;
    gap: 55px;
    margin-top: 20px;
    padding: 0 120px;
    .left-img-text-wrap {
      width: 546px;
      .flex-col;
      align-items: flex-start;
      gap: 17px;

      :deep(.ant-image) {
        width: 546px;
        height: 360px;
      }
      p {
        font-weight: 500;
      }
    }

    .right-img-text-list {
      flex: 1;
      h5 {
        background-color: #cbe6ff;
        font-size: 32px;
        font-weight: 500;
        padding: 5px 0;
      }
      p {
        margin: 20px 0;
        font-size: 24px;
      }
    }
  }
}
</style>
