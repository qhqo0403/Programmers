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

// 다른 풀이
function another(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
// new Set() 으로 중복값을 제거할 수 있음
