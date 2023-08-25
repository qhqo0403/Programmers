function solution(number) {
    // number는 음이 아닌 정수
    // 각 자릿수를 다 더한 후 9로 나눈 나머지 구하기
    let sum = 0;
    
    for (let n of number) {
        sum += n*1;
    }
    
    return sum % 9;
}

// 메서드 이용
function another(number) {
    return [...number].reduce((a, v) => a + Number(v)) % 9;
}
