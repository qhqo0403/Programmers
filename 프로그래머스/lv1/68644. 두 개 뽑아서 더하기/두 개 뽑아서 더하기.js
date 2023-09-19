function solution(numbers) {
    // 중복되는 숫자는 포함하지 않음
    // 계산 가능한 값을 저장할 객체 -> 중복 확인 가능
    // 투포인터
    const numCount = {};
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numCount[numbers[i] + numbers[j]] = (numCount[numbers[i] + numbers[j]] || 0) + 1;
        }
    }
    const answer = Object.keys(numCount);
    return answer.map(Number);
}