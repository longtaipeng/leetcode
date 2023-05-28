/*
请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。

 sum 接收两个整型参数 a 和 b ，并返回 a + b 。
 fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
*/

/**
 * @param {Function} fn
 */
function memoize(fn) {
  let key = {};

  function sum(...args) {
    let sumResult = args.reduce((lastValue, currentValue) => {
      return lastValue + currentValue;
    }, 0)
    key["call_" + args.join("")] = sumResult;
    return sumResult;
  }


  function fib(n) {
    if (n <= 1) {
      return 1;
    } else {
      let result = fib(n - 1) + fib(n - 2)
      key["fib_" + n] = result;
      return result;
    }
  }

  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      let result = factorial(n - 1) * n;
      key["fib_" + n] = result;
      return result;
    }
  }

  return {
    call: (...args) => {
      let requestContent = `${fn}_${args.join("")}`
      let funcCall = {
        "sum": sum,
        "fib": fib,
        "factorial": factorial
      }
      return key[requestContent] ? key[requestContent] : funcCall[fn](...args);
    },
    getCallCount: () => {
      return Object.keys(key).length;
    }
  }
}

function memoize(fn) {
  let cache = new Map()
  return function (...args) {
    let key = `${fn}_${JSON.stringify(args)}`
    if (!cache.has(key)) {
      cache.set(key, fn(...args))
    }
    return cache.get(key)
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/