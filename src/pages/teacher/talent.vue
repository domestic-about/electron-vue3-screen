<script setup>
import { ref, reactive, onMounted } from "vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const column = [
  {
    title: "人才类别",
    dataIndex: "title",
    key: "title",
    align: "center",
    width: "30%",
  },
  {
    title: "人数",
    dataIndex: "num",
    key: "num",
    align: "center",
    width: 200,
  },
  {
    title: "名单",
    dataIndex: "name",
    key: "name",
    align: "left",
  },
];
const dataSource = [
  {
    title: "中国工程院院士",
    num: "1",
    name: "陈焕春",
  },
  {
    title: "全国创新争先奖章（状）获得者",
    num: "2",
    name: "2017：金梅林 2022：赵书红",
  },
  {
    title: "长江学者特聘教授",
    num: "2",
    name: "2014：肖少波 2016：曹胜波",
  },
  {
    title: "长江学者青年计划",
    num: "3",
    name: "2016：彭贵青 2020：郝海红  2021：谢书宇",
  },
  {
    title: "“国家杰出青年基金”获得者",
    num: "8",
    name: "2010：赵书红 2012：肖少波 2018：曹胜波 2019：晏向华 2020：周红波 2021：彭贵青 2021：李新云 2023：申 邦",
  },
  {
    title: "“千人计划”创新人才长期项目专家",
    num: "1",
    name: "2010：傅振芳",
  },
  {
    title: "“千人计划”创新人才短期项目专家",
    num: "1",
    name: "2014: Robin.B.Gasser",
  },
  {
    title: "国家“万人计划”科技创新领军人才",
    num: "5",
    name: "2016：肖少波 2017：赵书红 彭贵青 2019：曹  罡 2020：钱  平",
  },
  {
    title: "神农英才科技领军人才",
    num: "1",
    name: "2022：赵书红",
  },
  {
    title: "神农英才青年科技人才",
    num: "2",
    name: "2022：左  波 2023：赵云霞",
  },
  {
    title: "“青年千人计划”项目专家",
    num: "9",
    name: "2013：赵  凌 2014：苗义良 2014：张利生 2016：王  恒 2019：陶 攀 2020：李文涛 2020：韩明远 2021：司有辉 2023：朱碧波",
  },
  {
    title: "国家“优秀青年科学基金”获得者",
    num: "6",
    name: "2013：晏向华 2015：赵  凌 2017：彭贵青 2018：申 邦 2020：叶 静 2021：王湘如",
  },
  {
    title: "国家级有突出贡献中青年专家",
    num: "2",
    name: "1998：邓昌彦 2013：肖少波",
  },
  {
    title: "国家百千万人才工程、新世纪百千万人才工程",
    num: "6",
    name: "2006：赵书红 2009：彭  健 2013：肖少波 2017：曹胜波 2019：晏向华 2019：曹 罡",
  },
  {
    title: "青年拔尖人才支持计划",
    num: "9",
    name: "2014：彭贵青 2019：孙铝辉 2020：刘小磊 2020：谭 臣 2021贺 兰 2021：谢胜松 2022：滑国华 2022：周 翔 2023：付玉华",
  },
  {
    title: "教育部“骨干教师计划”",
    num: "4",
    name: "彭  健 龚炎长 袁宗辉 赵书红",
  },
  {
    title: "教育部新世纪优秀人才支持计划",
    num: "14",
    name: "2004：彭  健 周  锐 2005：赵书红 2006：方六荣 何启盖 赵俊龙 2007：肖少波 2008：余  梅 霍立军 2009：钱  平 2010：曹胜波 2012：贝为成 晏向华 2013：张安定",
  },
  {
    title: "教育部高等学校教学指导委员会专家",
    num: "3",
    name: "2013：陈焕春 赵俊龙 蒋思文",
  },
  {
    title: "国务院第七届学科评议组成员",
    num: "1",
    name: "赵书红（畜牧学）",
  },
  {
    title: "“973计划”首席科学家",
    num: "3",
    name: "2006、2010：陈焕春 2009：袁宗辉 2012：周  锐",
  },
  {
    title: "科技部创新人才推进计划-中青年科技创新领军人才",
    num: "2",
    name: "2014：肖少波 2016：彭贵青 2018：晏向华、曹罡 2020：钱平",
  },
  {
    title: "农业农村部有突出贡献专家",
    num: "4",
    name: "1986：宗贤爝 1997：袁宗辉 1999：陈焕春 彭克美",
  },
  {
    title: "国家现代农业产业技术体系岗位科学家",
    num: "9",
    name: "杨利国 何启盖 雷明刚 郭爱珍 姜勋平 李家奎 陈焕春 赵书红 彭  健 谭 臣",
  },
  {
    title: "农业农村部农业科研杰出人才",
    num: "3",
    name: "第二批：肖少波 赵书红 郭爱珍",
  },
  {
    title: "“楚天学者计划”特聘教授",
    num: "6",
    name: "2009：胡  敏 2012：赵  凌 曹  罡 彭贵青 刘翠平 刘国权",
  },
  {
    title: "“楚天学者计划”主讲教授",
    num: "3",
    name: "2013：苗义良 牟春燕 2014：张利生",
  },
  {
    title: "“楚天学者计划”讲座教授",
    num: "5",
    name: "2008：傅振芳 2010：杨金增 陶亚雄 2012：姜志华 2013：钟菊明",
  },
  {
    title: "“楚天学者计划”楚天学子",
    num: "5",
    name: "2014：戴金霞 2017：陶 攀 2020：黄 琦 2021：吴 浩 2022：赵云霞",
  },
  {
    title: "湖北省有突出贡献专家",
    num: "5",
    name: "1991：邓昌彦 1993：李明佩 1995：汪兴旺 1997：彭  健 2009：赵书红",
  },
  {
    title: "湖北省“百人计划”专家",
    num: "7",
    name: "2016：申  邦 2017：位灯国 2018：陶攀 2021：司有辉 2022：李竟一、苏 文、朱碧波",
  },
  {
    title: "湖北省“百人计划”外专百人项目",
    num: "1",
    name: "2016: lan Duncan Robertson",
  },
  {
    title: "湖北省高端人才引领培养计划",
    num: "2",
    name: "2012：袁宗辉 赵书红",
  },
  {
    title: "湖北省自然科学基金青年杰出人才",
    num: "13",
    name: "2002：赵俊龙 2003：龚炎长 2007：周  锐 2008：余  梅 2009：李凤娥 2012：晏向华 2013：贝为成 2017：王  荡 2018：王湘如 2019：谭 臣 2020：金 卉 2021：叶 静、位灯国",
  },
  {
    title: "湖北省跨世纪“111人才工程”",
    num: "1",
    name: "1997：袁宗辉",
  },
  {
    title: "湖北省新世纪高层次人才工程",
    num: "4",
    name: "第一层次：陈焕春 第二层次：袁宗辉 彭  健 金梅林",
  },
];
</script>

<template>
  <div class="table-wrap">
    <a-table
      :columns="column"
      :data-source="dataSource"
      :pagination="false"
      :scroll="{ y: '70vh' }"
    ></a-table>
  </div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
.table-wrap {
  padding-top: 40px;
  text-align: center;
  .flex-col;
  :deep(.ant-table-wrapper) {
    width: 80%;
    .ant-table-cell {
      &:nth-child(1) {
        font-weight: bold;
      }
    }
  }
}
</style>
