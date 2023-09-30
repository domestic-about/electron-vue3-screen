<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => {});
const dataSource1 = [
  {
    name: "动物育种与健康养殖前沿科学中心",
    person: "陈焕春",
  },
  {
    name: "国家生物育种产教融合创新平台（生猪）",
    person: "赵书红",
  },
  {
    name: "国家家畜工程技术研究中心",
    person: "赵书红",
  },
  {
    name: "省部共建生猪健康养殖协同创新中心",
    person: "陈焕春",
  },
  {
    name: "农业动物遗传育种与繁殖教育部重点实验室",
    person: "赵书红",
  },
  {
    name: "国家生物产业基地（武汉）实验动物中心",
    person: "胡丽华",
  },
  {
    name: "生猪精准饲养与饲料安全技术湖北省工程实验室",
    person: "晏向华",
  },
  {
    name: "动物生物药物教育部工程研究中心",
    person: "陈焕春",
  },
  {
    name: "湖北省动物疫苗工程技术研究中心",
    person: "陈焕春",
  },
  {
    name: "动物疫病防控技术国家地方联合工程实验室(湖北)",
    person: "肖少波",
  },
  {
    name: "预防兽医学湖北省重点实验室",
    person: "肖少波",
  },
  {
    name: "农业部种猪质量监督检验测试中心(武汉)",
    person: "赵书红",
  },
  {
    name: "农业部猪遗传育种重点开放实验室",
    person: "赵书红",
  },
  {
    name: "动物疾病防控国际联合研究中心",
    person: "周锐",
  },
  {
    name: "动物遗传育种与繁殖国际联合研究中心",
    person: "杨利国",
  },
  {
    name: "国家兽药残留基准实验室",
    person: "黄玲利",
  },
  {
    name: "国家兽药安全评价实验室",
    person: "黄玲利",
  },
  {
    name: "农业农村部兽药残留检测重点实验室",
    person: "黄玲利",
  },
  {
    name: "农业部畜禽产品质量安全风险评估实验室（武汉）",
    person: "黄玲利",
  },
  {
    name: "农业农村部农业微生物资源利用重点实验室",
    person: "陈焕春",
  },
  {
    name: "农业农村部兽用诊断制剂创制重点实验室",
    person: "何启盖",
  },
];

const columns = [
  {
    title: "基地名称",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "负责人",
    dataIndex: "person",
    key: "person",
    align: "center",
  },
];
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <swiper-slide>
        <div class="card-item">
          <a-image :src="getImageUrl('research/platform/list1.png')" alt="" />
          <div class="right-text-wrap">
            <h5>华中农业大学动物育种与健康养殖前沿科学中心简介</h5>
            <p>
              华中农业大学动物育种与健康养殖前沿科学中心成立于2021年10月,2023年2月获得教育部批准立项建设。
              中心以华中农业大学动物科学技术学院、动物医学院与水产学院为基础和实体依托，联合农业微生物资源发掘与利用全国重点实验室、国家生物育种产教融合创新平台、国家家畜工程技术研究中心、农业动物遗传育种与繁殖教育部重点实验室、生猪健康养殖省部共建协同创新中心、教育部长江经济带大宗水生生物产业绿色发展工程研究中心、动物遗传育种与繁殖国际联合研究中心等优势科研机构参与建设。
              中心致力于服务国家食物安全、人民生命健康等重大战略，瞄准“品种、繁殖、疾病、营养、生境”五个动物育种与健康养殖领域的前沿科学问题,创新体制机制，推动院际、校际和国际合作，整合学科优势资源力量,引育汇聚一流人才团队，构建开放共享的大平台,开展基础性、前瞻性、多学科交叉融合的创新研究，形成动物育种与健康养殖的优势研究方向和国际领先的重大成果突破，建成动物育种与健康养殖世界重要人才中心与创新高地，为我国动物育种与养殖业科技自立自强和高质量发展提供坚强支撑。
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-list">
          <a-image
            class="left-img"
            :src="getImageUrl('research/platform/list2.svg')"
            alt=""
          />
          <a-image
            class="right-img"
            :src="getImageUrl('research/platform/list3.svg')"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="cen-wrap">
          <a-table :dataSource="dataSource1.slice(0, 11)" :columns="columns" />
          <a-table :dataSource="dataSource1.slice(11, 21)" :columns="columns" />
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  .card-item {
    margin-top: 71px;
    padding: 0 100px;
    .flex-row;
    align-items: flex-start;
    gap: 61px;

    img {
      width: 756px;
      height: auto;
    }

    .right-text-wrap {
      flex: 1;
      color: #000;

      h5 {
        font-size: 32px;
        font-weight: 500;
      }

      p {
        margin-top: 15px;
        font-size: 24px;
      }
    }
  }

  .img-list {
    margin-top: 78px;
    .flex-row;
    gap: 62px;

    img {
      height: 503px;
    }

    .left-img {
      width: 569px;
    }

    .right-img {
      width: 1020px;
    }
  }

  .cen-wrap {
    padding-top: 70px;
    .flex-row;
    align-items: stretch;
    gap: 50px;
  }
}
</style>
