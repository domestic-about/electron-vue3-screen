<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const column = [
  {
    title: "项目名称",
    dataIndex: "title",
    key: "title",
    align: "center",
    width: "30%",
  },
  {
    title: "项目批准号/项目编号",
    dataIndex: "number",
    key: "number",
    align: "center",
  },
  {
    title: "负责人",
    dataIndex: "person",
    key: "person",
    align: "center",
  },
  {
    title: "财政经费（万元）",
    dataIndex: "money",
    key: "money",
    align: "center",
  },
  {
    title: "立项日期",
    dataIndex: "date",
    key: "date",
    align: "center",
  },
];

const dataSource = [
  {
    title: "牛支原体和丝状支原体丝状亚种核调节蛋白的鉴定和功能比较研究",
    number: "32261143469",
    person: "郭爱珍",
    money: "199",
    date: "2023/1/1",
  },
  {
    title: "猪基因组与育种",
    number: "32221005",
    person: "赵书红",
    money: "1000",
    date: "2022/9/8",
  },
  {
    title: "产短链脂肪酸的关键微生物调节母猪排卵数的机制研究",
    number: "32230099",
    person: "晏向华",
    money: "270",
    date: "2022/9/8",
  },
  {
    title: "动物重大疫病与人兽共患病",
    number: "32122086",
    person: "王湘如",
    money: "200",
    date: "2021/10/12",
  },
  {
    title: "猪遗传育种",
    number: "32125035",
    person: "李新云",
    money: "400",
    date: "2021/10/12",
  },

  {
    title: "动物病毒学",
    number: "32125037",
    person: "彭贵青",
    money: "400",
    date: "2021/10/12",
  },
  {
    title: "猪繁殖与呼吸综合征病毒感染引起炎症因子风暴的分子机制",
    number: "32130103",
    person: "肖少波",
    money: "284",
    date: "2021/10/12",
  },
  {
    title: "弓形虫急性与慢性感染期的代谢机制",
    number: "M-0074",
    person: "申邦",
    money: "149.9993",
    date: "2021/1/1",
  },
  {
    title: "动物传染病学",
    number: "32025036",
    person: "周红波",
    money: "400",
    date: "2020/9/18",
  },
  {
    title: "动物传染病学",
    number: "32022082",
    person: "叶静",
    money: "120",
    date: "2020/9/18",
  },
  {
    title: "乙型脑炎病毒神经嗜性的分子机制",
    number: "32030107",
    person: "曹胜波",
    money: "299",
    date: "2020/9/18",
  },
  {
    title: "结合组学及CRISPR敲除文库技术鉴定非洲猪瘟病毒抗性基因",
    number: "31941008",
    person: "赵书红",
    money: "100",
    date: "2020/9/18",
  },
  {
    title: "动物分子营养学",
    number: "31925037",
    person: "晏向华",
    money: "400",
    date: "2020/1/1",
  },
  {
    title:
      "联合GWAS与3D基因组技术解析东南亚地方猪杂种后代生长性能的基因组调控机制",
    number: "31961143020",
    person: "朱猛进",
    money: "155",
    date: "2020/1/1",
  },
  {
    title: "弓形虫亚细胞器间的丙酮酸转运机制及其生理意义",
    number: "31961133032",
    person: "申邦",
    money: "300",
    date: "2019/12/23",
  },

  {
    title: "基于PRRSV人工感染资源群体解析猪蓝耳病抗病性状的遗传基础",
    number: "31930104",
    person: "刘榜",
    money: "299",
    date: "2019/8/15",
  },
  {
    title: "重要神经嗜性人兽共患病免疫与致病机制研究",
    number: "2016YFD0500400",
    person: "曹胜波",
    money: "4900",
    date: "2016",
  },
  {
    title: "新型畜禽药创制与产业化",
    number: "2017YFD0501400",
    person: "袁宗辉",
    money: "1821",
    date: "2017",
  },
  {
    title: "畜禽重要胞内菌基因调控及其与宿主互作的分子机制研究",
    number: "2017YFD0500300",
    person: "何正国",
    money: "2174",
    date: "2017",
  },
  {
    title: "畜禽现代化饲养关键技术研发",
    number: "2017YFD0502000",
    person: "蒋思文",
    money: "2155",
    date: "2017",
  },
  {
    title: "畜禽重要病原菌的病原组学与网络调控研究",
    number: "2017YFD0500200",
    person: "周锐",
    money: "2049",
    date: "2017",
  },
  {
    title:
      "猪伪狂犬病、猪瘟区域净化与根除及种猪场高致病性蓝耳病净化技术集成与示范",
    number: "2018YFD0500800",
    person: "吴斌",
    money: "1213",
    date: "2018",
  },
  {
    title: "整合鸡GWAS及肠道菌群信息揭示其生长调控作用机理",
    number: "2017YFE0113700",
    person: "刘华珍",
    money: "135",
    date: "2018",
  },
  {
    title: "新型抗耐药菌小分子药物和家畜促生长中药的开发",
    number: "2018YFE0101600",
    person: "黄琦",
    money: "411",
    date: "2019",
  },
  {
    title: "新型冠状病毒追踪及环境风险评价",
    number: "2020YFC0845600",
    person: "金梅林",
    money: "400",
    date: "2020",
  },

  {
    title: "鸡热应激/耐热机制研究及抗热应激技术开发",
    number: "2018YFE0128100",
    person: "龚炎长",
    money: "177",
    date: "2020",
  },
  {
    title: "猪基因组调控元件与功能突变大规模鉴定及遗传效应评估",
    number: "2019YFE0115400",
    person: "赵书红",
    money: "363",
    date: "2020",
  },
  {
    title: "畜禽重要病原菌生长代谢和毒力调控机制研究",
    number: "2021YFD1800400",
    person: "周锐",
    money: "5000",
    date: "2021",
  },
  {
    title: "动物重要病原菌突破血脑屏障的分子机制",
    number: "2021YFD1800800",
    person: "王湘如",
    money: "400",
    date: "2021",
  },
  {
    title: "猪产肉性状图像表型组解析及分子设计育种前沿技术研发",
    number: "2021YFD1300800",
    person: "刘小磊",
    money: "400",
    date: "2021",
  },
  {
    title: "畜禽冠状病毒的遗传变异、致病与免疫机制",
    number: "2021YFD1801100",
    person: "肖少波",
    money: "6000",
    date: "2021",
  },
  {
    title: "牛奶和外泌体及其特异物质的功能与应用的研究",
    number: "2021YFE0115500",
    person: "张淑君",
    money: "100",
    date: "2021",
  },
  {
    title: "重要人兽共患病毒的感染与致病机制",
    number: "2022YFD1800100",
    person: "赵凌",
    money: "2000",
    date: "2022",
  },
  {
    title: "猪细菌性疫病新型疫苗创制",
    number: "2022YFD1800900",
    person: "谭臣",
    money: "2000",
    date: "2022",
  },
  {
    title: "新型冠状病毒追踪及环境风险评价",
    number: "2020YFC0845600",
    person: "金梅林",
    money: "400",
    date: "2020",
  },

  {
    title: "重要动物寄生原虫药物作用机理研究",
    number: "2022YFD1801700",
    person: "贺兰",
    money: "200",
    date: "2022",
  },
  {
    title: "高产蛋禽抗逆性形成机制及遗传解析",
    number: "2022YFF1000800",
    person: "李竞一",
    money: "200",
    date: "2022",
  },
  {
    title: "猪饲料转化效率高效测定及整合组学遗传调控机制研究",
    number: "2022YFD1301900",
    person: "项韬",
    money: "200",
    date: "2022",
  },
  {
    title: "寄生虫（隐孢子虫与贾第虫）的检测、分离与评估—PARADISE",
    number: "2022YFE0114500",
    person: "胡敏",
    money: "300",
    date: "2022",
  },
];
onMounted(() => {});
</script>

<template>
  <div class="wrap">
    <h4>
      2016年1月-2023年6月，学院共获批纵向课题988项，经费11.65亿元，其中国家级课题529项、省部级307项；获批横向课题779项，经费3.75亿元。
    </h4>
    <a-table
      :columns="column"
      :data-source="dataSource"
      :pagination="false"
      :scroll="{ y: '70vh' }"
    ></a-table>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  height: 100%;
  padding: 20px 100px;
  h4 {
    font-size: 28px;
    line-height: 60px;
    font-weight: 500;
    text-align: center;
  }
  :deep(.ant-table-wrapper) {
    .ant-table-cell {
      &:nth-child(1) {
        font-weight: bold;
      }
    }
  }
}
</style>
