/*
给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。

字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。

例如， “ace” 是 “abcde” 的子序列。
 

示例 1:

输入: s = "abcde", words = ["a","bb","acd","ace"]
输出: 3
解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
Example 2:

输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
输出: 2
*/

var numMatchingSubseq = function(s, words) {
    const p = new Array(26).fill(0).map(() => new Array());
    for (let i = 0; i < words.length; ++i) {
        p[words[i][0].charCodeAt() - 'a'.charCodeAt()].push([i, 0]);
    }
    let res = 0;
    for (let i = 0; i < s.length; ++i) {
        const c = s[i];
        let len = p[c.charCodeAt() - 'a'.charCodeAt()].length;
        while (len > 0) {
            const t = p[c.charCodeAt() - 'a'.charCodeAt()].shift();
            if (t[1] === words[t[0]].length - 1) {
                ++res;
            } else {
                ++t[1];
                p[words[t[0]][t[1]].charCodeAt() - 'a'.charCodeAt()].push(t);
            }
            --len;
        }
    }
    return res;
}

console.log(numMatchingSubseq("abcde", ["a","bb","acd","ace"]))