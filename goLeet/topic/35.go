package topic

/*
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。
*/

func SearchInsert(nums []int, target int) int {
	n := len(nums)
	left, right := 0, n-1
	res := n
	for left <= right {
		mid := (right-left)>>1 + left
		if target <= nums[mid] {
			res = mid
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return res
}
