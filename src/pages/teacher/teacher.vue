<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "teacher/list7.png",
    name: "丁一",
    admin: "华中农业大学教授、博士生导师",
    info: "获美国明尼苏达大学执业兽医及华中农业大学预防兽医(Ph.D）双博士学位美国兽医协会会员，2017年获得美国兽医执照中国兽药协会DVM兽药使用指导分会会长中国兽医协会外科学分会常务理事基础研究方面从事代谢和神经生物学研究；应用研究方面从事动物诊断和治疗新方法的研发。在Hepatology、Emerging Infectious diseases、Environment international和Cell death & disease等国际top期刊发表SCI论文26篇，第一或通讯16篇，主持国家自然科学基金2项，参编多部教材和专著。",
  },
  {
    img: "teacher/list8.png",
    name: "丁明星",
    admin:
      "二级岗教授、博士生导师，教学动物医院院长，宠物健康研究院副院长兼宠物健康与医疗研究中心主任。",
    info: "1985年毕业于华中农业大学畜牧兽医学院兽医专业，先后获兽医病理学专业农学硕士学位和农产品加工及贮藏工程（兽医药理学方向）工学博士学位。现任中国畜牧兽医学会兽医外科学分会副理事长、中关村中兽医药产业技术创新战略联盟副理事长、中国兽医协会动物医院分级评价委员会委员、中国兽医协会宠物专科建设委员会委员、湖北省畜牧兽医学会小动物诊疗专业委员会主任等。长期从事兽医临床的教学、科研、社会服务和人材培养工作。主要研究方向为动物疼痛生理调控机制、动物普通病分子机理和小动物疾病防制，先后主持国家自然科学基金、国家重大专项、国家重点规划项目、亚洲心脏病医院合作课题等20余项，发表研究论文200余篇。主讲的课程获批为国家精品课程及国家精品资源共享课程、国家级线上一流课程，主编和主译教材各1部，专著5部，参编教材10余部。",
  },
];
</script>
<template>
  <div class="teacher-wrap">
    <div class="swiper-item">
      <div class="title-wrap">
        <div
          class="title"
          :class="{ active: activeIndex === 0 }"
          @click="activeIndex = 0"
        >
          畜牧学学科
        </div>
        <div
          class="title"
          :class="{ active: activeIndex === 1 }"
          @click="activeIndex = 1"
        >
          兽医学学科
        </div>
      </div>

      <div class="info-wrap"></div>
    </div>
  </div>
  <!-- <div class="wrap">
    <div class="title-wrap">
      <h5>临床兽医学系</h5>
      <span>Department of Clinical Veterinary Medicine</span>
    </div>
    <div class="people-list">
      <div class="people-item" v-for="item in list" :key="item.img">
        <div class="people-img">
          <a-image :src="getImageUrl(item.img)" alt="" />
          <div class="text">
            <h5>{{ item.name }}</h5>
            <span>{{ item.admin }}</span>
          </div>
        </div>
        <p class="people-details">
          {{ item.info }}
        </p>
      </div>
    </div>
  </div> -->
</template>
<style scoped lang="less">
.major-wrap {
  padding-top: 30px;

  .swiper-item {
    .flex-row;
    align-items: stretch;
    gap: 40px;

    .title-wrap {
      .flex-col;
      justify-content: flex-start;
      gap: 20px;
      border-right: 1px solid #d9d9d9;

      .title {
        display: flex;
        width: 254px;
        height: 80px;
        padding: 18.425px 18.607px;
        justify-content: center;
        align-items: center;
        gap: 18.425px;
        flex-shrink: 0;
        background: transparent;
        font-family: PingFang SC;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        filter: drop-shadow(
          0px 3.047619104385376px 3.047619104385376px rgba(0, 0, 0, 0.25)
        );
        line-height: normal;

        &.active {
          color: #006b5e;
        }
      }
    }

    .info-wrap {
      height: calc(100vh - 340px);
      overflow: auto;

      padding: 24px 24px 0px 24px;

      border-radius: 12px;
      background: #fff;
      color: #000;
      font-size: 24px;
      font-weight: 400;

      h4 {
        margin: 10px 0;
        font-size: 32px;
      }

      h5 {
        margin: 20px 0;
        font-size: 24px;
      }

      p {
        margin: 10px 0;
        font-size: 24px;
      }
    }
  }
}
.wrap {
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: #f7faf8;
    padding: 10px 0;

    h5 {
      color: #006b5e;
      font-size: 32px;
    }

    span {
      color: #006b5e;
      font-size: 24px;
    }
  }

  .people-list {
    .flex-row;
    align-items: flex-start;

    .people-item {
      padding: 34px;
      .flex-col;
      flex: 1;
      align-items: flex-start;
      gap: 40px;

      .people-img {
        .flex-row;
        align-items: flex-start;
        gap: 20px;

        :deep(.ant-image-img) {
          height: 271px;
        }

        .text {
          flex: 1;

          h5 {
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 20px;
          }

          span {
            font-size: 24px;
          }
        }
      }

      .people-details {
        font-size: 24px;
      }
    }
  }
}
</style>
