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
    label:
      "近年来，动物科学技术学院、动物医学院充分发挥党组织的政治引领作用，坚持以立德树人为根本，以强农兴农为己任，立足培养高层次创新型农牧人才，瞄准服务农牧行业高质量发展，积极探索构建新时代高校党建和思想政治工作体系，凝心聚力推进“三大建设”，全面从严把好“三大关口”，扎实有效推动“五大融合”，形成了“党建引领、师生奋进、学院发展”的良好态势。",
    list: [
      {
        img: "thought/list1.png",
        text: "井冈山革命传统教育培训班",
      },
      {
        img: "thought/list2.png",
        text: "延安革命传统教育培训",
      },
      {
        img: "thought/list3.png",
        text: "湖北店子坪红色教育",
      },
      {
        img: "thought/list4.png",
        text: "与建始县长梁镇双河口村党支部开展联合主题党日活动",
      },
    ],
  },
  {
    label:
      "学院入选“全国高校党建工作标杆院系”培育创建单位，获评“全国教育系统先进集体”；学院党委获评湖北省委高校工委“先进基层党组织”、校“先进基层党组织”多次；预防兽医学系教工第二党支部获评“全国先进基层党组织”，动物遗传育种学系党支部书记工作室入选湖北省“双带头人”党支部书记工作室培育创建名单；学院学院党委书记作为高校唯一代表在全省基层党建工作调研会上作交流发言，受邀全省专题学习示范培训班上作案例分享。涌现出全国社会实践优秀团队、全国创新争先奖章获得者、全国创新争先奖状获得者、全国三八红旗手、湖北省优秀共产党员、全国科技助力精准扶贫工作先进个人、全国百名研究生党员标兵、中国青年志愿者优秀个人、“最美大学生”、湖北省抗击新冠肺炎疫情先进个人、“楚天园丁奖”获得者等一批优秀师生典型。",
    list: [
      {
        img: "thought/list5.png",
        text: "全国教育系统先进集体",
      },
      {
        img: "thought/list6.png",
        text: "预防兽医学系教工第二党支部获评“全国先进基层党组织”",
      },
      {
        img: "thought/list7.png",
        text: "学院获评湖北省高校“先进基层党组织”",
      },
      {
        img: "thought/list8.png",
        text: "赵书红获评“全国三八红旗手”",
      },
    ],
  },
];
</script>
<template>
  <div class="teacher-wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>党建与思想政治教育</h3>
    </div>

    <SwiperPage>
      <swiper-slide v-for="item in list" :key="item.label">
        <div class="cen-wrap">
          <p>{{ item.label }}</p>
          <div class="img-list">
            <div class="img-item" v-for="i in item.list" :key="i.text">
              <a-image :src="getImageUrl(`${i.img}`)" alt="" />
              <p>{{ i.text }}</p>
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
  .cen-wrap {
    margin: 102px auto 0;
    padding: 0 100px;
    color: #000;
    p {
      font-size: 24px;
    }
    .img-list {
      margin-top: 24px;
      .flex-row;
      gap: 24px;
      .img-item {
        width: 410px;
        height: 321px;
        padding: 12px;
        background-color: #fff;
        img {
          width: 386px;
          height: 217px;
        }
        p {
          font-size: 24px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
