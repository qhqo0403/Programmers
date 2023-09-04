function solution(arr) {
  const result = [arr[0]];
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
          result.push(arr[j]);
          i = j;
      } 
  }
  return result;
}

// 다른 풀이
function another(arr) {
    return arr.filter((n, idx) => n !== arr[idx+1]);
}
// 문제에 있던 효율성은 비슷했지만 다른 테스트케이스를 통과하는데에는 밑의 방식이 훨씬 빨랐음
