/*
#102 记忆化斐波那契函数
斐波那契数列指的是类似于以下的数列：

1, 1, 2, 3, 5, 8, 13, ....
也就是，第 n 个数由数列的前两个相加而来：f(n) = f(n - 1) + f(n -2)

请你完成 fibonacci 函数，接受 n 作为参数，可以获取数列中第 n 个数，例如：

fibonacci(1) // => 1
fibonacci(2) // => 1
fibonacci(3) // => 2
...
测试程序会从按顺序依次获取斐波那契数列中的数，请注意程序不要超时，也不要添加额外的全局变量
*/

const fibonacci = (n) =>
{
  const recur = (pre, next, m) => {
    if (m == 0) {
      return pre;
    } else {
      return recur(next, pre + next, m - 1);
    }
  }
  return recur(0, 1, n);
}
