/*
现给定一个对象，返回该对象的有效 JSON 字符串。你可以假设这个对象只包括字符串、整数、数组、对象、布尔值和 null。
返回的字符串不能包含额外的空格。键的返回顺序应该与 Object.keys() 的顺序相同。
请你在不使用内置方法 JSON.stringify 的前提下解决这个问题。
*/

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  //return JSON.stringify(object)
  //基本类型的处理:本身值为字符串的需要双引号包着值
  if (typeof object !== typeof {} || object === null) return typeof object === typeof "" ? '\"' + object + '\"' : object;
  //引用类型处理，区分数组和对象
  let stringify = "";
  let isArray = Array.isArray(object)
  for (let key in object) {
    if (stringify) stringify += ','
    stringify += isArray ? jsonStringify(object[key]) : '\"' + key + '\"' + ":" + jsonStringify(object[key])
  }
  return isArray ? "[" + stringify + "]" : "{" + stringify + "}"
};


console.log(jsonStringify({ "a": "str", "b": -12, "c": true, "d": null }));