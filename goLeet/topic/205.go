package topic

import "fmt"

func isIsomorphic(s string, t string) bool {

	if len(s) != len(t) {
		return false
	}
	s1 := map[byte]byte{}
	t1 := map[byte]byte{}

	for i := range s {
		x, y := s[i], t[i]
		fmt.Printf("x: %v, y:%v\n", x, y)
		if s1[x] > 0 && s1[x] != y || t1[y] > 0 && t1[y] != x {
			return false
		}
		s1[x] = y
		t1[y] = x
		fmt.Printf("s1[x]: %v, t1[y]: %v\n", s1[x], t1[y])
	}

	return true
}
