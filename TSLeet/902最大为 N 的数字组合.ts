/*
给定一个按 非递减顺序 排列的数字数组 digits 。你可以用任意次数 digits[i] 来写的数字。例如，如果 digits = ['1','3','5']，我们可以写数字，如 '13', '551', 和 '1351315'。
返回 可以生成的小于或等于给定整数 n 的正整数的个数 。
示例 1：
输入：digits = ["1","3","5","7"], n = 100
输出：20
解释：
可写出的 20 个数字是：
1, 3, 5, 7, 11, 13, 15, 17, 31, 33, 35, 37, 51, 53, 55, 57, 71, 73, 75, 77.
示例 2：
输入：digits = ["1","4","9"], n = 1000000000
输出：29523
解释：
我们可以写 3 个一位数字，9 个两位数字，27 个三位数字，
81 个四位数字，243 个五位数字，729 个六位数字，
2187 个七位数字，6561 个八位数字和 19683 个九位数字。
总共，可以使用D中的数字写出 29523 个整数。
示例 3:
输入：digits = ["7"], n = 8
输出：1
*/

function atMostNGivenDigitSet1(digits: string[], n: number): number {
    let result = 0;
    let nStr = String(n);
    let digitsLength = digits.length;
    for (let i=1; i<nStr.length; i++) {
        result += Math.pow(digitsLength, i);
    }
    // 到了长度相等的时候了
    // let lastNumberList:number[] = [];
    let lastNumberCount = 0;
    console.log(digits.slice(0, nStr.length).join(""))
    if (Number(digits.slice(0, nStr.length).join("")) <=  n) {
        for (let i=0; i<nStr.length; i++) {
            console.log("111")
            if (Number(digits[i]) <= Number(nStr[i])) {
                let j = i;
                lastNumberCount++;
                // while(j <= digitsLength && Number(digits[j]) <= Number(nStr[i])) {
                //     j++;
                // }
            } else {
                break;
            }
        }
    }
    console.log(lastNumberCount)
    let lastCount = Math.pow(lastNumberCount, nStr.length)
    console.log(result, lastCount)
    return result + lastCount;
};


let digits = ["5", "7", "8"]
let n = 59
atMostNGivenDigitSet(digits, n)

// 失败

function atMostNGivenDigitSet(
    digits: string[],
    n: number
): number {
    const s = String(n);
    const len = s.length;
    let ans = [...Array(len - 1).keys()].reduce(
        (a, i) => a + Math.pow(digits.length, i + 1),
        0
    );
    // console.log(ans)
    // console.log(s.split("").entries())
    for (const [i, c] of s.split("").entries()) {
        console.log(i, c)
        ans +=
            Math.pow(digits.length, len - i - 1) *
            digits.filter((d) => d < c).length;

        if (!digits.includes(c)) return ans;
    }
    return ans + 1;
}