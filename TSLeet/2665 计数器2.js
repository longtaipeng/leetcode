/*
请你写一个函数 createCounter. 这个函数接收一个初始的整数值 init  并返回一个包含三个函数的对象。
这三个函数是：
  increment() 将当前值加 1 并返回。
  decrement() 将当前值减 1 并返回。
  reset() 将当前值设置为 init 并返回。
*/

var createCounter = function (init) {
  let value = init;
  return {
    reset: () => value = init,
    increment: () => ++value,
    decrement: () => --value
  }
};


const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4