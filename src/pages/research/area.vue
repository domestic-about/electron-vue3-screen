<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";

const list = [
  {
    img: 'research/area/list1.png',
    text: '育种是一个持续改良的过程，育种效率低是导致我国动物育种国际竞争力不足的关键原因。开展动物组学研究，建立跨物种、多组学整合知识库，系统揭示遗传变异与重要性状间的因果关系；突破现有动物统计遗传学理论，创新基因组选择、基因分型、基因编辑、图像表型组学等育种前沿技术；创建动物基因组精准设计育种技术体系，为动物品种持续选育改良提供理论方法和前沿技术。',
    title: '动物基因组精准设计与育种'
  },
  {
    img: 'research/area/list2.png',
    text: '动物干细胞是一类可高度增殖并能多向分化的细胞，其不仅可作为育种和扩繁的供体细胞，同时也是动物源性人造肉的最佳种子细胞。此外，动物的繁殖效率是制约养殖业健康发展的关键因素。因而探索干细胞的多能性维持和定向分化机制以及动物的繁殖机能调控对于提高动物养殖效率具有重要的意义。',
    title: '动物干细胞与繁殖精准调控'
  }
]
onMounted(() => { });
</script>

<template>
  <div class="wrap">
    <SwiperPage>
      <SwiperSlide v-for="item in list" :key="item.title">
        <div class="area-item">
          <a-image :src="getImageUrl(item.img)" />
          <div class="text-info">
            <h3>{{ item.title }}</h3>
            <p class="label">{{ item.text }}</p>
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>
<style lang="less" scoped>
.wrap {
  padding-top: 63px;

  .area-item {
    .flex-row;
    gap: 40px;

    :deep(.ant-image-img) {
      height: 100%;
    }

    .text-info {
      min-width: 643px;
      flex: 1;

      h3 {
        font-size: 32px;
        font-weight: 600;
      }

      .label {
        margin-top: 10px;
        font-size: 24px;
      }
    }
  }
}
</style>
