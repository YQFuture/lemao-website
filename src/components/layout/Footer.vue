<template>
  <div class="footer">
    <div class="footer-con flex justify-around">
      <div class="left-box">
        <img src="@/assets/img/b.png" alt="" />
        <div class="text-center text-xl font-bold text-[#000]">抖音官方号</div>
      </div>
      <div class="record-box">
        <div class="flex justify-end cursor-pointer">
          <div
            class="ml-12 text-base"
            v-for="item in tabList"
            :key="item.title"
          >
            <el-anchor-link :href="`#${item.path}`">
              {{ item.title }}
            </el-anchor-link>
          </div>
        </div>
        <div class="record">
          Copyright © 乐猫客服外包官网 Powered By
          得乐猫（深圳）远控智能有限公司 粤ICP备2024337380号
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabList = ref([
  {
    title: '首页',
    path: '/',
  },
  {
    title: '服务标准',
    path: 'serviceStandards',
  },
  {
    title: '商家痛点',
    path: 'business',
  },
  {
    title: '独家优势',
    path: 'advantage',
  },
])
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid rgba(34, 34, 34, 0.2);
  .footer-con {
    width: 1440px;
    margin: 72px auto 0px;
    .platformItem {
      padding: 46px 0 20px;
      .platformItem-img {
        border-radius: 12px;
        img {
          border-radius: 12px;
        }
      }
      .platformItem-title {
        color: #fff;
        font-size: 24px;
        text-align: center;
        margin-top: 20px;
      }
    }
    .record {
      color: #222;
      font-size: 18px;
      text-align: center;
      // padding: 36px;
      margin-top: 117px;
      margin-bottom: 72px;
      span {
        color: #0b60fe;
        cursor: pointer;
      }
    }
  }
}
:deep(.el-anchor__link, .el-anchor__link:focus, .el-anchor__link:hover) {
  color: #222 !important;
  font-size: 16px !important;
}
@media (min-width: 769px) and (max-width: 1024px) {
  .footer-con {
    width: calc(100% - 260px) !important;
  }
}
@media (min-width: 1025px) and (max-width: 1480px) {
  .footer-con {
    width: calc(100% - 100px) !important;
  }
}
</style>
