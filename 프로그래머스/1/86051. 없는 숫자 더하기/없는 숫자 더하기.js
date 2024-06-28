function solution(numbers) {
  const all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let num1 = all.reduce((acc, cur) => acc + cur);
  let num2 = numbers.reduce((acc, cur) => acc + cur);

  return num1 - num2;
}

// 다른 풀이

function solution(numbers) {
    let criteria = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    
    for (let i = 0; i < criteria.length; i++) {
        if (numbers.includes(criteria[i])) {
            continue;
        }
        
        answer += criteria[i];
    }
    
    return answer;
}
