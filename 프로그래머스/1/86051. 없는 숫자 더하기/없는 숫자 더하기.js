function solution(numbers) {
  const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num1 = all.reduce((acc, cur) => acc + cur);
  let num2 = numbers.reduce((acc, cur) => acc + cur);

  return num1 - num2;
}