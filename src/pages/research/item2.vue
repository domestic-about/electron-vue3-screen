<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
const props = defineProps({});
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
onMounted(() => { });
</script>

<template>
    <div class="wrap">
        <SwiperPage>
            <swiper-slide>
                <div class="element-list">
                    <div class="element-item">
                        <button class="btn">动物基因组精准设计与育种</button>
                        <p>育种是一个持续改良的过程，育种效率低是导致我国动物育种国际竞争力不足的关键原因。开展动物组学研究，建立跨物种、多组学整合知识库，系统揭示遗传变异与重要性状间的因果关系；突破现有动物统计遗传学理论，创新基因组选择、基因分型、基因编辑、图像表型组学等育种前沿技术；创建动物基因组精准设计育种技术体系，为动物品种持续选育改良提供理论方法和前沿技术。
                        </p>
                    </div>
                    <div class="element-item">
                        <button class="btn">动物干细胞与繁殖精准调控</button>
                        <p>动物干细胞是一类可高度增殖并能多向分化的细胞，其不仅可作为育种和扩繁的供体细胞，同时也是动物源性人造肉的最佳种子细胞。此外，动物的繁殖效率是制约养殖业健康发展的关键因素。因而探索干细胞的多能性维持和定向分化机制以及动物的繁殖机能调控对于提高动物养殖效率具有重要的意义。
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="element-list">
                    <div class="element-item">
                        <button class="btn">动物病原致病机制与防控技术产品创新</button>
                        <p>当前在免疫压力、环境变化等诸多因素的影响下，一些老的动物疫病出现新症状、病原出现新变异。同时，新病原也正以前所未有的速度持续出现。疫病的发生、传播、流行与变异变得日趋复杂，不仅对健康养殖构成了重大威胁，同时也严重威胁人类健康。病原-宿主-生境相互作用构成了病原感染、致病免疫、传播演化的基础。深度解析病原-宿主-生境间的相互作用，阐明病原生命周期的规律和本质，揭示动物疫病的流行传播规律、致病与免疫机制，为药物精准设计提供新靶标。研发防控新技术、新产品，为动物疫病的精准防控和净化根除提供有力支撑，保障动物健康。</p>
                    </div>
                    <div class="element-item">
                        <button class="btn">营养物质代谢流调控与动物高效生产</button>
                        <p>我国是生猪与淡水鱼生产大国与饲料消费大国，但是却存在营养供给不能精准满足不同生理阶段动物需求；饲料资源短缺导致饲料原料高度依赖进口；以及影响饲料安全的持久性污染物污染严重，预警机制不够完善的突出问题，导致动物最佳生产潜能未能充分发挥，生产效率低，并威胁食品安全。通过深入开展主要营养物质全景式代谢网络分析，解析各营养物质在机体多个靶器官中的精准代谢流图谱和互作机制，形成提高动物生产性能和产品品质的精准营养供给方案；通过生物质转化饲料资源的研发与高效利用，缓解饲料资源短缺问题；研究影响饲料安全的持久性污染物预警机制与防控措施，为实现动物精准营养调控提供理论和技术支撑。</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="element-list">
                    <div class="element-item">
                        <button class="btn">智能化养殖与废弃物资源化利用</button>
                        <p>针对制约我国养殖业发展的环境应激严重、污染问题突出、智能化程度低等关键问题，开展养殖对象与环境因子相互影响机制、养殖信息智能感知方法、养殖废弃物关键组分迁移转化机理等研究，创新智能环控、精准饲养、养殖废弃物资源化利用等技术与设备，构建智慧养殖大数据管控平台，研发新型高档蛋白饲料和生物有机肥，为动物育种、健康养殖和实现“双碳”目标提供理论、技术和产品支撑。
                        </p>
                    </div>
                    <div class="element-item">
                        <button class="btn">多手段为动物疾病保驾护航</button>
                        <p>针对臧牦牛、藏猪等地方特色品种的特点开发了各种透皮剂、缓蚀剂等治疗药物，取得很好疗效；从多重分子生物学、多重组学等方面对奶牛乳腺炎、奶牛不孕不育等反刍动物疾病机理和诊断以及治疗提出了新的见解和诊断技术；深入研究了电针对动物的镇痛的分子机理，并初步筛选出了镇痛效果良好的药物；建立了犬相关肿瘤细胞系以及犬肿瘤准确诊断标准和治疗效果良好的组剂；对家禽重金属、霉菌毒素等中毒建立了快速诊断方法和效果良好的防治方剂；另外也对宠物、马、两栖动物和爬行动物的肠道微生物和疾病之间的关系进行了深入研究，并开发如益生菌、粪菌移植等效果良好的治疗方法和产品。
                        </p>
                    </div>
                </div>
            </swiper-slide>
        </SwiperPage>
    </div>
</template>
<style lang="less" scoped>
.wrap {
    padding-top: 63px;

    .element-list {
        .flex-col;
        gap: 48px;

        .element-item {
            .flex-col;
            gap: 20px;
            .btn {
                border-radius: 7.443px;
                background: linear-gradient(180deg, #006E2F 0%, #003A7D 100%);
            }
            p{
                font-size: 24px;
                color: #000;
            }
        }
    }
}</style>