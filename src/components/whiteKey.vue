<template>
    <div class="white">
        <div class="item" v-if="props.end" @click="createKey(props.data[0].value)">
            <span></span>
            <span>{{ props.end ? props.data[0].key : '' }}</span>
        </div>
        <div v-for="(k, i ) in wItem" :key="i" class="item"
            @click="createKey(props.data[i].value)" v-else>
            <span></span>
            <span>{{ props.data[i].key }}</span>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { createKey } from '@/utils/index'
interface Props {
    data: { key: string; value: number; }[],
    first?: boolean,
    end?: boolean
}
const props = defineProps<Props>()
const wItem = props.first ? 2 : 7
</script>

<style lang='less' scoped>
.white {
    display: flex;

    .item {
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