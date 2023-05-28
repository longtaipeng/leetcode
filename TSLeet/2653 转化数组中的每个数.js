/*
编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。

返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
*/

var map = function (arr, fn) {
  let result = []
  arr.forEach((element, index) => {
    result.push(fn(element, index));
  });
  return result;
};