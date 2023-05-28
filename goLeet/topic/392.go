package topic

func isSubsequence(s string, t string) bool {
	i := 0
	j := 0

	for {
		if i < len(s) && j < len(t) {
			if s[i] == t[j] {
				i += 1
				j += 1
			} else {
				j += 1
			}
		} else {
			break
		}
	}
	if i == len(s) {
		return true
	}
	return false
}
