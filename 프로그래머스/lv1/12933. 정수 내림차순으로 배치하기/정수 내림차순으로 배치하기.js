function solution(n) {
    const value = n.toString();
    const answer = [];

    for (let e of value) {
        answer.push(+e);
    }
    answer.sort((a, b) => b- a);
    
    return +answer.join('');
}

// 다른풀이
function solution(n) {
    const value = n.toString().split('').sort().reverse().join('');
    return +value;
}
