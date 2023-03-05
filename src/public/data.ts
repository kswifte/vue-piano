const a = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
const q = Math.pow(2, 1 / 12)
const d = [27.5, 55, 110, 220, 440, 880, 1760, 3520]
let count = 0
let key = createArr(9).map((i, v) => {
    return v === 0
        ? ['A0', 'A#0', 'B0']
        : v === 8
            ? ['C8']
            : a.map((i) => i.toUpperCase() + v)
})
let value = d
    .map((v, i) => {
        return i === 7
            ? createArr(4).map((k, index) => toTwo(v * Math.pow(q, index)))
            : createArr(12).map((k, index) => toTwo(v * Math.pow(q, index)))

    })
    .flat()
const data = key.map((i) => {
    return i.map((v: string) => {
        return {
            key: v,
            value: value[count++],
        }
    })
})
/**
 * 
 * @param n 数组的长度
 * @returns 返回一个length为n用undefined填充的数组
 */
function createArr(n: number) {
    return new Array(n).fill(undefined)
}
/**
 * 
 * @param n 一个小数
 * @returns 返回该小数保留小数点后两位
 */
function toTwo(n: number) {
    return Math.floor(n * 100) / 100
}
export default data