<template>
  <div class="w-screen overflow-hidden homePage">
    <el-anchor :offset="0" :bound="0" :marker="false">
      <div class="top">
        <Header></Header>
        <div class="content">
          <div class="contentText reveal-top">
            <p>专业电商客服外包</p>
            <p>一站式服务解决方案领航者</p>
          </div>
          <div class="dataPacket flex justify-center my-24 text-center">
            <div class="flex">
              <div class="mr-20 border-r border-[#C8C8C7] pr-20">
                <div class="flex items-center">
                  <el-statistic :value="outputValue1" />
                  <span class="ml-1 text-4xl text-[#0b60fe]">+</span>
                </div>
                <div class="mt-5">全国职场</div>
              </div>
              <div class="mr-20 border-r border-[#C8C8C7] pr-20">
                <div class="flex items-center">
                  <el-statistic :value="outputValue2" />
                  <span class="ml-1 text-4xl text-[#0b60fe]">+</span>
                </div>
                <div class="mt-5">全国职场</div>
              </div>
              <div>
                <div class="flex items-center">
                  <el-statistic :value="outputValue3" />
                  <span class="ml-1 text-4xl text-[#0b60fe]">+</span>
                </div>
                <div class="mt-5">全国职场</div>
              </div>
            </div>
          </div>
          <div class="downloadButton flex justify-center items-center">
            <img src="@/assets/img/download.svg" alt="" />
            <div class="downloadButtonText">
              <el-anchor-link :href="`#kf`"> 立即咨询 </el-anchor-link>
            </div>
          </div>
          <div class="contactUs flex justify-center items-center"></div>
        </div>
      </div>
      <div class="bottom" id="serviceStandards">
        <div class="bottomText reveal-top">服务标准</div>
        <div class="bottom-box flex justify-center">
          <div class="flex bottomBox justify-between">
            <div
              class="bottom-box-item reveal-top"
              v-for="item in tabList"
              :key="item.icon"
            >
              <div class="box-item-title flex items-center justify-center">
                <img :src="item.icon" alt="" />
              </div>
              <div class="box-item-title-text mt-4">{{ item.title }}</div>
              <div class="box-item-text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom" id="business">
        <div class="bottomText reveal-top my-20">解决商家痛点</div>
        <div class="flex mb-20 bottom-img-box justify-around">
          <div class="flex justify-between border-b pb-5">
            <div class="reveal-top text-center">
              <div class="box-item-title flex items-center justify-center">
                <img src="@/assets/img/11.png" alt="" class="imgs" />
              </div>
              <div class="box-item-title-text mt-6">招聘人员成本高</div>
              <div class="box-item-text">
                <p>成熟客服培养周期长</p>
                <p>需要花费大量时间、金钱</p>
              </div>
            </div>
          </div>
          <div class="flex justify-between border-b pb-5">
            <div class="reveal-top text-center">
              <div class="flex items-center justify-center">
                <img src="@/assets/img/12.png" alt="" class="imgs" />
              </div>
              <div class="box-item-title-text mt-6">人工效率低 接待跟不上</div>
              <div class="box-item-text">
                <p>旺淡季人员需求差异大</p>
                <p>人工客服接待质量无法保证</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="exclusive" id="advantage">
        <div class="bottomText reveal-top my-20">独家优势</div>
        <div class="flex mb-4 bottom-img-box reveal-top">
          <div class="exclusive-item-title mr-4 flex items-center">
            <img src="@/assets/img/13.png" alt="" />
            <div class="exclusiveBox">
              <div class="exclusiveTitle">试用无忧，满意再付费</div>
              <div class="exclusivetext">
                试乐猫外包提供三天免费试用，不满意无需支付任何费用
              </div>
            </div>
            <div class="exclusiveBox-bg"></div>
          </div>
          <div class="exclusive-item-title flex items-center">
            <img src="@/assets/img/14.png" alt="" />
            <div class="exclusiveBox">
              <div class="exclusiveTitle">持续学习，卓越服务</div>
              <div class="exclusivetext">
                在每日接待中深入了解店铺产品和话术，且持续学习
              </div>
            </div>
            <div class="exclusiveBox-bg"></div>
          </div>
        </div>
        <div class="flex bottom-img-box reveal-top">
          <div class="exclusive-item-title mr-4 flex items-center">
            <img src="@/assets/img/15.png" alt="" />
            <div class="exclusiveBox">
              <div class="exclusiveTitle">重新定义客服体验</div>
              <div class="exclusivetext">
                通过智能识别系统，实时监控回复质量，每日总结
              </div>
            </div>
            <div class="exclusiveBox-bg"></div>
          </div>
          <div class="exclusive-item-title flex items-center">
            <img src="@/assets/img/16.png" alt="" />
            <div class="exclusiveBox">
              <div class="exclusiveTitle">真实客服，纯粹体验</div>
              <div class="exclusivetext">
                专注于提供真实的客服体验，确保数据100%真实
              </div>
            </div>
            <div class="exclusiveBox-bg"></div>
          </div>
        </div>
      </div>
      <div class="scanCode" id="kf">
        <div class="bottomText reveal-top my-20">扫码添加专属你的客服管家</div>
        <div class="scanCode-img-box reveal-top">
          <img src="@/assets/img/17.png" alt="" class="scanCode-img" />
          <div class="codeBox flex justify-center items-center text-center">
            <div class="mr-10">
              <img src="@/assets/img/18.png" alt="" />
              <div class="mt-3 text-xl">客服1</div>
            </div>
            <div>
              <img src="@/assets/img/19.png" alt="" />
              <div class="mt-3 text-xl">客服2</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <div>
        <Consult></Consult>
      </div>
    </el-anchor>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { ref, onMounted, reactive } from 'vue'
import { downFileGpt } from '@/api/public'
import Consult from '@/components/layout/Consult.vue'
// 导入scrollReveal
import scrollReveal from 'scrollreveal'
import { useTransition } from '@vueuse/core'
import { retBottomScroll, retScroll } from '@/utils/scroll'
import img1 from '@/assets/img/1.png'
import img2 from '@/assets/img/2.png'
import img3 from '@/assets/img/3.png'
import img4 from '@/assets/img/4.png'
import img5 from '@/assets/img/5.png'
import img6 from '@/assets/img/6.png'

const source1 = ref(0)
const source2 = ref(0)
const source3 = ref(0)
const outputValue1 = useTransition(source1, {
  duration: 1500,
})
const outputValue2 = useTransition(source2, {
  duration: 1500,
})
const outputValue3 = useTransition(source3, {
  duration: 1500,
})
source1.value = 30
source2.value = 20000
source3.value = 1000
const tabList = ref([
  {
    icon: img1,
    title: '售前客服',
    text: '三分钟回复率＞99%',
  },
  {
    icon: img2,
    title: '售后客服',
    text: '30秒人工应答率＞90%',
  },
  {
    icon: img3,
    title: '临时客服',
    text: '操作失误包赔',
  },
  {
    icon: img4,
    title: '全包客服',
    text: '平均人工响应时长＜20秒',
  },
  {
    icon: img5,
    title: '凌晨客服',
    text: '顾客满意度＞85%',
  },
  {
    icon: img6,
    title: '后台处理【一体化】',
    text: '试用三天不满意免费',
  },
])
const data = reactive({
  scrollReveal: scrollReveal(),
})
onMounted(() => {
  retBottomScroll(data)
})
</script>
<style scoped lang="scss">
.downloadButton {
  :deep(.el-anchor__link, .el-anchor__link:focus, .el-anchor__link:hover) {
    color: #fff !important;
    font-size: 16px !important;
  }
}
</style>
