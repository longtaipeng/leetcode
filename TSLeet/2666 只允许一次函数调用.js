/*
给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。

第一次调用返回的函数时，它应该返回与 fn 相同的结果。
第一次后的每次调用，它应该返回 undefined 。
*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let result;
  return function (...args) {
    if (result === undefined) {
      return result = fn(...args);
    } else {
      return undefined;
    }
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/