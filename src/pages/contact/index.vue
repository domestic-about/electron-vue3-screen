<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => {});
const list = [
  {
    img: "contact/list1.png",
    text: "与梅西大学签订项目合作协议",
  },
  {
    img: "contact/list2.png",
    text: "Animal Diseases首刊发布",
  },
  {
    img: "contact/list3.png",
    text: "客座教授颁发证书",
  },
  {
    img: "contact/list4.png",
    text: "英国皇家兽医学院副校长、比利时列日大学来访",
  },
  {
    img: "contact/list5.png",
    text: "美国奥本大学校庆寄语",
  },
  {
    img: "contact/list6.png",
    text: "佐治亚大学来校交流",
  },
  {
    img: "contact/list7.png",
    text: "第二届世界青年兽医大会",
  },
  {
    img: "contact/list8.png",
    text: "陈焕春院士在我院承办的第八届亚洲猪病会上致词",
  },
  {
    img: "contact/list9.png",
    text: "寄生虫病原生物学国际研讨会",
  },
];
</script>
<template>
  <div class="wrap">
    <div class="title-wrap">
      <h3>国际合作与交流</h3>
    </div>

    <SwiperPage>
      <swiper-slide>
        <div class="text-wrap">
          <p>
            学院与乔治亚大学、加州大学戴维斯分校、明尼苏达大学、堪萨斯州立大学、英国剑桥大学、奥本大学、帝国理工学院、皇家兽医学院、诺丁汉大学、西澳大学、默多克大学、日本北里大学等10余所知名院校建立了合作关系，建立了动物疾病防控国际联合研究中心、动物遗传育种与繁殖国际联合研究中心、动物育种与疾病防治技术国际科技合作基地、兽医流行病学国际联合研究与培训中心、“科创中国”“一带一路”养殖与疫病防控创新院等共计5个国际科技合作基地。邀请了西班牙皇家兽医科学院院士、马德里康普斯顿大学兽医学院Arturo
            Anadón教授，法国图卢兹国立兽医大学药理毒理及生物化学系主任，西班牙皇家兽医科学院外籍院士Pierre-Louis
            Toutain教授等300余位国内外专家来院学术交流，有200余名师生赴国外交流、研修和开展合作研究，招收了201名外国留学生。举办了第二届世界青年兽医大会、国际动物遗传育种前沿科技论坛、中英动物高效养殖与疾病防控技术国际研讨会、
            “从干细胞、系统生物学到猪生产”中英双边学术研讨会、华中农大-美国依阿华州立大学Ensminger动物科学双边学术研讨会、中加动物基因组学学术研讨会、
            “中美加三边反刍动物环境生理与健康”学术研讨会、猪营养与肠道健康国际学术研讨会、亚洲猪病学会第8次学术会议等国际会议。
          </p>
          <div class="img-list">
            <div
              class="img-item"
              v-for="item in list.slice(0, 3)"
              :key="item.text"
            >
              <a-image :src="getImageUrl(`${item.img}`)" alt="" />
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="img-list">
          <div
            class="img-item"
            v-for="item in list.slice(3, 9)"
            :key="item.text"
          >
            <a-image :src="getImageUrl(`${item.img}`)" alt="" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </swiper-slide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 100%;
  position: relative;
  padding: 24px;

  .title-wrap {
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }
  .text-wrap {
    padding: 40px 100px;
    p {
      font-size: 24px;
      line-height: 40px;
      font-weight: 500;
      color: #000;
    }
  }
  .img-list {
    margin-top: 20px;
    padding: 0 100px;
    .flex-row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 16px;
    .img-item {
      width: 410px;
      height: 321px;
      padding: 12px;
      background-color: #fff;
      border-radius: 10px;
      :deep(.ant-image) {
        width: 386px;
        height: 217px;
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
