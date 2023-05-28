class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function numComponents(head: ListNode | null, nums: number[]): number {
    let componentsCount:number = 0;
    const setNums = new Set<number>();
    for (const x of nums) setNums.add(x);
    while(head) {
        // 找到相同的内容，此次组件开始
        if (setNums.has(head.val)) {
            // 直到遇到不同的就可认为此次组件结束
            while(head && setNums.has(head.val)) head = head.next;
            componentsCount++;
        } else {
            head = head.next
        }
    }
    return componentsCount;
};  

let listNode = new ListNode();
let listNodeHead = listNode;
listNode.val = 0;
listNode.next = new ListNode(1, new ListNode(2, null))
let componentsNums:number[] = [1, 0];

console.log(numComponents(listNodeHead, componentsNums))