<template>
    <div class="black">
        <div class="item" v-for="(item, index) in bItem" :key="index"
            @click="createKey(props.data[index].value)"></div>
    </div>
</template>

<script setup lang='ts'>
import { createKey } from '@/utils/index'
interface Props {
    data: { key: string; value: number; }[],
    first?: boolean
}
const props = defineProps<Props>()
const bItem = props.first ? 1 : 5
</script>

<style lang='less' scoped>
.black {
    display: flex;

    .item {
        width: 0.95vw;
        height: 15vh;
        background-color: #141313;
        border-radius: 0.3vw;
        // margin-right: 0.1vw;
        transition: all 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: inset -0.2rem -0.2rem 0.4rem #373636,
            inset 0.2rem 0.2rem 0.4rem rgb(5, 5, 5);

        &:hover {
            background-color: rgb(103, 101, 100);
        }

        &:nth-child(1) {
            margin-left: 1.475vw;
        }

        &:nth-child(2),
        &:nth-child(4) {
            margin-left: 0.9vw;
        }

        &:nth-child(5) {
            margin-left: 0.95vw;
        }

        &:nth-child(3) {
            margin-left: 2.8vw;
        }
    }

}
</style>