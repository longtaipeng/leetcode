/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。
示例 1:
输入: nums = [1,3,5,6], target = 5
输出: 2

示例 2:
输入: nums = [1,3,5,6], target = 2
输出: 1

示例 3:
输入: nums = [1,3,5,6], target = 7
输出: 4
*/
// 二分法
function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    
    while (left <= right) {
        let mid: number = Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid;
            right -= 1;
        } 
        if(nums[mid] < target) {
            left = mid;
            left += 1;
        }
        console.log(left,mid,right)
    }
    return left;
};

let numList:number[] = [1,3,5,6];
let target: number = 5;

console.log(searchInsert(numList, target));