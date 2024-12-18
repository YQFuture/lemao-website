<template>
  <div class="header flex justify-between">
    <div class="headerLeft flex items-center">
      <div class="flex items-center">
        <img class="logo ml-6" src="@/assets/img/logo.svg" alt="" />
        <div class="text-[#222] font-bold logoTitle ml-2">乐猫客服</div>
      </div>
    </div>
    <div class="headerRight flex cursor-pointer">
      <div
        class="ml-12 text-base text-[#fff]"
        v-for="item in tabList"
        :key="item.title"
      >
        <el-anchor-link :href="`#${item.path}`">
          {{ item.title }}
        </el-anchor-link>
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
  {
    title: '客服管家',
    path: 'kf',
  },
])
</script>

<style scoped lang="scss">
.header {
  width: 1150px;
  min-width: 98px;
  margin: 0 auto;
  padding: 35px 0 10px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.2);
  .headerLeft {
    .logo {
      width: 41px;
      height: 40px;
    }
    .logoTitle {
      font-size: 24px;
    }
  }
  .headerRight {
    color: #222;
    font-size: 20px;
    img {
      width: 25px;
      height: 25px;
    }
    :deep(.el-anchor__link, .el-anchor__link:focus, .el-anchor__link:hover) {
      color: #fff !important;
      font-size: 16px !important;
    }
  }
}
</style>
