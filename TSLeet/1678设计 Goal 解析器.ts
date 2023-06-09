/*
请你设计一个可以解释字符串 command 的 Goal 解析器 。command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。然后，按原顺序将经解释得到的字符串连接成一个字符串。

给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。

 

示例 1：

输入：command = "G()(al)"
输出："Goal"
解释：Goal 解析器解释命令的步骤如下所示：
G -> G
() -> o
(al) -> al
最后连接得到的结果是 "Goal"
示例 2：

输入：command = "G()()()()(al)"
输出："Gooooal"
示例 3：

输入：command = "(al)G(al)()()G"
输出："alGalooG"
*/

function interpret(command: string): string {
    let resultStr = "";
    let tempResult = "";
    for (let i=0; i<command.length; i++) {
        if (command[i] === "(") {
            i++;
            while (command[i] !== ")") {
                tempResult += command[i];
                i++;
            }
            if (tempResult === "") {
                resultStr += "o"
            } else {
                resultStr += tempResult;
            }
            tempResult = "";
        }
        else {
            resultStr += command[i];
        }
    }
    return resultStr;
};

console.log(interpret("(al)G(al)()()G"))