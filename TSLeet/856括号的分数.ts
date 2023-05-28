/*
给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：
() 得 1 分。
AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
(A) 得 2 * A 分，其中 A 是平衡括号字符串。
示例 1：
输入： "()"
输出： 1
示例 2：
输入： "(())"
输出： 2
示例 3：
输入： "()()"
输出： 2
示例 4：
输入： "(()(()))"
输出： 6
*/
// 栈
function scoreOfParentheses(s: string): number {
    let level = new Array<number>();
    level.push(0);
    for (const c of s) {
        if (c === "(") {
            level.push(0)
        } else {
            let curLevel:number = level.pop() as number;
            level.push(level.pop() as number + Math.max(curLevel * 2, 1))
        }
    }
    return level.pop() as number;
};
let s:string = "(()(()))";
console.log(scoreOfParentheses(s))