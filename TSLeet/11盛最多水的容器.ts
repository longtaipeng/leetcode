// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：[1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水的最大值为 49。


// 双指针
function maxArea(height: number[]): number {
    let i: number = 0;
    let j: number = height.length - 1;
    let area: number = 0;
    while (i < j) {
        const curArea = (j - i) * (height[i] > height[j] ? height[j] : height[i]);
        if (curArea > area) {
            area = curArea;
        }
        if (height[i] < height[j]) i++;
        else j--;
    }
    return area;
};

let height: number[] = [2,3,4,5,18,17,6];
console.log(maxArea(height))