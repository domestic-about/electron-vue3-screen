<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const list = [];
const column = [
  {
    title: "基地名称",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "负责人",
    dataIndex: "name",
    key: "name",
    align: "center",
    width: "30%",
  },
];
const dataSource = [
  {
    title: "动物育种与健康养殖前沿科学中心",
    name: "陈焕春",
  },
  {
    title: "国家生物育种产教融合创新平台（生猪）",
    name: "赵书红",
  },
  {
    title: "国家家畜工程技术研究中心",
    name: "赵书红",
  },
  {
    title: "省部共建生猪健康养殖协同创新中心",
    name: "陈焕春",
  },
  {
    title: "农业动物遗传育种与繁殖教育部重点实验室",
    name: "赵书红",
  },
  {
    title: "国家生物产业基地（武汉）实验动物中心",
    name: "胡丽华",
  },
  {
    title: "生猪精准饲养与饲料安全技术湖北省工程实验室",
    name: "晏向华",
  },
  {
    title: "动物生物药物教育部工程研究中心",
    name: "陈焕春",
  },
  {
    title: "湖北省动物疫苗工程技术研究中心",
    name: "陈焕春",
  },
  {
    title: "动物疫病防控技术国家地方联合工程实验室(湖北)",
    name: "肖少波",
  },
  {
    title: "预防兽医学湖北省重点实验室",
    name: "肖少波",
  },
  {
    title: "农业部种猪质量监督检验测试中心(武汉)",
    name: "赵书红",
  },
  {
    title: "农业部猪遗传育种重点开放实验室",
    name: "赵书红",
  },
  {
    title: "动物疾病防控国际联合研究中心",
    name: "周锐",
  },
  {
    title: "动物遗传育种与繁殖国际联合研究中心",
    name: "杨利国",
  },
  {
    title: "国家兽药残留基准实验室",
    name: "黄玲利",
  },
  {
    title: "国家兽药安全评价实验室",
    name: "黄玲利",
  },
  {
    title: "农业农村部兽药残留检测重点实验室",
    name: "黄玲利",
  },
  {
    title: "农业部畜禽产品质量安全风险评估实验室（武汉）",
    name: "黄玲利",
  },
  {
    title: "农业农村部农业微生物资源利用重点实验室",
    name: "陈焕春",
  },
  {
    title: "农业农村部兽用诊断制剂创制重点实验室",
    name: "何启盖",
  },
];
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <SwiperSlide>
        <div class="page3-wrap">
          <a-table
            :columns="column"
            :data-source="dataSource"
            :pagination="false"
            :scroll="{ y: '70vh' }"
          ></a-table>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page2-wrap">
          <h2>动物育种与健康养殖前沿科学中心</h2>
          <a-image :src="getImageUrl('research/platform/cen.png')" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="page1-wrap">
          <div class="left-text-info">
            <div class="text-wrap">
              <p class="title">华中农业大学动物育种与健康养殖前沿科学中心</p>
              <p class="label">
                华中农业大学动物育种与健康养殖前沿科学中心成立于2021年10月,2023年2月获得教育部批准立项建设。
                中心以华中农业大学动物科学技术学院、动物医学院与水产学院为基础和实体依托，联合农业微生物资源发掘与利用全国重点实验室、国家生物育种产教融合创新平台、国家家畜工程技术研究中心、农业动物遗传育种与繁殖教育部重点实验室、生猪健康养殖省部共建协同创新中心、教育部长江经济带大宗水生生物产业绿色发展工程研究中心、动物遗传育种与繁殖国际联合研究中心等优势科研机构参与建设。
                中心致力于服务国家食物安全、人民生命健康等重大战略，瞄准“品种、繁殖、疾病、营养、生境”五个动物育种与健康养殖领域的前沿科学问题,创新体制机制，推动院际、校际和国际合作，整合学科优势资源力量,引育汇聚一流人才团队，构建开放共享的大平台,开展基础性、前瞻性、多学科交叉融合的创新研究，形成动物育种与健康养殖的优势研究方向和国际领先的重大成果突破，建成动物育种与健康养殖世界重要人才中心与创新高地，为我国动物育种与养殖业科技自立自强和高质量发展提供坚强支撑。
              </p>
            </div>
          </div>
          <div class="right-people-list">
            <a-image
              :src="getImageUrl('research/platform/right-user.png')"
              alt=""
            />
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  height: 100%;
  .page1-wrap {
    .flex-row;

    .left-text-info {
      flex: 1;
      height: 874px;
      background: url("../../assets/img/research/platform/list1.png");
      background-size: 100% 100%;
      color: #fff;
      padding: 84px 0 0 200px;

      .text-wrap {
        padding: 24px;
        background: #006b5e;
        height: 100%;

        .title {
          font-size: 32px;
          font-weight: 500;
          text-align: center;
        }

        .label {
          margin-top: 24px;
          font-size: 20px;
          line-height: 45px;
        }
      }
    }

    .right-people-list {
      flex: 1;
      padding: 84px 100px 0 0;
      height: 874px;
      background: url("../../assets/img/research/platform/list2.png");
      background-size: 100% 100%;
    }
  }

  .page2-wrap {
    h2 {
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 30px;
    }
  }
  .page3-wrap {
    .flex-col;
    padding-top: 20px;
    :deep(.ant-table-wrapper) {
      width: 60%;

      .ant-table-cell {
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
