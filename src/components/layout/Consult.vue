<template>
  <div class="consult">
    <div class="qrCode flex justify-center items-center">
      <el-tooltip class="box-item" effect="light" placement="left" :offset="50">
        <template #content>
          <div class="kfBox">
            <img :src="qrCode[currentIndex].img" alt="" class="ml-4 mt-5" />
            <div class="my-2 text-center text-[#000] text-xl">微信扫码咨询</div>
          </div>
        </template>
        <div class="flex justify-center items-center cursor-pointer">
          <img src="@/assets/img/2.svg" alt="" />
        </div>
      </el-tooltip>
    </div>
    <div class="mt-2 mb-4 text-center text-[#222222]">在线咨询</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import kf1 from '@/assets/img/18.png'
import kf2 from '@/assets/img/19.png'

const currentIndex = ref<number>(0)
const qrCode = ref([
  {
    img: kf1,
  },
  {
    img: kf2,
  },
])

let timer: any = null

onMounted(() => {
  startTimer()
})
const startTimer = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % qrCode.value.length
  }, 3000) // 每隔3秒切换一次二维码
}

onUnmounted(() => {
  clearInterval(timer) // 清除定时器
})
</script>

<style scoped lang="scss">
.consult {
  position: fixed;
  top: 536px;
  // top: 0px;
  right: 30px;
  // width: 100px;
  // height: 150px;
  padding: 15px;
  border-radius: 500px;
  background: #fff;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.15);
  .qrCode {
    width: 70px;
    height: 70px;
    background: #228afa;
    border-radius: 50%;
  }
}
.kfBox {
  width: 250px;
  // height: 340px;
}
.box-item {
}
</style>
