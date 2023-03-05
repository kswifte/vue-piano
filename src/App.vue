<template>
  <div class="container">
    <div class="item" v-for="(item, index) in data" :key="index">
      <blackKey class="b" :data="item.filter(v => v.key.includes('#'))">
      </blackKey>
      <whiteKey :data="item.filter(v => !v.key.includes('#'))"></whiteKey>
    </div>

  </div>
</template>

<script setup lang="ts">
import whiteKey from '@/components/whiteKey.vue'
import blackKey from '@/components/blackKey.vue'
import data from './public/data';
console.log(data);
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 30vh;
  display: flex;
  text-align: center;

  // align-items: center;
  position: relative;

  .item {
    display: flex;
    flex-direction: column;

    // justify-content: space-between;
    &:last-child {
      transform: translateY(50%);
      transition: none;
    }
  }

  .b {
    transform: translateY(100%);
  }

}
</style>
