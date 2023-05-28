/*
给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。

 

示例 1：

输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。
示例 2：

输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
示例 3：

输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。
*/
function maxRepeating(sequence: string, word: string): number {
    let sum = 0,a=''    //sum用于计数 a用于保存字符串
    for(let i=0;i<=sequence.length;i++){   
            a = a+word    //目前字符串，每次递加
            sum = i       //当前加了多少数
             if(!sequence.includes(a)){   //如果已经没有这个字符串就可以返回了，再往后加肯定不行
                 return sum
             }
    }
    return sum;
};