/*
给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串
返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
示例 1：
输入：s = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]
示例 2:
输入: s = "3z4"
输出: ["3z4","3Z4"]
*/

function letterCasePermutation(s: string): string[] {
    let result = new Array<string>();
    function dfs(idx: number, n: number, cur: string): void {
        if (idx === n) {
            result.push(cur);
            return
        }
        dfs(idx+1, n, cur + s[idx]);
        if ((s[idx] >= 'a' && s[idx] <= 'z') || (s[idx] >= 'A' && s[idx] <= 'Z')) {
            dfs(idx+1, n, cur + String.fromCharCode(s.charCodeAt(idx) ^ 32))
        }
    }
    dfs(0, s.length, "");
    return result;
};
console.log(letterCasePermutation("a1b2"))