<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
import History from "./history.vue";
import Agency from "./agency.vue";
import Clerk from "./clerk.vue";
import Dean from "./dean.vue";
import Lead from "./lead.vue";
const router = useRouter();
const props = defineProps({});
const route = useRoute();
const swiperRef = ref(null);
const activeIndex = ref(0);
const isAuto = ref(true);
const list = [
  [
    {
      img: "intro/lead/list1.png",
      name: "刘兴斌",
      admin: "职务：党委书记",
      email: "E-mail：xbl2001@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D319",
      phone: "办公电话：87281238（办）",
      info: "主持党委全面工作。负责组织统战、思想政治、意识形态、党风廉政、班子建设、人力资源、离退休等工作。对接职能部门：组织部、统战部、人力资源部、教师工作部。联系党支部、系（中心、室）：动物遗传育种学系教工党支部、动物遗传育种学系",
    },
    {
      img: "intro/lead/list2.png",
      name: "赵书红",
      admin: "职务：院长",
      email: "E-mail：shzhao@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D319",
      phone: "办公电话：87280471（办） 87389480（实）",
      info: "主持行政全面工作。负责发展规划、学科与专业建设等工作。对接职能部门：发展规划部。联系党支部、系（中心、室）：预防兽医学系第一教工党支部、国家家畜工程技术研究中心教工党支部、预防兽医学系、国家家畜工程技术研究中心",
    },
  ],
  [
    {
      img: "intro/lead/list3.png",
      name: "杨冬凯",
      admin: "职务：党委副书记",
      email: "E-mail：xbl2001@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D310",
      phone: "办公电话：87280730（办）",
      info: "协助书记负责组织统战、思想政治、意识形态、党风廉政等工作。负责文化建设、学生教育管理、宣传、网络安全与信息化、纪检监察、共青团等工作。协管人才培养、校友与基金会。对接职能部门：组织部、统战部、宣传部、网络安全和信息化办公室（信息技术中心）、纪委办公室、监察室、巡察工作办公室、本科生院（学生工作部、武装部）、研究生院（研究生工作部）、团委、图书馆。联系党支部、系（中心、室）：基础兽医学系教工党支部、基础兽医学系",
    },
    {
      img: "intro/lead/list4.png",
      name: "晏向华",
      admin: "职务：党委副书记",
      email: "E-mail：xhyan@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D305",
      phone: "87280302（办）87287685（实）",
      info: "协助院长负责畜牧学科建设。负责科学研究、学术交流、科研平台基地等工作。协管动物科学专业建设。对接职能部门：科学技术发展研究院、农业微生物重大基础设施建设办公室。联系党支部、系（中心、室）：公共卫生学系教工党支部、公共卫生学系",
    },
  ],
  [
    {
      img: "intro/lead/list5.png",
      name: "彭贵青",
      admin: "职务：副院长",
      email: "E-mail：penggq@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D308",
      phone: "办公电话：87281303（办）87285816（实））",
      info: "协助院长负责兽医学科建设。负责研究生人才培养、博士后、国际合作与交流等工作。协管动物医学专业建设。",
    },
    {
      img: "intro/lead/list6.png",
      name: "任竹青",
      admin: "职务：副院长",
      email: "E-mail：renzq@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D309",
      phone: "办公电话：87280730（办）",
      info: "协助院长负责动物科学专业建设。负责本科生人才培养、实验教学中心、教学基地等工作。协管畜牧学科建设。",
    },
  ],
  [
    {
      img: "intro/lead/list7.png",
      name: "李家奎",
      admin: "职务：副院长",
      email: "E-mail：lijk210@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D307",
      phone: "办公电话：87281303（办）",
      info: "协助院长负责动物医学专业建设。负责仪器平台建设、实验室与基地建设、国有资产管理、采购与招标、工会等工作。协管兽医学科建设。",
    },
    {
      img: "intro/lead/list8.png",
      name: "胡丽华",
      admin: "职务：副院长",
      email: "E-mail：hulh@mail.hzau.edu.cn",
      adrgess: "办公地点：第四综合楼D306",
      phone: "办公电话：87280302（办）",
      info: "协助书记负责离退休工作。负责社会服务、财务与审计、教育培训、校友与基金会、实验动物基地管理、安全保卫、保密、学院办公室、动物医院、纪检监察日常事务等工作。协管科学研究、仪器平台建设、实验室与基地建设、国有资产管理、采购与招标、工会等。",
    },
  ],
  [
    {
      img: "intro/lead/list9.png",
      name: "易丹",
      admin: "职务：副院长",
      email: "E-mail：yidan810204@163.com",
      adrgess: "办公地点：第四综合楼D304",
      phone: "办公电话：87280302（办）",
      info: "协助分管人才培养工作",
    },
  ],
];

const tabList = computed(() => [
  {
    label: "历史沿革",
    route: "/intro/history",
    component: History,
  },
  {
    label: "组织机构",
    route: "/intro/agency",
    component: Agency,
  },
  {
    label: "历任书记",
    route: "/intro/clerk",
    component: Clerk,
  },
  {
    label: "历任院长",
    route: "/intro/dean",
    component: Dean,
  },
  {
    label: "现任领导",
    route: "/intro/lead",
  },
]);

onMounted(() => { });
const onSlideChange = (swiper) => {
  const index = swiper.activeIndex;
  if (index > 3) {
    activeIndex.value = 4;
  } else {
    activeIndex.value = index;
  }
  console.log(swiper.activeIndex, "activeIndex");
};
const goToSlide = (index) => {
  console.log(swiperRef.value, "value");
  swiperRef.value.slideTo(index);
};
</script>
<template>
  <div class="intro-wrap">
    <div class="title-wrap">
      <div class="title-info">
        <h3>学院概况</h3>
        <span>College Overview</span>
      </div>
      <div class="tab-list">
        <div class="tab-item" :class="{ active: index === activeIndex }" v-for="(tab, index) in tabList" :key="tab.label"
          @click="goToSlide(index)">
          {{ tab.label }}
        </div>
      </div>
    </div>

    <div class="content-wrap">
      <SwiperPage @onSlideChange="onSlideChange" :isAuto="isAuto" :isPagination="false" ref="swiperRef">
        <template v-for="(item, index) in tabList" :key="index">
          <swiper-slide v-if="item.component">
            <component :is="item.component" />
          </swiper-slide>
        </template>

        <swiper-slide v-for="(group, index) in list" :key="index">
          <div class="admin-list">
            <div class="admin-item" v-for="item in group" :key="item.name">
              <div class="top-admin">
                <a-image :src="getImageUrl(`${item.img}`)" alt="" />
                <div class="admin-info">
                  <h4 class="admin-name">{{ item.name }}</h4>
                  <p>{{ item.admin }}</p>
                  <p>{{ item.email }}</p>
                  <p>{{ item.adrgess }}</p>
                  <p>{{ item.phone }}</p>
                </div>
              </div>
              <h5>责任分工：</h5>
              <p class="label">{{ item.info }}</p>
            </div>
          </div>
        </swiper-slide>
      </SwiperPage>
    </div>
  </div>
</template>
<style scoped lang="less">
.intro-wrap {
  height: 100%;
  position: relative;
  padding: 24px;
  .flex-col;
  justify-content: flex-start;

  .content-wrap {
    width: 100%;
    flex: 1;
    padding-top: 100px;
  }
}

.admin-list {
  padding: 0 100px;
  .flex-row;
  align-items: flex-start;
  gap: 88px;

  .admin-item {
    background: #E9F3EF;
    padding: 68px 48px;
    position: relative;
    transition: top 0.3s ease;
    /* 添加过渡效果 */

    &:hover {
      top: -30px;
    }


    &:last-child {
      margin-right: auto;
    }

    .top-admin {
      .flex-row;
      gap: 33px;
      align-items: flex-start;

      :deep(.ant-image) {
        width: 145px;
        height: 200px;
      }

      .admin-info {
        width: 626px;

        .admin-name {
          font-size: 36px;
          margin-bottom: 24px;
        }

        p {
          color: #000;
          font-size: 26px;
          font-weight: 600;
          margin-top: 10px;
          margin-bottom: 0;
        }
      }
    }

    h5 {
      margin-top: 20px;
      font-size: 20px;
    }

    .label {
      font-size: 20px;
    }
  }
}
</style>
