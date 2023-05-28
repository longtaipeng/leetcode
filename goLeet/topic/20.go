package topic

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。
//     每个右括号都有一个对应的相同类型的左括号。

func IsValid(s string) bool {
	// 创建映射关系
	vaildMap := map[string]int{
		"(": -1,
		")": 1,
		"[": -2,
		"]": 2,
		"{": -3,
		"}": 3,
	}
	result := make([]int, 0, 1000)

	for _, v := range s {
		isAppend := true
		value := vaildMap[string(v)]
		if len(result) > 0 {
			// 判断是不是以左括号开头，并且和右括号匹配
			if result[len(result)-1] < 0 && result[len(result)-1]+value == 0 {
				result = result[:len(result)-1]
				isAppend = false
			}
		}
		if isAppend {
			result = append(result, value)
		}
	}
	return len(result) == 0
}
