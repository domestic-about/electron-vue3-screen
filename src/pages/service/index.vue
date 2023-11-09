<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import PageTitle from "@/components/PageTitle.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    title: "推进协同创新，助力稳产保供",
    label:
      "整合全行业创新资源，与扬翔、牧原、罗牛山、唐人神、双胞胎、湖北劲牛等知名企业合力打造科创共同体，协同攻克基因组育种、种猪营养、智能楼房养猪、奶（水）牛繁育等关键技术20余项，产出一类新兽药猪链球菌与副猪嗜血杆菌二联亚单位疫苗等大批行业急需成果，校企联合育成“欣华2号蛋鸡”新品种，研发“FPF”未来猪场共同体、集群式楼房智能养猪技术和“铁桶式”楼房养猪非瘟生物安全防控体系，成为农业农村部推广的复产保供利器。以国家技术发明奖、科技进步奖为代表的成果转化产品60余个/次，合同经费1.03亿元。孵化武汉科前、华大瑞尔、武汉科维创等多家高新技术企业，其中武汉科前在科创板上市。",
    imgList: [
      {
        img: "service/list1.png",
        text: "与罗牛山股份校企合作签约",
      },
      {
        img: "service/list2.png",
        text: "与扬翔股份研发的集群式楼房智能化猪场",
      },
      {
        img: "service/list3.png",
        text: "与新希望集团合作签约",
      },
      {
        img: "service/list4.png",
        text: "孵化校办企业科前生物上市",
      },
    ],
  },
  {
    title: "提供科技支撑，解决国家需求",
    label:
      "依托科技与人才优势，组织编制与实施重点研发计划专项总体规划，主持完成中国工程院高等农业人才培养战略咨询，牵头设计“十四五”科技支撑专项等多项战略和调研报告，相关意见和建议受到胡春华副总理等领导人的批示、肯定，得以采纳。组建“生态猪养殖和产业化扶贫”等20余个院士专家团队，深入“三州三区”及湖北恩施、随州、神农架等地，挖掘恩施黑猪、景阳鸡、夷陵牛、黑山羊、梅花鹿、中华蜜蜂等地方特色养殖资源，示范带动3万余户建档立卡贫困户脱贫，户年均增收过千元，养殖业对咸丰县脱贫贡献率达57%。奶牛繁殖改良技术在6省15企推广应用，牛床场一体化养殖技术列入湖北省主推技术。年均承担超过全国20%的种猪质检任务，为G20峰会及行业产业检测畜产品万余份，有力护航食品安全。",
    imgList: [
      {
        img: "service/list5.png",
        text: "陈焕春院士带队深入湖南非洲猪瘟防控一线进行指导",
      },
      {
        img: "service/list6.png",
        text: "姜勋平教授团队赴羊场指导",
      },
      {
        img: "service/list7.png",
        text: "李家奎教授在藏区开展技术服务",
      },
    ],
  },
  {
    title: "搭建交流平台，促进学术繁荣",
    label:
      "连续举办23届种猪拍卖会、22届全国猪病会、15届奶协繁殖技术研讨会、10届全国牛病会、5届湖北蛋鸡生产与禽病防控研讨会、3届规模猪场智造论坛、2届全国生猪精准饲养与饲料安全研讨会，主办亚洲猪病会、One Health世界青年兽医大会、国际奶牛生产性能测定高峰论坛、全国饲料霉菌毒素危害与防控研讨会、全国宠物营养与饲料科学研讨会等大型会议，获第13届国际水牛大会承办权，4人次任亚洲动植物基因组等大会组委及当选国际水牛大会主席等。开办国际动物流行病学师资培训班、猪场兽医师培训班、宠物诊疗培训班、复产防非特训营等，培养行业人才10余万人。编发《Animal Diseases》《养殖与饲料》《湖北养猪》等近百期。",
    imgList: [
      {
        img: "service/list8.png",
        text: "第21届全国规模化猪场主要疫病防控与净化专题研讨会",
      },
      {
        img: "service/list9.png",
        text: "第23届中国武汉种猪拍卖展销暨2023猪业创新发展大会",
      },
      {
        img: "service/list10.png",
        text: "举办亚洲猪病学会第8次会议",
      },
      {
        img: "service/list11.png",
        text: "英文期刊Animal Diseases发刊",
      },
    ],
  },
  {
    title: "开展科普培训，培养行业人才",
    label:
      "编著各种养殖技术书籍30余部，面向高校与社会开设《宠物鉴赏》、《生物进化论与现代人类社会》等多门线上线下科普类课程，与《农民日报》等联合开展融媒体科普，多措并举推进科学普及工作。举办全国种猪性能测定和人工授精技术培训班、家畜繁殖员职业技能培训班、饲料行业职业技能培训班、防非复产特训营等100余期，培训技术人员逾3万人次。",
    imgList: [
      {
        img: "service/list12.png",
        text: "蜜蜂文化科普",
      },
      {
        img: "service/list13.png",
        text: "宠物遗传病科普活动",
      },
      {
        img: "service/list14.png",
        text: "宠物美容大赛",
      },
      {
        img: "service/list15.png",
        text: "全国规模化主场兽医技术培训班",
      },
    ],
  },
  {
    title: "开展多元服务，护航“一个健康”",
    label:
      "依托动物疫病诊断中心、兽药残留基准实验室、动物医院、兽药GCP/GLP平台等，承担公益任务，面向全行业开展对外服务。近五年，先后检测各类生物样品25万余份，诊治病例30万余个，服务各类养殖场6000余个。",
    imgList: [
      {
        img: "service/list16.png",
        text: "动物疫病诊断中心",
      },
      {
        img: "service/list17.png",
        text: "动物医院",
      },
    ],
  },
];
</script>
<template>
  <div class="wrap">
    <PageTitle title="社会服务" subTitle="Social Service" />

    <div class="content-wrap">
      <SwiperPage>
        <swiper-slide v-for="(item, index) in list" :key="item.title">
          <div class="text-img-wrap">
            <p class="label-0" v-if="index === 0">
              华中农业大学动物科学技术学院、动物医学院始终坚持“四个面向”，以强农兴农为己任，积极为推动畜牧业高质量发展和农业农村现代化提供人才支撑、智力支持、技术服务。
            </p>
            <button class="title">{{ item.title }}</button>
            <p class="label">
              {{ item.label }}
            </p>
            <div class="img-list wow fadeInUp">
              <div
                class="img-item"
                v-for="imgItem in item.imgList"
                :key="imgItem.text"
              >
                <a-image :src="getImageUrl(`${imgItem.img}`)" alt="" />
                <p>{{ imgItem.text }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </SwiperPage>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  position: relative;

  .content-wrap {
    height: calc(100% - 106px);
    padding: 24px;
  }
  .text-img-wrap {
    .flex-col;
    .label-0 {
      font-weight: 500;
      margin-top: 30px;
      background-color: #f7faf8;
      padding: 12px 24px;
      font-size: 32px;
      line-height: 40px;
    }
    .label {
      padding: 12px 24px;
      font-size: 24px;
      color: #000;
      margin-top: 30px;
      background-color: #f7faf8;
      line-height: 40px;
    }
    .title {
      background: #cbe6ff;
      margin-top: 30px;
      font-size: 32px;
      align-self: flex-start;
      color: #000;

      font-size: 32px;
      font-weight: 500;
    }
  }
  .img-list {
    height: 100%;
    .flex-row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 16px;
    margin-top: 10px;
    .img-item {
      width: 410px;
      height: 321px;
      padding: 12px;
      background-color: #fff;
      border-radius: 10px;
      :deep(.ant-image) {
        width: 386px;
        height: 217px;
        border-radius: 10px;
        .ant-image-img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 12px;
        text-align: center;
      }
    }
  }
}
</style>
