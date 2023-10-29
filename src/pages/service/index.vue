<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { SwiperSlide } from "swiper/vue";
import SwiperPage from "@/components/swiper/SwiperPage.vue";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => { });
const list = [
  {
    img: 'service/list2.png',
    text: '与扬翔股份研发的集群式楼房智能化猪场'
  },
  {
    img: 'service/list3.png',
    text: '与新希望集团合作签约'
  },
  {
    img: 'service/list4.png',
    text: '孵化校办企业科前生物上市'
  },
]
</script>
<template>
  <div class="wrap">
    <div class="title-wrap">
      <div class="title-info">
        <h3>社会服务</h3>
        <span>Social Services</span>
      </div>
    </div>
    <div class="content-wrap">
      <SwiperPage>
        <SwiperSlide>
          <div class="cen-wrap">
            <div class="top-wrap">
              <div class="left-info">
                <a-image :src="getImageUrl('service/list1.png')" alt="" />
                <span>与罗牛山股份校企合作签约</span>
              </div>
              <div class="right-info">
                <h5>推进协同创新，助力稳产保供</h5>
                <p>华中农业大学动物科学技术学院、动物医学院始终坚持“四个面向”，以强农兴农为己任，积极为推动畜牧业高质量发展和农业农村现代化提供人才支撑、智力支持、技术服务。</p>
              </div>
            </div>
            <div class="img-list">
              <div class="img-item" v-for="item in list" :key="item.text">
                <a-image :src="getImageUrl(item.img)" alt="" />
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="con-wrap">
            <div class="left-wrap">
              <div class="item1">
                <div class="img-item1">
                  <a-image :src="getImageUrl('service/list5.png')" alt="" />
                  <p>陈焕春院士带队深入湖南非洲猪瘟防控一线进行指导</p>
                </div>
                <div class="img-item1">
                  <a-image :src="getImageUrl('service/list7.png')" alt="" />
                  <p>
                    21届全国规模化猪场主要疫病防控与净化专题研讨会
                  </p>
                </div>
              </div>
              <div class="img-item3">
                <a-image :src="getImageUrl('service/list6.png')" alt="" />
                <p>姜勋平教授团队赴羊场指导 </p>
              </div>
            </div>
            <div class="right-wrap">
              <div class="img-item">
                <a-image :src="getImageUrl('service/list8.png')" />
                <p>李家奎教授在藏区开展技术服务</p>
              </div>
              <h5>提供科技支撑，解决国家需求</h5>
            </div>
          </div>
        </SwiperSlide>
      </SwiperPage>
    </div>

  </div>
</template>
<style scoped lang="less">
.wrap {
  .content-wrap {
    padding: 76px 0 0;

    .cen-wrap {
      padding: 0 35px;

      .top-wrap {
        .flex-row;
        justify-content: space-between;
        align-items: flex-start;

        .left-info {
          .flex-row;
          align-items: flex-start;
          gap: 12px;


          :deep(.ant-image) {
            width: 808px;
            height: 454px;
          }

          span {
            font-size: 24px;
            font-weight: 500;
            margin-top: 12px;
            width: 170px;
          }
        }

        .right-info {
          .flex-col;
          align-items: flex-end;

          gap: 61px;

          h5 {
            width: 572px;
            background: #CBE6FF;
            text-align: right;
            font-size: 32px;
            font-weight: 500;
            padding: 4px 0;
          }

          p {
            width: 301px;
            font-size: 24px;
          }
        }
      }

      .img-list {
        .flex-row;
        justify-content: flex-start;

        .img-item {
          width: 492px;

          :deep(.ant-image) {
            width: 100%;
          }

          p {
            font-size: 24px;
            font-weight: 500;
            margin-top: 8px;
          }
        }
      }

    }

    .con-wrap {
      .flex-row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 0 76px;

      p {
        font-size: 24px;
        font-weight: 500;
        margin-top: 12px;
      }

      .left-wrap {
        .flex-row;
        gap: 40px;
        align-items: flex-start;

        .item1 {
          .flex-col;
          gap: 40px;
          width: 386px;

          .img-item1 {
            :deep(.ant-image) {
              width: 100%;
              height: 218px;
            }
          }
        }

        .img-item3 {
          width: 226px;

          :deep(.ant-image) {
            width: 100%;
            height: 2186x;
          }
        }
      }

      .right-wrap {
        .flex-col;

        .img-item {
          width: 760px;

          :deep(.ant-image) {
            width: 100%;
            height: 422px;
          }
        }

        h5 {
          margin-top: 130px;
          width: 760px;
          background: #CBE6FF;
          text-align: right;
          font-size: 32px;
          font-weight: 500;
          padding: 4px 0;
        }
      }
    }
  }


}
</style>
