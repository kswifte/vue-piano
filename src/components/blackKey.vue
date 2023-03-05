<template>
    <div class="blackBox">
        <div class="black" v-for="(item, index) in props.data" :key="index"
            @click="createKey(item.value)"></div>
    </div>
</template>

<script setup lang='ts'>
import { createKey } from '@/utils/index'
interface Props {
    data: { key: string; value: number; }[]
}
const props = defineProps<Props>()
console.log(props.data);
</script>

<style lang='less' scoped>
.blackBox {
    display: flex;

    .black {
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