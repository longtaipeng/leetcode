package topic

func MaxSubArray(nums []int) int {
	// 结果
	result := nums[0]
	pre := 0

	for i := range nums {
		pre = intMax(nums[i], pre+nums[i])
		result = intMax(result, pre)
	}
	return result
}

func intMax(a, b int) int {
	if a > b {
		return a
	}
	return b
}
