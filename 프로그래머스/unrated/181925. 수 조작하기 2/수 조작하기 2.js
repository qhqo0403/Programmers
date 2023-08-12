function solution(numLog) {
    let answer = '';
    
    for (let i = 0; i < numLog.length; i++) {
        let value = numLog[i + 1] - numLog[i];
        if (value === 1) {
            answer += 'w'
        } else if (value === -1) {
            answer += 's'
        } else if (value === 10) {
            answer += 'd'
        } else if (value === -10) {
            answer += 'a'
        }
    }
    
    return answer;
}