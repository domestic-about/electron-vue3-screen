<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";


const list = [
  {
    img: "party/list1.png",
    text: "井冈山革命传统教育培训班",
  },
  {
    img: "party/list3.png",
    text: "延安革命传统教育培训",
  },
  {
    img: "party/list2.png",
    text: "湖北店子坪红色教育",
  },
  {
    img: "party/list4.png",
    text: "与建始县长梁镇双河口村党支部开展联合主题党日活动",
  },
];
const pageList = [
  {
    img: "party/list5.png",
    text: "全国教育系统先进集体",
  },
  {
    img: "party/list6.png",
    text: "预防兽医学系教工第二党支部获评“全国先进基层党组织”",
  },
  {
    img: "party/list7.png",
    text: "学院获评湖北省高校“先进基层党组织”",
  },
  {
    img: "party/list8.png",
    text: "赵书红获评“全国三八红旗手”",
  },
]
</script>
<template>
  <div class="party-wrap">
    <div class="title-wrap">
      <div class="title-info">
        <h3>党建与思想政治教育</h3>
        <span>Party building and ideological and political work</span>
      </div>
    </div>
    <div class="con-wrap">
      <SwiperPage>
        <SwiperSlide>
          <div class="page1-wrap">
            <p class="label">
              近年来，动物科学技术学院、动物医学院充分发挥党组织的政治引领作用，坚持以立德树人为根本，以强农兴农为己任，立足培养高层次创新型农牧人才，瞄准服务农牧行业高质量发展，积极探索构建新时代高校党建和思想政治工作体系，凝心聚力推进“三大建设”，全面从严把好“三大关口”，扎实有效推动“五大融合”，形成了“党建引领、师生奋进、学院发展”的良好态势。
            </p>
            <div class="img-list">
              <div class="img-item" v-for="item in list" :key="item.img">
                <a-image :src="getImageUrl(item.img)" />
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="page2-wrap">
            <div class="img-list">
              <div class="img-item" v-for="item in pageList" :key="item.text">
                <a-image :src="getImageUrl(item.img)" alt="" />
                <p>{{ item.text }}</p>
              </div>
            </div>
            <p class="label">
              学院入选“全国高校党建工作标杆院系”培育创建单位，获评“全国教育系统先进集体”；学院党委获评湖北省委高校工委“先进基层党组织”、校“先进基层党组织”多次；预防兽医学系教工第二党支部获评“全国先进基层党组织”，动物遗传育种学系党支部书记工作室入选湖北省“双带头人”党支部书记工作室培育创建名单；学院学院党委书记作为高校唯一代表在全省基层党建工作调研会上作交流发言，受邀全省专题学习示范培训班上作案例分享。

              涌现出全国社会实践优秀团队、全国创新争先奖章获得者、全国创新争先奖状获得者、全国三八红旗手、湖北省优秀共产党员、全国科技助力精准扶贫工作先进个人、全国百名研究生党员标兵、中国青年志愿者优秀个人、“最美大学生”、湖北省抗击新冠肺炎疫情先进个人、“楚天园丁奖”获得者等一批优秀师生典型。
            </p>
          </div>
        </SwiperSlide>
      </SwiperPage>
    </div>

  </div>
</template>
<style scoped lang="less">
.party-wrap {
  padding: 24px;

  .con-wrap {
    padding: 88px;

    p {
      font-size: 24px;
      margin-top: 12px;
      font-weight: 500;
    }

    .page1-wrap {
      .flex-row;
      align-items: flex-start;
      gap: 88px;

      .label {
        width: 600px;
        padding: 30px;
        font-size: 24px;
        background-color: #F7FAF8;
      }

      .img-list {
        width: 1000px;
        .flex-row;
        gap: 40px;
        flex-wrap: wrap;

        .img-item {
          width: 40%;
          height: 300px;
        }
      }
    }

    .page2-wrap {
      .img-list {
        .flex-row;
        align-items: flex-start;
        gap: 40px;

        .img-item {
          flex: 1;
        }
      }

      .label {
        margin-top: 60px;
        padding: 30px;
        font-size: 24px;
        font-weight: 400;
        background-color: #F7FAF8;
      }
    }
  }
}
</style>
