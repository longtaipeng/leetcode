/*
给定一个字符串 s，计算 s 的 不同非空子序列 的个数。因为结果可能很大，所以返回答案需要对 10^9 + 7 取余 。
字符串的 子序列 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。
例如，"ace" 是 "abcde" 的一个子序列，但 "aec" 不是。

示例 1：

输入：s = "abc"
输出：7
解释：7 个不同的子序列分别是 "a", "b", "c", "ab", "ac", "bc", 以及 "abc"。
示例 2：
输入：s = "aba"
输出：6
解释：6 个不同的子序列分别是 "a", "b", "ab", "ba", "aa" 以及 "aba"。
示例 3：
输入：s = "aaa"
输出：3
解释：3 个不同的子序列分别是 "a", "aa" 以及 "aaa"。

*/

// 放弃反抗
function distinctSubseqII(s: string): number {
    const MOD = 1e9+7
    let n = s.length, ans = 0
    const f = new Array<Array<number>>(n + 1)
    for (let i = 0; i <= n; i++) f[i] = new Array<number>(26).fill(0)
    for (let i = 1; i <= n; i++) {
        const c = s.charCodeAt(i - 1) - 'a'.charCodeAt(0)
        for (let j = 0; j < 26; j++) {
            if (c != j) {
                f[i][j] = f[i - 1][j]
            } else {
                let cur = 1
                for (let k = 0; k < 26; k++) cur = (cur + f[i - 1][k]) % MOD
                f[i][j] = cur
            }
        }
    }
    for (let i = 0; i < 26; i++) ans = (ans + f[n][i]) % MOD
    return ans
}