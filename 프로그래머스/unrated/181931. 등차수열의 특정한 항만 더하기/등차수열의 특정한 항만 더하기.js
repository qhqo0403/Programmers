function solution(a, d, included) {
    var answer = 0;
    
    const numbers = [];
    
    for (let i = 0; i < included.length; i++) {
        numbers.push(a + (d * i));
    }
    for (let j = 0; j < included.length; j++) {
        if (included[j] === true) {
            answer += numbers[j];
        }
    }
    
    return answer;
}

// 다른 풀이 보고 더 정리하자면

function solution(a, d, included) {
    var answer = 0;
    for (let i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += (a + d * i);
        }
    }
    return answer;
}
