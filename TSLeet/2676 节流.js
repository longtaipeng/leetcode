/*
现给定一个函数 fn 和一个以毫秒为单位的时间 t ，请你返回该函数的 节流 版本。
节流 函数首先立即被调用，然后在 t 毫秒的时间间隔内不能再次执行，
但应该存储最新的函数参数，以便在延迟结束后使用这些参数调用 fn 。
例如，t = 50ms ，并且函数在 30ms 、 40ms 和 60ms 时被调用。
第一次函数调用会在接下来的 t 毫秒内阻止调用函数。第二次函数调用会保存参数，
而第三次调用的参数应该覆盖当前保存的第二次调用的参数，
因为第二次和第三次调用发生在 80ms 之前。一旦延迟时间过去，
节流函数应该使用延迟期间提供的最新参数进行调用，并且还应创建另一个延迟期间，时长为 80ms + t 。
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
  let timeLock = false;
  let waitArg = null;
  return function throttleInside(...args) {
    if (timeLock) waitArg = args;
    if (!timeLock) {
      timeLock = true;
      fn(...args);
      setTimeout(() => {
        timeLock = false;
        if (waitArg) {
          throttleInside(...waitArg);
          waitArg = null;
        }
      }, t)
    }
  }
};