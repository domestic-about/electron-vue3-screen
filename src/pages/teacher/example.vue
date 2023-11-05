<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { SwiperSlide } from "swiper/vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});

onMounted(() => { });
</script>
<template>
    <div class="wrap">
        <SwiperPage>
            <swiper-slide>
                <div class="page1-wrap">
                    <div class="img-list">
                        <div class="left-img-text-wrap">
                            <a-image :src="getImageUrl('teacher/list4.png')" alt="" />
                            <p>畜禽健康养殖教师团队合影</p>
                        </div>
                        <p class="label">
                            华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
                        </p>
                        <a-image :src="getImageUrl('teacher/list5.png')" alt="" />
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="page2-wrap">
                    <div class="left-img-text-wrap">
                        <a-image :src="getImageUrl('teacher/list6.png')" alt="" />
                        <p>
                            团队所在党支部获“全国先进基层党组织”称号，何启盖教授作为获奖代表进京受奖（何启盖
                            供图）
                        </p>
                    </div>
                    <div class="right-img-text-list">
                        <h5>坚定信念铸师魂</h5>
                        <p>
                            华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
                        </p>
                        <p>
                            近五年来，团队涌现了一批师德师风先进典型，1人获评全国三八红旗手，1人获评湖北省优秀共产党员，1人获评湖北省新冠疫情防控先进个人，1人获评湖北省师德先进个人，5人获得校师德师风表彰；团队所在学院和党支部分获“全国教育系统先进集体”“全国先进基层党组织"
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="page2-wrap">
                    <div class="left-img-wrap">
                        <a-image :src="getImageUrl('teacher/list3.png')" alt="" />
                        <p>
                            团队所在党支部获“全国先进基层党组织”称号，何启盖教授作为获奖代表进京受奖（何启盖
                            供图）
                        </p>
                    </div>
                    <div class="right-img-text-list">
                        <h5>立德树人育英才</h5>
                        <p>
                            华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
                        </p>
                        <p>
                            近五年来，团队涌现了一批师德师风先进典型，1人获评全国三八红旗手，1人获评湖北省优秀共产党员，1人获评湖北省新冠疫情防控先进个人，1人获评湖北省师德先进个人，5人获得校师德师风表彰；团队所在学院和党支部分获“全国教育系统先进集体”“全国先进基层党组织"
                        </p>
                        <p>培养的学生以第一作者在Nature Genetics、Cell Host &
                            Microbe等刊物发表科研论文600余篇，荣获iGEM、“互联网+”“挑战杯”“创青春”等国内外重要竞赛金奖等81项，1人获评全国百名研究生党员标兵，1人获评中国青年志愿者优秀个人奖等。
                        </p>
                        <p>

                            团队开创的“三创”人才培养的模式被光明日报、人民日报（海外版）等媒体报道，引起强烈社会反响；团队支撑的动物科学、动物医学专业入选首批国家一流专业建设点。</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="page2-wrap">
                    <div class="left-img-wrap">
                        <a-image :src="getImageUrl('teacher/list9.png')" alt="" />
                        <p>团队教师深入养猪一线开展技术指导</p>
                    </div>
                    <div class="right-img-text-list">
                        <h5>服务社会作贡献</h5>
                        <p>
                            团队坚持“立足湖北，面向中部，辐射全国”的社会服务理念，组织团队教师常年奔走于乡村农家畜舍、现代养殖工场、企业生产车间，面向农民传授健康养殖技术，驻点企业开展联合技术攻关，用畜禽健康养殖科技成果助力农民增收致富，助推企业提质增效。
                        </p>
                        <p>
                            近五年来，团队与广西扬翔、罗牛山股份、湖北金旭等农牧龙头企业开展校企协同创新，携手打造了“FPF”猪场共同体、集群式楼房智能养猪技术、“铁桶式”非洲猪瘟防控体系等一批健康养殖的创新成果，构建了覆盖千万头商品猪的繁育体系，为生猪稳产保供提供系统解决方案，获农业农村部全国推广；在恩施实施“16113”黑猪生态养殖技术示范带动咸丰县2.5万户贫困户脱贫；先后有20余项成果获得转化，直接转化经费逾1亿元。
                        </p>
                        <p>
                            团队教师创立的武汉科前生物股份有限公司在科创板上市。1团队获评全国科技助力精准扶贫先进团队、2人获评先进个人；1项目入选湖北省十大科技成果转化项目，1项技术被列入湖北省主推技术。
                        </p>

                    </div>
                </div>
            </swiper-slide>
            <SwiperSlide>
                <div class="page2-wrap">
                    <div class="left-img-wrap">
                        <a-image :src="getImageUrl('contact/list4.png')" alt="" />
                    </div>
                    <div class="right-img-text-list">
                        <h5>建强团队创一流</h5>
                        <p>
                            近五年来，团队支撑的畜牧学、兽医学均入选国家“双一流”建设学科，并在第四轮学科评估中双双获评A+；团队教师领衔的1个科研团队获国家自然科学基金委创新群体持续支持，5个科研团队入选湖北省自然科学基金创新群体。
                        </p>
                        <p>
                            近年来畜禽健康养殖教师团队坚持向黄大年同志学习，涵育传播“心有大我、至诚报国的爱国情怀，教书育人、敢为人先的敬业精神，淡泊名利、甘于奉献的高尚情操”，已建成老中青学人荟聚、理想信念坚定、师德师风高尚、教研产紧密结合、追求卓越的一流教师团队。
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </SwiperPage>
    </div>
</template>
<style scoped lang="less">
.wrap {
    .page1-wrap {
        margin-top: 10px;
        padding: 0 100px;

        .label {
            font-size: 24px;
            font-weight: 500;
            color: #000;
        }

        .img-list {
            margin-top: 20px;
            .flex-row;
            align-items: stretch;

            .left-img-text-wrap {
                .flex-col;
                align-items: flex-start;
                gap: 33px;

                :deep(.ant-image-img) {
                    width: 813px;
                    height: 30vh;
                }

                p {
                    font-size: 24px;
                    font-weight: 500;
                }
            }
        }

        :deep(.ant-image-img) {
            width: auto;
            height: 30vh;
        }

        .label {
            flex: 1;
            padding-left: 23px;
        }
    }

    .page2-wrap {
        .flex-row;
        align-items: flex-start;
        gap: 55px;
        margin-top: 20px;
        padding: 0 120px;

        .left-img-text-wrap {
            width: 387px;
            .flex-col;
            gap: 17px;

            :deep(.ant-image) {
                width: 380px;
                height: 560px;
            }

            p {
                font-weight: 500;
                margin-top: 10px;
                font-size: 24px;
            }
        }

        .left-img-wrap {
            width: 387px;
            .flex-col;
            gap: 17px;

            :deep(.ant-image) {
                width: 380px;
            }

            p {
                font-weight: 500;
                margin-top: 10px;
                font-size: 24px;
            }
        }

        .right-img-text-list {
            h5 {
                background-color: #cbe6ff;
                font-size: 32px;
                font-weight: 500;
                padding: 5px 0;
            }

            p {
                margin: 20px 0;
                font-size: 24px;
            }
        }
    }
}
</style>
