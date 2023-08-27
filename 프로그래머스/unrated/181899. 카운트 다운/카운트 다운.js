function solution(start, end_num) {
    const answer = [];
    
    for (let i = end_num; i <= start; i++) {
        answer.push(i)
    }
    
    return answer.reverse();
}