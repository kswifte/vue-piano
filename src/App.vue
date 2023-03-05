<template>
  <div class="container">
    <div class="first">
      <blackKey class="b" :data="first_b_data[0]" first></blackKey>
      <whiteKey :data="first_w_data[0]" first></whiteKey>
    </div>
    <div class="second" v-for="(item, index) in 7" :key="index">
      <blackKey class="b" :data="first_b_data[item]"></blackKey>
      <whiteKey :data="first_w_data[item]"></whiteKey>
    </div>
    <div class="third">
      <whiteKey :data="first_w_data[8]" end class="b1">
      </whiteKey>
    </div>
  </div>
</template>

<script setup lang="ts">
import whiteKey from '@/components/whiteKey.vue'
import blackKey from '@/components/blackKey.vue'
import data from './public/data';
const first_b_data = data.map(i => {
  return i.filter(v => v.key.includes('#'))
})
const first_w_data = data.map(i => {
  return i.filter(v => !v.key.includes('#'))
})
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 30vh;
  display: flex;
  text-align: center;

  // align-items: center;
  position: relative;

  .first {
    display: flex;
    flex-direction: column;
  }

  .b {
    transform: translateY(100%);
  }

  .b1 {
    transform: translateY(50%);
  }

  .second {
    display: flex;
    flex-direction: column;



    // &:nth-child(1) {
    //   margin-right: 2.7vw;
    // }

    // &:nth-child(2),
    // &:nth-child(3),
    // &:nth-child(4) {
    //   margin-right: 2.8vw;
    // }

    // &:nth-child(5),
    // &:nth-child(6),
    // &:nth-child(7) {
    //   margin-right: 2.82vw;
    // }

    // .b {
    //   margin-right: 2.7vw;
    // }
  }
}
</style>
