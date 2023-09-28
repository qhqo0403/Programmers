function solution(arr, k) {
    let answer = [...new Set(arr)];
    
    if (answer.length > k) {
        answer = answer.slice(0, k);
    } else if (answer.length < k) {
        let count = k - answer.length;
        for (let i = 0; i < count; i++) {
            answer.push(-1);
        }
    }

  return answer;
}