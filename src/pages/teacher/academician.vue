<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { getImageUrl } from "@/utils";
const props = defineProps({});
onMounted(() => { });
</script>
<template>
    <div class="wrap">
        <div class="img-list">
            <div class="left-img-text-wrap">
                <a-image :src="getImageUrl('teacher/list1.jpg')" alt="" />
                <p>畜禽健康养殖教师团队合影</p>
            </div>
            <p class="label">
                华中农业大学畜禽健康养殖教师团队由家畜传染病学家陈焕春院士于上世纪90年代初组建，30多年来，团队坚持“以立德树人为根本，以强农兴农为己任”，聚焦畜禽健康养殖关键问题，深化科教产教融合，薪火传承、接续奋斗，书写了“人才立国、科技强国、产业兴国”的华农牧医华章，为我国农牧高等教育事业和畜牧业现代化建设作出了重要贡献。
            </p>
            <a-image :src="getImageUrl('teacher/list2.jpg')" alt="" />
        </div>
    </div>
</template>
<style scoped lang="less">
.wrap {
    margin-top: 10px;

    .img-list {
        margin-top: 20px;
        .flex-row;
        align-items: stretch;
        gap: 20px;

        .left-img-text-wrap {
            .flex-col;
            align-items: flex-start;
            gap: 12px;

            :deep(.ant-image-img) {
                width: 813px;
                height: 30vh;
            }

            p {
                font-size: 24px;
                font-weight: 500;
            }
        }

        .label {
            font-size: 24px;
            color: #000;
        }

        :deep(.ant-image-img) {
            width: auto;
            height: 30vh;
        }
    }
}
</style>
