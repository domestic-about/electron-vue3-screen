<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});

const activeItem = ref({});
const open = ref(false);
const column = [
  {
    title: "姓名",
    key: "name",
    width: "20%",
    dataIndex: "name",
    align: "center",
  },

  {
    title: "职务",
    key: "admin",
    dataIndex: "admin",
    align: "center",
  },
  {
    title: "邮箱",

    key: "email",
    dataIndex: "email",
    align: "center",
  },
  {
    title: "办公地点",
    key: "address",
    dataIndex: "address",
    align: "center",
  },
  {
    title: "办公电话",
    key: "phone",
    dataIndex: "phone",
    align: "center",
  },
  {
    title: "操作",
    key: "operation",
    align: "center",
  },
];
const list = [
  {
    img: "intro/lead/list1.png",
    name: "刘兴斌",
    admin: "党委书记",
    email: "xbl2001@mail.hzau.edu.cn",
    address: "第四综合楼D319",
    phone: "87281238（办）",
    info: "主持党委全面工作。负责组织统战、思想政治、意识形态、党风廉政、班子建设、人力资源、离退休等工作。对接职能部门：组织部、统战部、人力资源部、教师工作部。联系党支部、系（中心、室）：动物遗传育种学系教工党支部、动物遗传育种学系",
  },
  {
    img: "intro/lead/list2.png",
    name: "赵书红",
    admin: "院长",
    email: "shzhao@mail.hzau.edu.cn",
    address: "第四综合楼D319",
    phone: "87280471（办） 87389480（实）",
    info: "主持行政全面工作。负责发展规划、学科与专业建设等工作。对接职能部门：发展规划部。联系党支部、系（中心、室）：预防兽医学系第一教工党支部、国家家畜工程技术研究中心教工党支部、预防兽医学系、国家家畜工程技术研究中心",
  },
  {
    img: "intro/lead/list3.png",
    name: "杨冬凯",
    admin: "党委副书记",
    email: "xbl2001@mail.hzau.edu.cn",
    address: "第四综合楼D310",
    phone: "87280730（办）",
    info: "协助书记负责组织统战、思想政治、意识形态、党风廉政等工作。负责文化建设、学生教育管理、宣传、网络安全与信息化、纪检监察、共青团等工作。协管人才培养、校友与基金会。对接职能部门：组织部、统战部、宣传部、网络安全和信息化办公室（信息技术中心）、纪委办公室、监察室、巡察工作办公室、本科生院（学生工作部、武装部）、研究生院（研究生工作部）、团委、图书馆。联系党支部、系（中心、室）：基础兽医学系教工党支部、基础兽医学系",
  },
  {
    img: "intro/lead/list4.png",
    name: "晏向华",
    admin: "党委副书记",
    email: "xhyan@mail.hzau.edu.cn",
    address: "第四综合楼D305",
    phone: "87280302（办）87287685（实）",
    info: "协助院长负责畜牧学科建设。负责科学研究、学术交流、科研平台基地等工作。协管动物科学专业建设。对接职能部门：科学技术发展研究院、农业微生物重大基础设施建设办公室。联系党支部、系（中心、室）：公共卫生学系教工党支部、公共卫生学系",
  },
  {
    img: "intro/lead/list5.png",
    name: "彭贵青",
    admin: "副院长",
    email: "penggq@mail.hzau.edu.cn",
    address: "第四综合楼D308",
    phone: "87281303（办）87285816（实）",
    info: "协助院长负责兽医学科建设。负责研究生人才培养、博士后、国际合作与交流等工作。协管动物医学专业建设。",
  },
  {
    img: "intro/lead/list6.png",
    name: "任竹青",
    admin: "副院长",
    email: "renzq@mail.hzau.edu.cn",
    address: "第四综合楼D309",
    phone: "87280730（办）",
    info: "协助院长负责动物科学专业建设。负责本科生人才培养、实验教学中心、教学基地等工作。协管畜牧学科建设。",
  },
  {
    img: "intro/lead/list7.png",
    name: "李家奎",
    admin: "副院长",
    email: "lijk210@mail.hzau.edu.cn",
    address: "第四综合楼D307",
    phone: "87281303（办）",
    info: "协助院长负责动物医学专业建设。负责仪器平台建设、实验室与基地建设、国有资产管理、采购与招标、工会等工作。协管兽医学科建设。",
  },
  {
    img: "intro/lead/list8.png",
    name: "胡丽华",
    admin: "副院长",
    email: "hulh@mail.hzau.edu.cn",
    address: "第四综合楼D306",
    phone: "87280302（办）",
    info: "协助书记负责离退休工作。负责社会服务、财务与审计、教育培训、校友与基金会、实验动物基地管理、安全保卫、保密、学院办公室、动物医院、纪检监察日常事务等工作。协管科学研究、仪器平台建设、实验室与基地建设、国有资产管理、采购与招标、工会等。",
  },
  {
    img: "intro/lead/list9.png",
    name: "易丹",
    admin: "副院长",
    email: "yidan810204@163.com",
    address: "第四综合楼D304",
    phone: "87280302（办）",
    info: "协助分管人才培养工作",
  },
];
const clickItem = (record) => {
  console.log(record);
  open.value = true;
  activeItem.value = record;
};
</script>
<template>
  <div class="wrap">
    <a-table :columns="column" :data-source="list" :pagination="false">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <div class="name-column">
            <img :src="getImageUrl(record.img)" />
            <span>{{ record.name }}</span>
          </div>
        </template>
        <template v-if="column.key === 'operation'">
          <div class="name-column">
            <a @click="clickItem(record)">查看详情</a>
          </div>
        </template>
      </template>
    </a-table>
    <a-modal
      width="60%"
      v-model:open="open"
      :title="activeItem.title"
      wrapClassName="intro-lead-modal"
      :footer="null"
    >
      <div class="admin-list">
        <div class="admin-item">
          <div class="top-admin">
            <a-image :src="getImageUrl(`${activeItem.img}`)" alt="" />
            <div class="admin-info">
              <h4 class="admin-name">{{ activeItem.name }}</h4>
              <p>职务：{{ activeItem.admin }}</p>
              <p>办公邮箱：{{ activeItem.email }}</p>
              <p>办公地址：{{ activeItem.address }}</p>
              <p>办公电话：{{ activeItem.phone }}</p>
            </div>
          </div>
          <h5>责任分工：</h5>
          <p class="label">{{ activeItem.info }}</p>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<style scoped lang="less">
.wrap {
  height: 100%;
  .flex-row;
  :deep(.ant-table-wrapper) {
    width: 80%;
    box-shadow: 0px 8px 24px 0px rgba(10, 62, 56, 0.15);
    .ant-table-cell {
      font-size: 16px;
      padding: 7px 16px;
    }
    .name-column {
      .flex-row;
      gap: 10px;
      img {
        width: 50px;

        border-radius: 4px;
      }
      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>

<style lang="less">
.intro-lead-modal {
  .ant-modal-content {
    padding: 0;
    border-radius: 8px;
  }

  .admin-item {
    border-radius: 8px;
    background: #e9f3ef;
    padding: 68px 48px;
    transition: 0.3s ease;
    /* 添加过渡效果 */

    .top-admin {
      .flex-row;

      gap: 33px;
      align-items: flex-start;
      justify-content: flex-start;

      .ant-image {
        width: 150px;
        height: auto;
      }

      .admin-info {
        width: 626px;

        .admin-name {
          font-size: 32px;
          margin-bottom: 20px;
        }

        p {
          color: #000;
          font-size: 24px;
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
      margin-top: 10px;
      font-size: 20px;
      line-height: 40px;
    }
  }
}
</style>
