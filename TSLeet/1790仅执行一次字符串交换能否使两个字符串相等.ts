/*
给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。


示例 1：
输入：s1 = "bank", s2 = "kanb"
输出：true
解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
示例 2：
输入：s1 = "attack", s2 = "defend"
输出：false
解释：一次字符串交换无法使两个字符串相等
示例 3：
输入：s1 = "kelb", s2 = "kelb"
输出：true
解释：两个字符串已经相等，所以不需要进行字符串交换
示例 4：
输入：s1 = "abcd", s2 = "dcba"
输出：false
*/


function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true;
    let isSuccess: boolean = false;
    let differences: number = 0;
    let s1Str: string = '';
    let s2Str: string = '';
    for (let i=0; i<s1.length; i++) {
        if (s1[i] !== s2[i]) {
            differences++;
            s1Str = s1Str || s1[i];
            s2Str = s2Str || s2[i];
        }
        if (differences === 2 && s1Str === s2[i] && s2Str === s1[i]) {
            isSuccess = true;
        }
    }

    if (differences === 2 && isSuccess) {
        isSuccess = true
    } else {
        isSuccess = false;
    }
    
    return isSuccess;
};
let s1: string = "abcd";
let s2: string = "dcba";

console.log(areAlmostEqual(s1, s2))