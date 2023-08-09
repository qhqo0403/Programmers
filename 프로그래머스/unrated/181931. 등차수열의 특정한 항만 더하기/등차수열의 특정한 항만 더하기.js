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