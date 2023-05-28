package topic

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
import (
	"leet/entity"
)

func reverseList(head *entity.ListNode) *entity.ListNode {
	var per *entity.ListNode
	curr := head
	for curr != nil {
		next := curr.Next
		curr.Next = per
		per = curr
		curr = next
	}
	return per
}
