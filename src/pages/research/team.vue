<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => { });
const columns2 = [
  {
    title: '团队名称',
    dataIndex: 'title',
    key: 'title',
    align:"center"
  },
  {
    title: '获批类别与时间',
    dataIndex: 'time',
    key: 'time',
    align:"center"
  },
  {
    title: '学术带头人　',
    dataIndex: 'people',
    key: 'people',
    align:"center"
  },
]
const dataSource2 = [
  {
    title: '“动物重要病原分子生物学与致病机理”国家自然科学基金创新研究群体',
    time: '国家基金委（2011）年',
    people: '陈焕春'
  },
  {
    title: '“猪基因组与育种”国家自然科学基金创新研究群体',
    time: '国家基金委（2022）年',
    people: '赵书红'
  },
  {
    title: '“动物传染病基础与防治技术研究”教育部创新团队',
    time: '国家基金委（2007）年',
    people: '陈焕春'
  },
  {
    title: '“猪种质创新与遗传改良”教育部创新团队',
    time: '教育部（2009）年',
    people: '赵书红'
  },
  {
    title: '“猪基因组与育种创新团队”科技部创新人才推进计划重点领域创新团队',
    time: '科技部（2016）年',
    people: '赵书红'
  }, {
    title: '“动物病毒与宿主免疫系统相互作用研究及新型疫苗创制创新团队”农业部创新团队',
    time: '农业部（2015）',
    people: '肖少波'
  },
  {
    title: '“猪基因组与遗传改良创新团队”农业部创新团队',
    time: '农业部（2015）年',
    people: '赵书红'
  },
  {
    title: '“牛病防治基础与技术创新团队”农业部创新团队',
    time: '农业部（2015）年',
    people: '郭爱珍'
  },
  {
    title: '“猪的营养与饲料安全”湖北省自然科学基金创新群体',
    time: '湖北省（2013）年',
    people: '彭健'
  },
]
const dataSource3 = [
  {
    title: '“动物病毒与宿主免疫系统的相互作用研究及新型疫苗创制”湖北省自然科学基金创新群体',
    time: '湖北省（2014）年',
    people: '肖少波'
  },
  {
    title: '“猪细菌病的病原生物学与致病机理研究”湖北省自然科学基金创新群体',
    time: '湖北省（2016）年',
    people: '周锐'
  },
  {
    title: '“动物寄生虫病综合防控”湖北省自然科学基金创新群体',
    time: '湖北省（2017）年',
    people: '赵俊龙'
  },
  {
    title: '“生猪精准饲养”湖北省自然科学基金创新群体',
    time: '湖北省（2018）年',
    people: '晏向华'
  },
  {
    title: '“猪繁殖性状基因组学与种质创新”湖北省自然科学基金创新群体',
    time: '湖北省（2018）年',
    people: '苗义良'
  }, {
    title: '“神经嗜性人兽共患病”湖北省自然科学基金创新群体',
    time: '湖北省（2019）年',
    people: '曹胜波'
  },
  {
    title: '“猪基因组选择育种”湖北省自然科学基金创新群体',
    time: '湖北省（2020）年',
    people: '李新云'
  },
  {
    title: '“猪肠道微生物与宿主互作研究”湖北省自然科学基金创新群体',
    time: '湖北省（2021）年',
    people: '左波'
  },
  {
    title: '“动物源性人兽共患传染病防控研究”湖北省自然科学基金创新群体',
    time: '湖北省（2021）年',
    people: '周红波'
  },
]
</script>

<template>
  <div class="wrap">
        <SwiperPage>
            <swiper-slide>
        <div class="con-wrap">

          <h3>科研团队一览</h3>
          <a-table :dataSource="dataSource2" :columns="columns2" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="con-wrap">

          <h3>科研团队一览</h3>
          <a-table :dataSource="dataSource3" :columns="columns2" />
        </div>
      </swiper-slide>
        </SwiperPage>
    </div>
</template>

<style lang="less" scoped>
.wrap{
    .con-wrap {
    padding-top: 70px;

    .flex-col;
    gap: 30px;

    h3 {
      font-size: 32px;
    }
  }
}
</style>