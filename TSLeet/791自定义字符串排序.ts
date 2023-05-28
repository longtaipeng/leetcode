/*
给定两个字符串 order 和 s 。order 的所有单词都是 唯一 的，并且以前按照一些自定义的顺序排序。
对 s 的字符进行置换，使其与排序的 order 相匹配。更具体地说，如果在 order 中的字符 x 出现字符 y 之前，那么在排列后的字符串中， x 也应该出现在 y 之前。
返回 满足这个性质的 s 的任意排列 。

示例 1:

输入: order = "cba", s = "abcd"
输出: "cbad"
解释: 
“a”、“b”、“c”是按顺序出现的，所以“a”、“b”、“c”的顺序应该是“c”、“b”、“a”。
因为“d”不是按顺序出现的，所以它可以在返回的字符串中的任何位置。“dcba”、“cdba”、“cbda”也是有效的输出。
示例 2:

输入: order = "cbafg", s = "abcd"
输出: "cbad"
*/

function customSortString(order: string, s: string): string {
    const cnts = new Array<number>(26).fill(0)
    for (const c of s) cnts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    let ans = ''
    for (const c of order) {
        while (cnts[c.charCodeAt(0) - 'a'.charCodeAt(0)]-- > 0) ans += c
    }
    for (let i = 0; i < 26; i++) {
        while (cnts[i]-- > 0) ans += String.fromCharCode(i + 'a'.charCodeAt(0));
    }
    return ans
}

console.log(customSortString("kqep","pekeq"))