/*
编写一个函数，将对象数组 arr 转换为矩阵 m 。
arr 是一个由对象组成的数组或一个数组。数组中的每个项都可以包含深层嵌套的子数组和子对象。它还可以包含数字、字符串、布尔值和空值。
矩阵 m 的第一行应该是列名。如果没有嵌套，列名是对象中的唯一键。如果存在嵌套，列名是对象中相应路径，以点号 "." 分隔。
剩余的每一行对应 arr 中的一个对象。矩阵中的每个值对应对象中的一个值。如果给定对象在给定列中没有值，则应该包含空字符串 "" 。
矩阵中的列应按 字典升序 排列。
*/

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
  let result = [];
  let paramsArr = {};
  let paramsArrKey = [];

  function analysisKey(object) {
    let keys = Object.keys(object).sort();
    for (let i = 0; i < keys.length; i++) {
      if (typeof object[keys[i]] == "object") {
        let res = analysisKey(object[keys[i]]);
        keys[i] = res;
      }
    }
    return keys;
  }

  // 解析arr对象
  for (let i = 0; i < arr.length; i++) {
    // object
    let keys = analysisKey(arr[i]);
    paramsArrKey = new Set([...paramsArrKey, ...keys]);
  }
  console.log("par", paramsArrKey);
};

let arr = [
  { "a": { "b": 1, "c": 2 } },
  { "a": { "b": 3, "d": 4 } }
]
jsonToMatrix(arr)
