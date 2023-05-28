/*
请你编写一个函数，该函数接受一个整数数组参数 arr 和一个过滤函数 fn，并返回一个过滤后元素数量较少或元素数量相等的新数组。
返回的数组应该只包含通过过滤函数 fn(arr[i]， i) 计算后为真值的元素。
请你在不使用内置函数 Array.filter 的前提下解决该问题。
*/

var filter = function (arr, fn) {
  let result = [];
  arr.forEach((element, index) => {
    fn(element, index) && result.push(element);
  });
  return result;
};