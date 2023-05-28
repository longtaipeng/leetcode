package topic

import "strconv"

func MaxEqualRowsAfterFlips(matrix [][]int) int {
	m := make(map[string]int)
	for i := 0; i < len(matrix); i++ {
		s1, s2 := make([]byte, len(matrix[0])), make([]byte, len(matrix[0]))
		for j := 0; j < len(matrix[0]); j++ {
			s1[j] = []byte(strconv.Itoa(matrix[i][j]))[0]           // 将其变成字节，方便存储
			s2[j] = []byte(strconv.Itoa((matrix[i][j] + 1) % 2))[0] //  翻转数字
		}
		m[string(s1)]++
		m[string(s2)]++
	}
	max := 0
	// 判断最大值
	for _, v := range m {
		if v > max {
			max = v
		}
	}
	return max
}
