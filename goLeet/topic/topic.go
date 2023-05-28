package topic

func Search(nums []int, target int) int {
	var left, right, middle int
	left = 0
	right = len(nums) - 1
	middle = (right + left) / 2
	for left < right {
		println(nums[middle], nums[right], nums[left])
		if nums[middle] >= target {
			right = middle
			middle = (right + left) / 2
		}
		if nums[middle] <= target {
			left = middle
			middle = (right + left) / 2
		}

	}
	if nums[middle] == target {
		return middle
	} else {
		return -1
	}
}
