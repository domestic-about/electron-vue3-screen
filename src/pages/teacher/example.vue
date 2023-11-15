<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
import WOW from "@/utils/wow";
const props = defineProps({});

onMounted(() => {
  new WOW({
    live: true,
    offset: 0,
    scrollContainer: ".example-wrap",
  }).init();
});
</script>
<template>
  <div class="example-wrap">
    <h3>全国高校黄大年式教师团队</h3>
    <p>
      华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
    </p>
    <div class="img-list wow fadeInUp">
      <div class="img-wrap">
        <a-image :src="getImageUrl('teacher/example/list1.png')"></a-image>
        <span>畜禽健康养殖教师团队合影</span>
      </div>
      <div class="img-wrap">
        <a-image :src="getImageUrl('teacher/example/list6.jpg')"></a-image>
        <span>全国黄大年式教师团队证书</span>
      </div>
    </div>

    <div class="example-item">
      <h5>坚定信念铸师魂</h5>
      <div class="row-item">
        <div class="img-wrap wow fadeInLeft">
          <a-image :src="getImageUrl('teacher/example/list2.png')"></a-image>
          <span>
            团队所在党支部获“全国先进基层党组织”称号，何启盖教授作为获奖代表进京受奖
          </span>
        </div>
        <div class="wow fadeInRight">
          <p>
            团队坚持把党的建设、文化建设和师德师风建设有机结合，以“党建+”模式着力推进理想信念教育，积极发挥价值引领作用和文化涵育功能，每年组织教师赴井冈山、延安、遵义等地开展红色教育，把党的建设和学院文化建设融入到师德师风教育之中，坚定理想信念，以党风促学风、正教风，用文化育师德、铸师魂，教育引导教师以德立身、立学、施教、育德。
          </p>
          <p>
            团队还构建贯穿职业生涯全过程的教师荣誉体系，坚持举办新教师入职、高岗教师聘任、从教周年纪念、老教师荣休等仪式，弘扬高尚师德师风，厚植尊师重教传统。
          </p>

          <p>
            近五年来，团队涌现了一批师德师风先进典型，1人获评全国三八红旗手，1人获评湖北省优秀共产党员，1人获评湖北省新冠疫情防控先进个人，1人获评湖北省师德先进个人，5人获得校师德师风表彰；团队所在学院和党支部分获“全国教育系统先进集体”“全国先进基层党组织”。
          </p>
        </div>
      </div>
    </div>
    <div class="example-item">
      <h5>立德树人育英才</h5>
      <p>
        团队坚持以立德树人为根本，践行陈焕春院士“三创”（创新、创造、创业）育人理念，不断创新人才培养模式和“三全育人”机制，推进课程思政建设，深化科教产教融合和实践育人，着力培养政治思想过硬、专业知识扎实、引领农牧行业健康发展的时代新人。
      </p>
      <p>
        近五年来，团队在人才培养上成效卓著，荣获国家教学成果二等奖等教学奖励4项，入选国家级一流课程9门，建成国家级虚拟仿真教学项目3项，主持和完成中国工程院高等农业人才培养战略咨询项目等30余项，发表教研论文26篇。
      </p>
      <div class="img-wrap wow fadeInUp">
        <a-image :src="getImageUrl('teacher/example/list3.png')"></a-image>
        <span> 赵书红教授指导同学们开展科学研究 </span>
      </div>
      <p>
        培养的学生以第一作者在Nature Genetics、Cell Host &
        Microbe等刊物发表科研论文600余篇，荣获iGEM、“互联网+”“挑战杯”“创青春”等国内外重要竞赛金奖等81项，1人获评全国百名研究生党员标兵，1人获评中国青年志愿者优秀个人奖等。
      </p>
      <p>
        团队开创的“三创”人才培养的模式被光明日报、人民日报（海外版）等媒体报道，引起强烈社会反响；团队支撑的动物科学、动物医学专业入选首批国家一流专业建设点。
      </p>
    </div>
    <div class="example-item">
      <h5>创新创造勇担当</h5>

      <div class="img-wrap wow fadeInUp">
        <a-image :src="getImageUrl('teacher/example/list4.png')"></a-image>
        <span>
          陈焕春院士向农业农村部副部长马有祥一行介绍科前股份有限公司情况
        </span>
      </div>
      <p>
        近五年来，团队教师牵头设计并推动实施了“十三五”重点研发计划多个畜禽领域的国家科学计划，研制一类新兽药猪链球菌与副猪嗜血杆菌二联亚单位疫苗等26项行业急需产品，开发基因组育种新算法等多项国际领先技术，构建国际首个猪基因编辑技术高通量功能基因筛选平台，校企联合育成“欣华蛋鸡2号”新品种，主持制订国际标准2项，主持完成的科研成果获国家科技发明/进步奖二等奖3项、湖北省科技进步一等奖等省部级科技奖励近20项；1人荣获全国创新争先奖状；1项技术入选2021年农业农村部重大引领性技术。
      </p>
    </div>
    <div class="example-item">
      <h5>服务社会作贡献</h5>
      <p>
        团队坚持“立足湖北，面向中部，辐射全国”的社会服务理念，组织团队教师常年奔走于乡村农家畜舍、现代养殖工场、企业生产车间，面向农民传授健康养殖技术，驻点企业开展联合技术攻关，用畜禽健康养殖科技成果助力农民增收致富，助推企业提质增效。
      </p>
      <div class="img-wrap wow fadeInUp">
        <a-image :src="getImageUrl('teacher/example/list5.png')"></a-image>
        <span> 团队教师深入养猪一线开展技术指导 </span>
      </div>
      <p>
        近五年来，团队与广西扬翔、罗牛山股份、湖北金旭等农牧龙头企业开展校企协同创新，携手打造了“FPF”猪场共同体、集群式楼房智能养猪技术、“铁桶式”非洲猪瘟防控体系等一批健康养殖的创新成果，构建了覆盖千万头商品猪的繁育体系，为生猪稳产保供提供系统解决方案，获农业农村部全国推广；在恩施实施“16113”黑猪生态养殖技术示范带动咸丰县2.5万户贫困户脱贫；先后有20余项成果获得转化，直接转化经费逾1亿元。
      </p>
      <p>
        团队教师创立的武汉科前生物股份有限公司在科创板上市。1团队获评全国科技助力精准扶贫先进团队、2人获评先进个人；1项目入选湖北省十大科技成果转化项目，1项技术被列入湖北省主推技术。
      </p>
    </div>
    <div class="example-item">
      <h5>建强团队创一流</h5>
      <p>
        近五年来，团队支撑的畜牧学、兽医学均入选国家“双一流”建设学科，并在第四轮学科评估中双双获评A+；团队教师领衔的1个科研团队获国家自然科学基金委创新群体持续支持，5个科研团队入选湖北省自然科学基金创新群体。
      </p>
      <p>
        近年来畜禽健康养殖教师团队坚持向黄大年同志学习，涵育传播“心有大我、至诚报国的爱国情怀，教书育人、敢为人先的敬业精神，淡泊名利、甘于奉献的高尚情操”，已建成老中青学人荟聚、理想信念坚定、师德师风高尚、教研产紧密结合、追求卓越的一流教师团队。
      </p>
    </div>
  </div>
</template>
<style scoped lang="less">
.example-wrap {
  padding: 60px 100px;
  height: 100%;
  overflow: scroll;

  justify-content: flex-start;
  h3 {
    font-size: 32px;
    text-align: center;
    margin: 20px 0;
  }
  .img-list {
    .flex-row;
    gap: 40px;
    .img-wrap {
      :deep(.ant-image) {
        width: auto;

        .ant-image-img {
          width: auto;
          height: 400px;
        }
      }
    }
  }
  .example-item {
    .flex-col;
    width: 80%;
    margin: 0 auto;
    .row-item {
      .flex-row;
      align-items: flex-start;
      gap: 20px;
      .img-wrap {
        :deep(.ant-image) {
          width: 60%;
        }
        span {
          width: 60%;
        }
      }
    }
  }
  h5 {
    text-align: center;
    font-size: 24px;
    margin: 20px 0;
    background: #cbe6ff;
    padding: 10px 20px;
    border-radius: 5px;
  }

  p {
    width: 100%;
    font-size: 20px;
    line-height: 40px;
  }
  .img-wrap {
    margin: 20px 0;
    .flex-col;
    :deep(.ant-image) {
      width: 40%;
    }
    span {
      font-size: 20px;
      margin-top: 20px;
      color: #666;
    }
  }
}
</style>
