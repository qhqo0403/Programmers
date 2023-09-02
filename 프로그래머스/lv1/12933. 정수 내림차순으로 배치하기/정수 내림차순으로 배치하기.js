function solution(n) {
    const value = n.toString();
    const answer = [];

    for (let e of value) {
        answer.push(+e);
    }
    answer.sort((a, b) => b- a);
    
    return +answer.join('');
}