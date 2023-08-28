function solution(my_string) {
  const answer = [];
  
  for (let i = 0; i < my_string.length; i++) {
      answer.push(my_string.slice(i));
  }
  
  return answer.sort();
}

// 재귀함수로
function solution(my_string) {
  const answer = [];
  
  function helper(str) {
    if (str.length === 0) {
      return;
    }
    answer.push(str);

    return helper(str.slice(1));
  }

  helper(my_string);
  
  return answer.sort();
}
