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
    title: "一、两季三节 -- 迎新季",
    label:
      "为了让新生快速了解学校和专业，学院立足于“动科动医，永创第一”口号，在迎新季举办了“狮山寻宝”、“狮山寻蜜”、“狮山寻灵”等一系列融合牧医专业特色学科体验活动，旨在提升新生专业兴趣，感受学科魅力，在更人文、更开放、更自在的校园氛围中提升新生专业兴趣，感受学科魅力。",
    smallImg: [
      {
        title: "狮山寻蜜活动",
        img: "culture/student/list1.png",
      },
    ],
    bigImg: [
      {
        title: "新生开学典礼暨“筑梦青春”导师面对面活动",
        img: "culture/student/list2.png",
      },
    ],
  },
  {
    title: "一、两季三节 -- 毕业季",
    label:
      "学院积极响应学校号召，鼓励全院毕业生参加毕业典礼、毕业巡游、毕业荧光跑以及毕业集市等系列活动，同时，学院结合自身专业特色，在毕业巡游队伍中增加了独特的马队，祝福毕业生们在未来的学习中一马当先、马到成功，给学生的大学生涯画上完美句号。",
    smallImg: [
      {
        title: "动科动医学院毕业巡游马队",
        img: "culture/student/list3.png",
      },
    ],
    bigImg: [
      {
        title: "高翅书记在毕业典礼上发言",
        img: "culture/student/list4.png",
      },
    ],
  },
  {
    title: "一、两季三节 -- 读书节",
    label:
      "在“多读书，读好书”良好风气引导下，学院依托于牧医红色读书俱乐部，开展了“串词成章”系列读书活动和“朗读者”知识竞赛，在全院营造一种“立身以立学为先，立学以读书为本”的良好氛围。",

    bigImg: [
      {
        title: "“朗读者”决赛现场",
        img: "culture/student/list5.png",
      },
    ],
  },
  {
    title: "一、两季三节 -- 艺术节",
    label:
      "“艺术让人成为人”，学院坚持“三全育人、五育融通、师生融乐、全面发展”的育人理念，搭建多个文艺俱乐部，支持学生德智体美劳全面发展，学院合唱团曾多次在“五月的花海”合唱比赛、校舞蹈大赛中斩获佳绩，体验艺术之浪漫。",

    bigImg: [
      {
        title: "“五月的花海”比赛现场",
        img: "culture/student/list6.png",
      },
    ],
  },

  {
    title: "一、两季三节 -- 狮山欢乐节",
    label:
      "在辞旧迎新之际，全校师生汇聚狮子山下，巡游欢腾、狮身奔跃，有篝火驱寒、美食送暖，有游戏狮山、真情剧场等活动百花齐放。学院精心筹备，师生齐参与，在狮山欢乐氛围中回首过去，展望未来。",

    bigImg: [
      {
        title: "“狮山欢乐节”现场",
        img: "culture/student/list7.png",
      },
    ],
  },
  {
    title: "二、牧医三人行",
    label:
      "牧医三人行2012年3月正式启动运行，是基于学院大学生成长、发展的需要创建的师生互动交流平台，由学院学生工作办公室负责建设和管理，根据不同生涯阶段、不同学生群体、不同个性特点的多样化需求，搭建学生与专家教授、知名校友、朋辈学长的“面对面”平台，帮助学生释疑解惑，提升综合素质，促进学生全面发展和成长成才。",
    smallImg: [
      {
        title: "彭贵青教授同牧医学子畅谈生涯规划",
        img: "culture/student/list-2-1.png",
      },
      {
        title: "高嘉秀学姐分享保研经验",
        img: "culture/student/list-2-2.png",
      },
    ],
    bigImg: [
      {
        title: "刘兴斌书记和同学们畅谈",
        img: "culture/student/list-2-3.png",
      },
    ],
  },
  {
    title: "三、社会实践",
    label:
      "动科动医学院始终牢记习近平总书记的殷殷嘱托，以强农兴牧为己任，通过搭建暑期社会实践、生产实习等平台，鼓励牧医学子深入基层和生产一线，助力乡村振兴。我院社会实践立项团队内容丰富、形式多样，足迹遍布十余省市，在各级媒体发表千余篇新闻稿，其中，多项先进事迹被学习强国、人民日报客户端、中国青年网等多家媒体报道。",
    smallImg: [
      {
        title: "同学们在进行社会实践访谈",
        img: "culture/student/list-3-1.png",
      },
      {
        title: "社会实践深入稻田现场",
        img: "culture/student/list-3-2.png",
      },
    ],
    bigImg: [
      {
        title: "动物园社会实践现场",
        img: "culture/student/list-3-3.png",
      },
    ],
  },
  {
    title: "四、创新创业",
    label:
      "学院以陈焕春院士的“创新、创造、创业”三创理念为指导，通过设立本科生导师制度并搭建SRF、本创、省创、国创等系列创新训练平台，致力于为学生打造创新创业“蓄水池”，积极引导本科生进入实验室、鼓励学生参加创新创业大赛，提升我院大学生实践和自主创新能力。",
    smallImg: [
      {
        title: "动科动医学子参加“互联网+”比赛",
        img: "culture/student/list-4-1.png",
      },
    ],
    bigImg: [
      {
        title: "动科动医学子参加“挑战杯”",
        img: "culture/student/list-4-2.png",
      },
    ],
  },
  {
    title: "五、学科特色活动",
    label:
      "学院立足于培养学生的专业兴趣，扩展学生的专业眼界，举办了骨骼拼装大赛、动物基础技能大赛、宠物美容技能大赛等系列学科特色活动，将专业知识融入到实际操作中，在丰富学生课余生活的同时，提高牧医学子的专业技术水平。",
    smallImg: [
      {
        title: "研究生学长为大家讲解蜜蜂相关知识",
        img: "culture/student/list-5-1.png",
      },
      {
        title: "宠物基础技能大赛现场",
        img: "culture/student/list-5-2.png",
      },
      {
        title: "骨骼拼装大赛现场",
        img: "culture/student/list-5-3.png",
      },
    ],

    bigImg: [
      {
        title: "闵婧介绍学院学科特色实物展品",
        img: "culture/student/list-5-4.png",
      },
    ],
  },
  {
    title: "六、志愿服务",
    label:
      "学院坚持奉行“奉献、友爱、互助、进步”的志愿精神，依托成立的青年志愿者工作中心和牧医阳光志愿服务队，联合武汉动物园、明星幼儿园、武汉市小动物保护协会以及西苑社区等多个志愿服务基地，策划举办了“动物义诊”“流浪动物救助”“武汉动物园志愿者讲解”等系列活动服务15000余人次，累计服务时长达7万余小时，荣获多项志愿服务奖项。",
    smallImg: [
      {
        title: "“人畜共患病”科普宣讲",
        img: "culture/student/list-6-1.png",
      },
      {
        title: "宠物医院志愿服务",
        img: "culture/student/list-6-2.png",
      },
    ],
    bigImg: [
      {
        title: "幼儿园志愿服务",
        img: "culture/student/list-6-3.png",
      },
    ],
  },
  {
    title: "七、学术会议",
    label:
      "近年来，学院主导并承办了多项国际或国内重要学术会议，其中包括第二届One Health世界青年兽医大会、首届反刍动物大数据与应用生物信息学国际研讨会等，同时学院鼓励同学们参加相关会议，聆听学术大咖的讲座，了解学术前沿最新进展，领略畜牧兽医学科魅力。",
    multiplePhone: true,
    imgList: [
      {
        title:
          "与会人员在中美联合培养执业兽医博士（DVM）学术交流会进行研讨交流 2023",
        img: "culture/student/list-7-1.png",
      },
      {
        title: "会后合影",
        img: "culture/student/list-7-2.png",
      },
      {
        title:
          "加拿大阿尔伯塔大学Leluo Guan教授在反刍动物大数据与应用生物信息学国际研讨会上作报告 2023",
        img: "culture/student/list-7-3.png",
      },
      {
        title: "部分志愿者合影One Health世界青年兽医大会 2023",
        img: "culture/student/list-7-4.png",
      },
      {
        title: "陈焕春院士在One Health世界青年兽医大会开幕式上致辞 2023",
        img: "culture/student/list-7-5.png",
      },
    ],
  },
  {
    title: "八、文体活动 -- 牧艺年华艺术团",
    label:
      "牧医年华艺术团成立于2017年9月，是一个由学院热爱文艺的学生组成的群众性文艺团体，以“丰富学生课余文化生活，促进学生全面发展”为宗旨，致力于通过艺术形式展现学院大学生风貌，为学院文艺工作的发展助力。",
    smallImg: [
      {
        title: "牧艺年华舞蹈团",
        img: "culture/student/list-8-3.png",
      },
      {
        title: "牧艺年华合唱团",
        img: "culture/student/list-8-2.png",
      },
    ],
    bigImg: [
      {
        title: "牧艺年华主持团和礼仪队",
        img: "culture/student/list-8-1.png",
      },
    ],
  },
  {
    title: "八、文体活动 -- 瑧行剧社",
    label:
      "瑧行剧社成立于2015年，是经学院批准成立的群众性组织，旨在丰富在校师生的课余文化生活，为广大热爱表演艺术的同学提供一个展示自我的平台，提升我院文艺竞争力。瑧行剧社以“臻于舞台，行于人生”为宗旨，在日常生活中积累素材，创作和改编了大量优秀作品。其中，原创心理情景剧《一路向阳》曾获十三届心理情景剧大赛一等奖。",

    bigImg: [
      {
        title: "瑧行剧社演出话剧《十二公民》",
        img: "culture/student/list-8-4.png",
      },
    ],
  },
  {
    title: "八、文体活动 -- 体育俱乐部",
    label:
      "动科动医学院立足于“无体育不狮山，无体育不青春，无体育不人生”的运动理念，积极营造“动科动医、永创第一”的运动氛围，鼓励全院师生积极参与到体育运动中。其中，学院运动健将们多次在狮子山杯系列赛事中取得优异成绩。 ",
    smallImg: [
      {
        title: "女足夺冠",
        img: "culture/student/list-8-5.png",
      },
    ],
    bigImg: [
      {
        title: "“狮子山杯”足球赛夺冠",
        img: "culture/student/list-8-6.png",
      },
    ],
  },
  {
    title: "八、文体活动 -- 体育俱乐部",
    label:
      "目前，我院下设9个体育俱乐部，并以“狮子山杯”和“牧医杯”系列赛事为出发点，鼓励同学们“走出寝室、走向运动场、走近体育”。",
    smallImg: [
      {
        title: "排球运动员发球",
        img: "culture/student/list-8-7.png",
      },
      {
        title: "我院运动会所获奖牌",
        img: "culture/student/list-8-8.png",
      },
    ],
    bigImg: [
      {
        title: "观众为比赛队员喝彩",
        img: "culture/student/list-8-9.png",
      },
    ],
  },
];
</script>
<template>
  <div class="student-wrap">
    <SwiperPage>
      <SwiperSlide v-for="(item, index) in list" :key="index">
        <div v-if="item.bigImg" class="page-wrap">
          <div class="left-info">
            <h5>{{ item.title }}</h5>
            <p class="label">
              {{ item.label }}
            </p>
            <div class="img-wrap" v-if="item.smallImg">
              <div
                class="img-item"
                v-for="imgItem in item.smallImg"
                :key="imgItem.title"
              >
                <a-image :src="getImageUrl(imgItem.img)" />
                <p>{{ imgItem.title }}</p>
              </div>
            </div>
          </div>

          <div class="right-info">
            <div
              class="img-item"
              v-for="imgItem in item.bigImg"
              :key="imgItem.title"
            >
              <a-image :src="getImageUrl(imgItem.img)" />
              <p>{{ imgItem.title }}</p>
            </div>
          </div>
        </div>
        <div v-if="item.imgList" class="page2-wrap">
          <h5>{{ item.title }}</h5>
          <p class="label">
            {{ item.label }}
          </p>
          <div class="img-wrap" v-if="item.imgList">
            <div
              class="img-item"
              v-for="imgItem in item.imgList"
              :key="imgItem.title"
            >
              <a-image :src="getImageUrl(imgItem.img)" />
              <p>{{ imgItem.title }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </SwiperPage>
  </div>
</template>
<style scoped lang="less">
.student-wrap {
  height: 100%;
  padding: 40px;
}
h5 {
  font-size: 32px;
  font-weight: 500;
}
p {
  font-size: 24px;
  margin-top: 12px;
  font-weight: 500;
}
.label {
  margin-top: 20px;

  background-color: #f7faf8;
  padding: 12px;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
}

.page-wrap {
  .flex-row;
  gap: 55px;
  align-items: flex-start;

  .left-info {
    flex: 1;

    .img-wrap {
      .flex-row;
      gap: 20px;
      margin-top: 60px;
      .img-item {
        flex: 1;
        .flex-col;
        max-width: 50%;
      }
    }
  }
  .right-info {
    flex: 1;
    .img-item {
      .flex-col;
    }
  }
}

.page2-wrap {
  .img-wrap {
    .flex-row;
    align-items: flex-start;
    gap: 20px;
    margin-top: 60px;
    .img-item {
      flex: 1;
      .flex-col;
      max-width: 50%;
    }
  }
}
</style>
