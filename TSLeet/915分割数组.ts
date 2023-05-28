/*
给定一个数组 nums ，将其划分为两个连续子数组 left 和 right， 使得：
left 中的每个元素都小于或等于 right 中的每个元素。
left 和 right 都是非空的。
left 的长度要尽可能小。
在完成这样的分组后返回 left 的 长度 。
用例可以保证存在这样的划分方法。
示例 1：
输入：nums = [5,0,3,8,6]
输出：3
解释：left = [5,0,3]，right = [8,6]
示例 2：
输入：nums = [1,1,1,0,6,12]
输出：4
解释：left = [1,1,1,0]，right = [6,12]
*/

function partitionDisjoint(nums: number[]): number {
    let index: number = 0, maxNums: number = nums[0], leftMax:number = maxNums;
    for (let i = 1; i < nums.length; i++) {
        if (leftMax > nums[i]) {
            index = i;
            leftMax = maxNums;
        } else {
            maxNums = maxNums > nums[i] ? maxNums : nums[i];
        }
    }
    return index + 1;
};

console.log(partitionDisjoint([3,1,8,4,9,7,12,0,0,12,6,12,6,19,24,90,87,54,92,60,31,59,75,90,20,38,52,51,74,70,86,20,27,91,55,47,54,86,15,16,74,32,68,27,19,54,13,22,34,74,76,50,74,97,87,42,58,95,17,93,39,33,22,87,96,90,71,22,48,46,37,18,17,65,54,82,54,29,27,68,53,89,23,12,90,98,42,87,91,23,72,35,14,58,62,79,30,67,44,48]))