/*
请你编写一个函数，它接收一个异步函数 fn 和一个以毫秒为单位的时间 t。
它应根据限时函数返回一个有 限时 效果的函数。

限时函数是与原函数相同的函数，除非它需要 t 毫秒以上的时间来完成。
如果出现了这种情况，请你返回 "Time Limit Exceeded" 拒绝这次函数的调用。
注意，它应该返回一个字符串拒绝，而不是一个 Error 。
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // Promise.race传入一个promise数组，会返回第一个执行完成的promise，可以理解为promise赛跑。
    return Promise.race([
      fn(...args),
      new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
    ])
  }
};