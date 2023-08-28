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