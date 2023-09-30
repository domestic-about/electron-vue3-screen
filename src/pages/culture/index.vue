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
    title: "迎新季",
    label:
      "为了让新生快速了解学校和专业，学院立足于“动科动医，永创第一”口号，在迎新季举办了“狮山寻宝”、“狮山寻蜜”、“狮山寻灵”等一系列融合牧医专业特色学科体验活动，旨在提升新生专业兴趣，感受学科魅力，在更人文、更开放、更自在的校园氛围中提升新生专业兴趣，感受学科魅力。",
    imgList: [
      {
        img: "party/list1.png",
        text: "新生开学典礼暨“筑梦青春”导师面对面活动",
      },
      {
        img: "party/list2.png",
        text: "狮山寻蜜活动",
      },
    ],
  },
  {
    title: "毕业季",
    label:
      "学院积极响应学校号召，鼓励全院毕业生参加毕业典礼、毕业巡游、毕业荧光跑以及毕业集市等系列活动，同时，学院结合自身专业特色，在毕业巡游队伍中增加了独特的马队，祝福毕业生们在未来的学习中一马当先、马到成功，给学生的大学生涯画上完美句号。",
    imgList: [
      {
        img: "party/list3.png",
        text: "高翅书记在毕业典礼上发言",
      },
      {
        img: "party/list4.png",
        text: "动科动医学院毕业巡游马队",
      },
    ],
  },
];
const twoList = [
  {
    btnText: "二、牧医三人行",
    label:
      "牧医三人行2012年3月正式启动运行，是基于学院大学生成长、发展的需要创建的师生互动交流平台，由学院学生工作办公室负责建设和管理，根据不同生涯阶段、不同学生群体、不同个性特点的多样化需求，搭建学生与专家教授、知名校友、朋辈学长的“面对面”平台，帮助学生释疑解惑，提升综合素质，促进学生全面发展和成长成才。",
    list: [
      {
        img: "party/page3/list1.png",
        text: "彭贵青教授同牧医学子畅谈生涯规划",
      },
      {
        img: "party/page3/list2.png",
        text: "高嘉秀学姐分享保研经验",
      },
      {
        img: "party/page3/list3.png",
        text: "刘兴斌书记和同学们畅谈",
      },
    ],
  },
  {
    btnText: "三、社会实践",
    label:
      "动科动医学院始终牢记习近平总书记的殷殷嘱托，以强农兴牧为己任，通过搭建暑期社会实践、生产实习等平台，鼓励牧医学子深入基层和生产一线，助力乡村振兴。我院社会实践立项团队内容丰富、形式多样，足迹遍布十余省市，在各级媒体发表千余篇新闻稿，其中，多项先进事迹被学习强国、人民日报客户端、中国青年网等多家媒体报道。",
    list: [
      {
        img: "party/page3/list4.png",
        text: "同学们在进行社会实践访谈",
      },
      {
        img: "party/page3/list5.png",
        text: "社会实践深入稻田现场",
      },
      {
        img: "party/page3/list6.png",
        text: "动物园社会实践现场",
      },
    ],
  },
  {
    btnText: "四、创新创业",
    label:
      "学院以陈焕春院士的“创新、创造、创业”三创理念为指导，通过设立本科生导师制度并搭建SRF、本创、省创、国创等系列创新训练平台，致力于为学生打造创新创业“蓄水池”，积极引导本科生进入实验室、鼓励学生参加创新创业大赛，提升我院大学生实践和自主创新能力。",
    list: [
      {
        img: "party/page3/list7.png",
        text: "动科动医学子参加“互联网+”比赛",
      },
      {
        img: "party/page3/list8.png",
        text: "动科动医团队创新创业大赛获金奖",
      },
      {
        img: "party/page3/list9.png",
        text: "动科动医学子参加“挑战杯”",
      },
    ],
  },
  {
    btnText: "五、学科特色活动",
    label:
      "学院立足于培养学生的专业兴趣，扩展学生的专业眼界，举办了骨骼拼装大赛、动物基础技能大赛、宠物美容技能大赛等系列学科特色活动，将专业知识融入到实际操作中，在丰富学生课余生活的同时，提高牧医学子的专业技术水平。",
    list: [
      {
        img: "party/page3/list10.png",
        text: "研究生学长为大家讲解蜜蜂相关知识",
      },
      {
        img: "party/page3/list11.png",
        text: "宠物基础技能大赛现场",
      },
      {
        img: "party/page3/list12.png",
        text: "骨骼拼装大赛现场",
      },
      {
        img: "party/page3/list13.png",
        text: "幼儿园志愿服务",
      },
    ],
  },
  {
    btnText: "六、志愿服务",
    label:
      "学院坚持奉行“奉献、友爱、互助、进步”的志愿精神，依托成立的青年志愿者工作中心和牧医阳光志愿服务队，联合武汉动物园、明星幼儿园、武汉市小动物保护协会以及西苑社区等多个志愿服务基地，策划举办了“动物义诊”“流浪动物救助”“武汉动物园志愿者讲解”等系列活动服务15000余人次，累计服务时长达7万余小时，荣获多项志愿服务奖项。",
    list: [
      {
        img: "party/page3/list14.png",
        text: "闵婧介绍学院学科特色实物展品",
      },
      {
        img: "party/page3/list15.png",
        text: "“人畜共患病”科普宣讲",
      },
      {
        img: "party/page3/list16.png",
        text: "宠物医院志愿服务",
      },
    ],
  },
];
const fiveList = [
  {
    img: "party/page5/list1.png",
    text: "礼仪队",
  },
  {
    img: "party/page5/list2.png",
    text: "合唱团深情演唱《丹顶鹤》",
  },
  {
    img: "party/page5/list3.png",
    text: "牧艺年华舞蹈团",
  },
  {
    img: "party/page5/list4.png",
    text: "瑧行剧社演出话剧《十二公民》",
  },
];
const sevenList = [
  {
    img: "party/page6/list2.png",
    text: "合唱团深情演唱《丹顶鹤》",
    label:
      "牧艺年华合唱团是一支热爱音乐的团体，他们用情感连接着每一个音符,曾多次参加“五月的花海”合唱比赛并多次获一等奖佳绩。",
  },
  {
    img: "party/page6/list3.png",
    text: "牧艺年华舞蹈团",
    label:
      "牧艺年华舞蹈团由一群对舞蹈充满热忱的同学们组成，除了提升舞蹈技巧和探索各种风格，他们还致力于在舞蹈中传达情感，舞动青春。",
  },
];
const jiuList = [
  {
    label:
      "动科动医学院立足于“无体育不狮山，无体育不青春，无体育不人生”的运动理念，积极营造“动科动医、永创第一”的运动氛围，鼓励全院师生积极参与到体育运动中。其中，学院运动健将们多次在狮子山杯系列赛事中取得优异成绩。",
    list: [
      {
        img: "party/page6/list5.png",
        text: "女足夺冠",
      },
      {
        img: "party/page6/list6.png",
        text: "“狮子山杯”足球赛夺冠",
      },
    ],
  },
  {
    label:
      "目前，我院下设9个体育俱乐部，并以“狮子山杯”和“牧医杯”系列赛事为出发点，鼓励同学们“走出寝室、走向运动场、走近体育”。",
    list: [
      {
        img: "party/page6/list7.png",
        text: "女足夺冠",
      },
      {
        img: "party/page6/list8.png",
        text: "“狮子山杯”足球赛夺冠",
      },
      {
        img: "party/page6/list9.png",
        text: "“狮子山杯”足球赛夺冠",
      },
    ],
  },
];
</script>
<template>
  <div class="wrap">
    <div class="bg"></div>
    <div class="title-wrap">
      <h3>文化活动</h3>
    </div>

    <SwiperPage>
      <swiper-slide v-for="item in list" :key="item.label">
        <div class="page1-wrap">
          <button class="btn">一、两季三节</button>
          <h5>{{ item.title }}</h5>
          <p class="label">{{ item.label }}</p>
          <div class="img-list">
            <div class="img-item" v-for="i in item.imgList" :key="i">
              <a-image :src="getImageUrl(`${i.img}`)" alt="" />
              <p>{{ i.text }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="page2-wrap">
          <button class="btn">一、两季三节</button>
          <div class="cen-wrap">
            <div class="img-item">
              <a-image :src="getImageUrl('party/list5.png')" alt="" />
              <p>“朗读者”决赛现场</p>
            </div>
            <div class="text-wrap">
              <h5>读书节</h5>
              <p class="label">
                在“多读书，读好书”良好风气引导下，学院依托于牧医红色读书俱乐部，开展了“串词成章”系列读书活动和“朗读者”知识竞赛，在全院营造一种“立身以立学为先，立学以读书为本”的良好氛围。
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page2-wrap">
          <button class="btn">一、两季三节</button>
          <div class="cen-wrap">
            <div class="img-item">
              <a-image :src="getImageUrl('party/list6.png')" alt="" />
              <p>“五月的花海”比赛现场</p>
            </div>

            <div class="text-wrap">
              <h5>艺术节</h5>
              <p class="label">
                “艺术让人成为人”，学院坚持“三全育人、五育融通、师生融乐、全面发展”的育人理念，搭建多个文艺俱乐部，支持学生德智体美劳全面发展，学院合唱团曾多次在“五月的花海”合唱比赛、校舞蹈大赛中斩获佳绩，体验艺术之浪漫。
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page2-wrap">
          <button class="btn">一、两季三节</button>
          <div class="cen-wrap">
            <div class="img-item">
              <a-image :src="getImageUrl('party/list7.png')" alt="" />
              <p>“狮山欢乐节”现场</p>
            </div>
            <div class="text-wrap">
              <h5>狮山欢乐节</h5>
              <p class="label">
                在辞旧迎新之际，全校师生汇聚狮子山下，巡游欢腾、狮身奔跃，有篝火驱寒、美食送暖，有游戏狮山、真情剧场等活动百花齐放。学院精心筹备，师生齐参与，在狮山欢乐氛围中回首过去，展望未来。
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in twoList" :key="item.btnText">
        <div class="page3-wrap">
          <button class="btn">{{ item.btnText }}</button>
          <p class="label">{{ item.label }}</p>
          <div class="img-list">
            <div class="img-item" v-for="i in item.list" :key="i.text">
              <a-image :src="getImageUrl(`${i.img}`)" alt="" />
              <p>{{ i.text }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page4-wrap">
          <button class="btn">七、学术会议</button>
          <p class="label">
            近年来，学院主导并承办了多项国际或国内重要学术会议，其中包括第二届One
            Health世界青年兽医大会、首届反刍动物大数据与应用生物信息学国际研讨会等，同时学院鼓励同学们参加相关会议，聆听学术大咖的讲座，了解学术前沿最新进展，领略畜牧兽医学科魅力。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page5-wrap">
          <button class="btn">八、文体活动</button>
          <h5>牧艺年华艺术团</h5>
          <p class="label">
            牧医年华艺术团成立于2017年9月，是一个由学院热爱文艺的学生组成的群众性文艺团体，以“丰富学生课余文化生活，促进学生全面发展”为宗旨，致力于通过艺术形式展现学院大学生风貌，为学院文艺工作的发展助力。
          </p>
          <p class="label">
            牧艺年华主持团和礼仪队曾多次参加“焕春奖学金”等活动，以端庄的仪表、极富感染力的语言展现了牧医学子饱满的精神面貌。
          </p>
          <div class="img-list">
            <div class="img-item" v-for="item in fiveList" :key="item.text">
              <a-image :src="getImageUrl(`${item.img}`)" alt="" />
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page6-wrap">
          <button class="btn">八、文体活动</button>
          <div class="cen-wrap">
            <div class="img-item">
              <a-image :src="getImageUrl('party/page6/list1.png')" alt="" />
              <p>礼仪队</p>
            </div>
            <div class="text-wrap">
              <h5>牧艺年华艺术团</h5>
              <p>
                牧医年华艺术团成立于2017年9月，是一个由学院热爱文艺的学生组成的群众性文艺团体，以“丰富学生课余文化生活，促进学生全面发展”为宗旨，致力于通过艺术形式展现学院大学生风貌，为学院文艺工作的发展助力。
              </p>
              <p>
                牧艺年华主持团和礼仪队曾多次参加“焕春奖学金”等活动，以端庄的仪表、极富感染力的语言展现了牧医学子饱满的精神面貌。
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page7-wrap">
          <button class="btn">八、文体活动</button>
          <div class="card-list">
            <div class="card-item" v-for="item in sevenList" :key="item.label">
              <div class="img-item">
                <a-image :src="getImageUrl(`${item.img}`)" alt="" />
                <p>{{ item.text }}</p>
              </div>
              <p class="label">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page8-wrap">
          <button class="btn">八、文体活动</button>
          <div class="cen-wrap">
            <div class="img-item">
              <a-image :src="getImageUrl('party/page6/list4.png')" alt="" />
              <p>瑧行剧社演出话剧《十二公民》</p>
            </div>
            <div class="text-wrap">
              <h5>瑧行剧社</h5>
              <p>
                瑧行剧社成立于2015年，是经学院批准成立的群众性组织，旨在丰富在校师生的课余文化生活，为广大热爱表演艺术的同学提供一个展示自我的平台，提升我院文艺竞争力。瑧行剧社以“臻于舞台，行于人生”为宗旨，在日常生活中积累素材，创作和改编了大量优秀作品。其中，原创心理情景剧《一路向阳》曾获十三届心理情景剧大赛一等奖。
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in jiuList" :key="item.label">
        <div class="page9-wrap">
          <button class="btn">九、体育俱乐部</button>
          <p class="label">{{ item.label }}</p>
          <div class="img-list">
            <div class="img-item" v-for="i in item.list" :key="i">
              <a-image :src="getImageUrl(`${i.img}`)" alt="" />
              <p>{{ i.text }}</p>
            </div>
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

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.17;
    background: linear-gradient(
      0deg,
      #d9d9d9 -13.91%,
      rgba(217, 217, 217, 0) 83.33%
    );
    background-image: url("@img/intro/bg.png");
    background-size: 100% 100%;
  }

  .title-wrap {
    h3 {
      font-size: 48px;
      font-weight: 600;
      color: #000;
    }
  }

  .img-item {
    width: 410px;
    height: 321px;
    padding: 12px;
    background-color: #fff;

    img {
      width: 386px;
      height: 217px;
    }

    p {
      font-size: 24px;
      font-weight: 500;
      margin-top: 12px;
    }
  }

  .btn {
    width: 400px;
    font-size: 32px;
    margin: 0 auto;
    background: linear-gradient(180deg, #006e2f 0%, #003a7d 100%);
  }

  .page1-wrap {
    padding: 0 100px;
    h5 {
      margin: 18px 0 20px;
      font-size: 32px;
    }

    .label {
      font-size: 24px;
    }

    .img-list {
      .flex-row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-top: 14px;
    }
  }

  .page2-wrap {
    padding: 0 100px;
    .cen-wrap {
      width: 1010px;
      margin: 78px auto 0;
      .flex-row;
      gap: 60px;

      align-items: flex-start;

      .text-wrap {
        flex: 1;
        h5 {
          font-size: 32px;
        }
        .label {
          font-size: 24px;
        }
      }
    }
  }

  .page3-wrap {
    padding: 0 100px;
    .label {
      font-size: 24px;
      margin: 40px 0 59px;
    }

    .img-list {
      .flex-row;
      gap: 16px;
    }
  }

  .page4-wrap {
    padding: 0 100px;
    .label {
      margin-top: 40px;
      font-size: 24px;
    }
  }

  .page5-wrap {
    padding: 0 100px;
    h5 {
      margin: 20px 0;
      font-size: 32px;
    }

    .label {
      font-size: 24px;
    }

    .img-list {
      margin: 35px 0 0;
      .flex-row;
      gap: 12px;
    }
  }

  .page6-wrap {
    padding: 0 100px;
    .cen-wrap {
      .flex-row;
      align-items: flex-start;
      gap: 41px;
      margin-top: 86px;
      .text-wrap {
        width: 916px;

        h5 {
          font-size: 32px;
        }

        p {
          margin-top: 20px;
          font-size: 24px;
        }
      }
    }
  }
  .page7-wrap {
    padding: 0 100px;
    .card-list {
      margin: 55px auto 0;
      .flex-row;
      gap: 38px;
      .card-item {
        width: 410px;
        .label {
          margin-top: 16px;
          font-size: 24px;
          color: #000;
        }
      }
    }
  }
  .page8-wrap {
    padding: 0 100px;
    .cen-wrap {
      .flex-row;
      align-items: flex-start;
      gap: 41px;
      margin-top: 86px;
      .text-wrap {
        width: 592px;

        h5 {
          font-size: 32px;
        }

        p {
          margin-top: 20px;
          font-size: 24px;
        }
      }
    }
  }
  .page9-wrap {
    padding: 0 100px;
    margin: 0 auto;
    .label {
      margin: 55px auto 25px;
      font-size: 24px;
      color: #000;
    }
    .img-list {
      .flex-row;
      gap: 12px;
    }
  }
}
</style>
