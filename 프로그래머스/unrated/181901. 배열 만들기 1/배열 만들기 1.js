function solution(n, k) {
    const answer = [];
    
    // 1 이상 n 이하
    // k 의 배수를 오름차순으로
    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            answer.push(i);
        }
    }
    return answer;
}