/*
给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。
子数组 是数组中 连续 的一部分。
示例 1：
输入：nums = [1], k = 1
输出：1
示例 2：
输入：nums = [1,2], k = 4
输出：-1
示例 3：
输入：nums = [2,-1,2], k = 3
输出：3
*/


function shortestSubarray(nums: number[], k: number): number {
    let leftPoiont=0;
    let rightPoint=0;
    let windwSum=0;
    let result = Number.MAX_VALUE;
    while(rightPoint < nums.length) {
        if (windwSum < k) {
            windwSum += nums[rightPoint];
            rightPoint++;
        } else if (windwSum > k) {
            windwSum -= nums[leftPoiont];
            leftPoiont++;
        }else {
            result = result > rightPoint - leftPoiont  ? rightPoint - leftPoiont  : result;
            windwSum += nums[rightPoint];
            rightPoint++;
        }
    }
    if (windwSum === k) {
        result = result > rightPoint - leftPoiont  ? rightPoint - leftPoiont  : result;
    }
    return result === Number.MAX_VALUE ? -1 : result;
};

console.log(shortestSubarray([77,19,35,10,-14], 19))