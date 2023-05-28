/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
*/



class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

type resultType = {
    result: string,
    flag: boolean
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let resultStr: string = "";
    let isPlus: boolean = false;
    while (l1 && l2) {
        let nodeSum:number = l1.val + l2.val;
        if (isPlus) {
            nodeSum = nodeSum + 1;
        }
        if (nodeSum >= 10) {
            isPlus = true;
            nodeSum -= 10;
        } else {
            isPlus = false;
        }
        resultStr += String(nodeSum);
        l1 = l1.next;
        l2 = l2.next;
    }
    console.log(isPlus)
    let tempResult: resultType;
    if (l1) {
        tempResult = concatLast(l1, isPlus, resultStr);
    } else {
        tempResult = concatLast(l2, isPlus, resultStr);
    }
    resultStr = tempResult.result;
    isPlus = tempResult.flag;
    if (isPlus) {
        resultStr += "1";
    }
    // 构建最后的结果
    console.log(resultStr)
    if (resultStr === "") return null;
    let resultListNode = new ListNode();
    let resultListNodeHead = resultListNode;
    for (let i=0; i<resultStr.length; i++) {
        resultListNode.val = Number(resultStr[i])
        if (i !== resultStr.length-1) {
            resultListNode.next = new ListNode();
            resultListNode = resultListNode.next;
        }
    }
    return resultListNodeHead;
};

function concatLast(bigNode: ListNode | null, flag: boolean, result: string):resultType {
    while (bigNode) {
        let nodeVal = bigNode.val;
        if (flag) {
            nodeVal += 1;
        }
        if (nodeVal >= 10) {
            flag = true;
            nodeVal -= 10;
        } else {
            flag = false;
        }
        result += String(nodeVal);
        bigNode = bigNode.next;
    }
    const resultTemp: resultType = {
        result: result,
        flag: flag
    }
    return resultTemp;
}

let l1 = new Array<number>(9,9,9,9,9,9,9);
let l1ListNode = new ListNode();
let l1Head = l1ListNode;
l1.forEach(i => {
    l1ListNode.val = i;
    l1ListNode.next = new ListNode();
    l1ListNode = l1ListNode.next;
})

let l2 = new Array<number>(9,9,9,9);
let l2ListNode = new ListNode();
let l2Head = l2ListNode;
l1.forEach(i => {
    l2ListNode.val = i;
    l2ListNode.next = new ListNode();
    l2ListNode = l2ListNode.next;
})


console.log(addTwoNumbers(l1Head, l2Head))


// 大神写的
function addTwoNumbersPlus(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let addOne = 0
    let flag = new ListNode(0)
    let cur = flag

    while (addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        let sum = val1 + val2 + addOne

        addOne = sum >= 10 ? 1 : 0

        cur.next = new ListNode(sum % 10)
        cur = cur.next

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }

    return flag.next
};