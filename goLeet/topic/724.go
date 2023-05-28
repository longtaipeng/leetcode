package topic

// func pivotIndex(nums []int) int {
// 	leftSum := 0
// 	rightSum := 0
// 	for i, v := range nums {
// 		leftSum += v
// 		for j := i; j < len(nums); j++ {
// 			rightSum += nums[j]
// 		}
// 		if leftSum == rightSum {
// 			return i
// 		} else {
// 			rightSum = 0
// 		}
// 	}
// 	return -1
// }

func pivotIndex(nums []int) int {
	var total, sum int
	for _, v := range nums {
		total += v
	}

	for i, v := range nums {
		if sum+sum+v == total {
			return i
		}
		sum += v
	}

	return -1
}
