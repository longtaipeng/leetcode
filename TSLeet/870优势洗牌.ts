/*
给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

示例 1：
输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
输出：[2,11,7,15]
示例 2：
输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
输出：[24,32,8,12]
*/

function advantageCount(nums1: number[], nums2: number[]): number[] {
   const result: number[] = [];
   nums1.sort((a, b) => a - b);
   nums2.forEach(n2 => {
    for (let i: number = 0; i < nums1.length; i++) {
        if (nums1[i] > n2) {
            result.push(nums1[i]);
            nums1.splice(i, 1);
            break;
        }
        if (i == nums1.length-1) {
            result.push(nums1[0]);
            nums1.splice(0, 1);
        }
    }
   })
   return result;
};
let nums1:number[] = [2,0,4,1,2];
let nums2:number[] = [1,3,0,0,2];
console.log(advantageCount(nums1, nums2));