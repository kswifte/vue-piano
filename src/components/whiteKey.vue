<template>
    <div class="whiteBox">
        <div v-for="(k, i ) in props.data" :key="k.key" class="white"
            @click="createKey(k.value)">
            <span></span>
            <span>{{ k.key }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { createKey } from '@/utils/index'
interface Props {
    data: { key: string; value: number; }[]
}
const props = defineProps<Props>()
</script>

<style lang='less' scoped>
.whiteBox {
    display: flex;

    .white {
        width: 1.8vw;
        height: 30vh;
        background-color: #f5f5f5;
        border-radius: 0.5vw;
        margin-right: 0.1vw;
        transition: all 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: inset -0.2rem -0.2rem 0.4rem #bfbfbf,
            inset 0.2rem 0.2rem 0.4rem #fff;

        &:hover {
            background-color: rgb(219, 217, 216);
        }

    }
}
</style>