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
	_ "leet/entity"
)

func mergeTwoLists(list1 *entity.ListNode, list2 *entity.ListNode) *entity.ListNode {
	if list1 == nil {
		return list2
	}
	if list2 == nil {
		return list1
	}
	newListHead := &entity.ListNode{
		Val: -1,
	}
	newList := newListHead
	for list1 != nil && list2 != nil {
		if list1.Val < list2.Val {
			newList.Next = list1
			list1 = list1.Next
			newList = newList.Next
		} else {
			newList.Next = list2
			list2 = list2.Next
			newList = newList.Next
		}
	}
	if list1 == nil {
		newList.Next = list2
	}
	if list2 == nil {
		newList.Next = list1
	}
	return newListHead.Next
}

// func main() {
// 	l1 := ListNode{
// 		Val: 1,
// 		Next: &ListNode{
// 			Val: 3,
// 			Next: &ListNode{
// 				Val:  5,
// 				Next: nil,
// 			},
// 		},
// 	}
// 	l2 := ListNode{
// 		Val: 2,
// 		Next: &ListNode{
// 			Val: 3,
// 			Next: &ListNode{
// 				Val:  4,
// 				Next: nil,
// 			},
// 		},
// 	}
// 	fmt.Printf("mergeTwoLists(&l1, &l2): %v\n", mergeTwoLists(&l1, &l2))
// }
