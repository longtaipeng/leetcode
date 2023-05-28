/*
请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠这么多毫秒。要求此函数可以解析任何值。
*/

/**
 * @param {number} millis
 */

async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  })
}